import { Phone, MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import { CONTACT } from "../../data/content";

export default function Footer({ onScrollTo }) {
  return (
    <footer data-testid="main-footer" className="bg-origem-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <button onClick={() => onScrollTo("hero")} className="font-serif text-3xl tracking-wide">
              Origem<span className="text-origem-green">.</span>
            </button>
            <p className="mt-6 text-white/50 font-light leading-relaxed max-w-sm">
              Uma marca premium de saúde oral em Braga, onde o design transmite a
              mesma qualidade do atendimento.
            </p>
          </div>

          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.24em] text-white/40">Contactos</span>
            <ul className="mt-6 space-y-4">
              <li>
                <a data-testid="footer-phone" href={CONTACT.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Phone size={16} strokeWidth={1.5} /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a data-testid="footer-whatsapp" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp — {CONTACT.whatsapp}
                </a>
              </li>
              <li>
                <a data-testid="footer-address" href={CONTACT.addressMap} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                  <MapPin size={16} strokeWidth={1.5} className="mt-1 shrink-0" /> <span>{CONTACT.address}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-[0.24em] text-white/40">Seguir</span>
            <div className="mt-6 flex gap-4">
              <a data-testid="footer-instagram" href={CONTACT.instagram} target="_blank" rel="noreferrer"
                className="h-11 w-11 flex items-center justify-center border border-white/20 rounded-sm hover:bg-origem-green hover:border-origem-green transition-all">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a data-testid="footer-facebook" href={CONTACT.facebook} target="_blank" rel="noreferrer"
                className="h-11 w-11 flex items-center justify-center border border-white/20 rounded-sm hover:bg-origem-green hover:border-origem-green transition-all">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
            <button
              data-testid="footer-cta"
              onClick={() => onScrollTo("agendar")}
              className="mt-8 px-7 py-3 rounded-sm bg-origem-green text-white text-sm tracking-wide hover:bg-[#1a3b2f] transition-colors"
            >
              Marcar Avaliação
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-white/40 text-xs tracking-wide">
          <span>© {new Date().getFullYear()} Origem Dental Clinic — Braga, Portugal.</span>
          <span>Feito com cuidado.</span>
        </div>
      </div>
    </footer>
  );
}
