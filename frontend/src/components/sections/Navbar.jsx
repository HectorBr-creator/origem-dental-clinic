import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Atmosfera", id: "atmosfera" },
  { label: "Filosofia", id: "filosofia" },
  { label: "Tratamentos", id: "tratamentos" },
  { label: "Jornada", id: "jornada" },
];

export default function Navbar({ onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    onScrollTo(id);
  };

  return (
    <motion.header
      data-testid="main-navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-origem-silver/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <button
          data-testid="logo-home"
          onClick={() => go("hero")}
          className={`font-serif text-2xl md:text-[28px] tracking-wide transition-colors duration-500 ${
            scrolled ? "text-origem-black" : "text-white"
          }`}
        >
          Origem<span className="text-origem-green">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => go(l.id)}
              className={`text-sm tracking-wide transition-colors duration-300 hover:opacity-60 ${
                scrolled ? "text-origem-black" : "text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-cta"
            onClick={() => go("agendar")}
            className="text-sm tracking-wide px-6 py-3 rounded-sm bg-origem-green text-white transition-all duration-300 hover:bg-[#1a3b2f]"
          >
            Marcar Avaliação
          </button>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          className={`md:hidden ${scrolled ? "text-origem-black" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white border-t border-origem-silver/40 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`mobile-nav-${l.id}`}
                  onClick={() => go(l.id)}
                  className="text-left text-base text-origem-black"
                >
                  {l.label}
                </button>
              ))}
              <button
                data-testid="mobile-nav-cta"
                onClick={() => go("agendar")}
                className="text-center px-6 py-3 rounded-sm bg-origem-green text-white"
              >
                Marcar Avaliação
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
