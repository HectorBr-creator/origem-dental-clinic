"""Backend tests for Origem Dental Clinic appointment endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://serene-smile-clinic.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health / root ---
def test_root(api_client):
    r = api_client.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


# --- Appointment CRUD ---
class TestAppointments:
    def test_create_appointment_returns_saved_object(self, api_client):
        payload = {
            "name": "TEST_Maria Silva",
            "email": "test_maria@example.pt",
            "phone": "+351 912 345 678",
            "treatment": "Implantes Dentários",
            "message": "Gostaria de saber mais sobre implantes.",
            "preferred_date": "2026-02-15",
        }
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["treatment"] == payload["treatment"]
        assert data["status"] == "novo"
        assert data.get("id"), "id must be present"
        assert "_id" not in data, "internal _id must not be exposed"
        assert "created_at" in data

    def test_create_minimum_required_fields(self, api_client):
        payload = {
            "name": "TEST_Joao",
            "email": "test_joao@example.pt",
            "phone": "912111222",
            "treatment": "Ortodontia",
        }
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["status"] == "novo"
        assert d["message"] == ""
        assert d["preferred_date"] == ""

    def test_missing_name_returns_422(self, api_client):
        payload = {
            "email": "test@example.pt",
            "phone": "912345678",
            "treatment": "Implantes Dentários",
        }
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 422

    def test_missing_email_returns_422(self, api_client):
        payload = {"name": "TEST", "phone": "912345678", "treatment": "Ortodontia"}
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 422

    def test_missing_phone_returns_422(self, api_client):
        payload = {"name": "TEST", "email": "t@e.pt", "treatment": "Ortodontia"}
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 422

    def test_missing_treatment_returns_422(self, api_client):
        payload = {"name": "TEST", "email": "t@e.pt", "phone": "912"}
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 422

    def test_invalid_email_returns_422(self, api_client):
        payload = {
            "name": "TEST",
            "email": "not-an-email",
            "phone": "912345678",
            "treatment": "Ortodontia",
        }
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 422

    def test_list_appointments_contains_created(self, api_client):
        # create a uniquely identifiable one
        unique_email = "test_list_check@example.pt"
        payload = {
            "name": "TEST_ListCheck",
            "email": unique_email,
            "phone": "912999888",
            "treatment": "Estética Dentária",
        }
        c = api_client.post(f"{API}/appointments", json=payload)
        assert c.status_code == 200

        r = api_client.get(f"{API}/appointments")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        emails = [i["email"] for i in items]
        assert unique_email in emails
        # ensure no _id leaked
        for i in items:
            assert "_id" not in i
            assert "id" in i
