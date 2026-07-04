from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict, BeforeValidator
from typing import List, Optional, Annotated, Any
from bson import ObjectId
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Origem Dental Clinic API")
api_router = APIRouter(prefix="/api")


def _validate_object_id(v: Any) -> str:
    if isinstance(v, ObjectId):
        return str(v)
    return str(v)


PyObjectId = Annotated[str, BeforeValidator(_validate_object_id)]


class Appointment(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra="ignore")

    id: Optional[PyObjectId] = Field(default=None, alias="_id")
    name: str
    email: EmailStr
    phone: str
    treatment: str
    message: Optional[str] = ""
    preferred_date: Optional[str] = ""
    status: str = "novo"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class AppointmentCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    treatment: str
    message: Optional[str] = ""
    preferred_date: Optional[str] = ""


@api_router.get("/")
async def root():
    return {"message": "Origem Dental Clinic API"}


@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(payload: AppointmentCreate):
    doc = payload.model_dump()
    doc["status"] = "novo"
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.appointments.insert_one(doc)
    saved = await db.appointments.find_one({"_id": result.inserted_id})
    return Appointment.model_validate(saved)


@api_router.get("/appointments", response_model=List[Appointment])
async def list_appointments():
    docs = await db.appointments.find().sort("created_at", -1).to_list(1000)
    return [Appointment.model_validate(d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
