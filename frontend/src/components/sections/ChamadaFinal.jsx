import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Reveal, Overline } from "../Reveal";
import { IMAGES, TRATAMENTOS } from "../../data/content";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initial = { name: "", email: "", phone: "", treatment: "", preferred_date: "", message: "" };

export default function ChamadaFinal() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.treatment) {
      toast.error("Por favor preencha os campos obrigatórios.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/appointments`, form);
      setDone(true);
      setForm(initial);
      toast.success("Pedido enviado. Entraremos em contacto em breve.");
    } catch (err) {
      toast.error("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="agendar" data-testid="chamada-final-section" className="relative">
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={IMAGES.finalCta} alt="Espaço sereno" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-origem-black/55" />
        <Reveal className="relative z-10 max-w-3xl text-center px-6 py-28">
          <h2 className="font-serif font-light text-white tracking-tight leading-[1.12] text-4xl md:text-5xl lg:text-6xl">
            O seu sorriso merece um espaço onde se sinta verdadeiramente cuidado.
          </h2>
        </Reveal>
      </div>

      <div className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal className="text-center">
            <Overline>Agendar Consulta</Overline>
            <p className="mt-5 text-origem-black/60 font-light leading-relaxed max-w-xl mx-auto">
              Deixe os seus dados e a nossa equipa entrará em contacto para
              encontrar o momento ideal para si.
            </p>
          </Reveal>

          {done ? (
            <motion.div
              data-testid="form-success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-14 text-center border border-origem-silver/60 rounded-sm py-16 px-8"
            >
              <p className="font-serif text-3xl text-origem-green">Obrigado.</p>
              <p className="mt-4 text-origem-black/60 font-light">
                Recebemos o seu pedido. Entraremos em contacto muito em breve.
              </p>
              <button
                data-testid="form-reset"
                onClick={() => setDone(false)}
                className="mt-8 text-sm tracking-wide text-origem-green underline underline-offset-4"
              >
                Enviar outro pedido
              </button>
            </motion.div>
          ) : (
            <Reveal>
              <form data-testid="appointment-form" onSubmit={submit} className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <Field label="Nome *" testid="input-name">
                  <input required value={form.name} onChange={update("name")} data-testid="input-name"
                    className="origem-input" type="text" placeholder="O seu nome" />
                </Field>
                <Field label="Email *" testid="input-email">
                  <input required value={form.email} onChange={update("email")} data-testid="input-email"
                    className="origem-input" type="email" placeholder="email@exemplo.pt" />
                </Field>
                <Field label="Telefone *" testid="input-phone">
                  <input required value={form.phone} onChange={update("phone")} data-testid="input-phone"
                    className="origem-input" type="tel" placeholder="+351 ..." />
                </Field>
                <Field label="Tratamento de interesse *" testid="input-treatment">
                  <select required value={form.treatment} onChange={update("treatment")} data-testid="input-treatment"
                    className="origem-input bg-white">
                    <option value="">Selecione</option>
                    {TRATAMENTOS.map((t) => (
                      <option key={t.id} value={t.title}>{t.title}</option>
                    ))}
                    <option value="Outro">Outro / Aconselhamento</option>
                  </select>
                </Field>
                <Field label="Data preferencial" testid="input-date" full>
                  <input value={form.preferred_date} onChange={update("preferred_date")} data-testid="input-date"
                    className="origem-input" type="date" />
                </Field>
                <Field label="Mensagem" testid="input-message" full>
                  <textarea value={form.message} onChange={update("message")} data-testid="input-message"
                    className="origem-input resize-none" rows={4} placeholder="Como podemos ajudar?" />
                </Field>

                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="submit-appointment"
                    className="w-full md:w-auto px-12 py-4 rounded-sm bg-origem-green text-white text-sm tracking-wide transition-all duration-300 hover:bg-[#1a3b2f] hover:tracking-wider disabled:opacity-60"
                  >
                    {loading ? "A enviar..." : "Agendar Consulta"}
                  </button>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, full }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-[0.2em] text-origem-black/50">{label}</span>
      {children}
    </label>
  );
}
