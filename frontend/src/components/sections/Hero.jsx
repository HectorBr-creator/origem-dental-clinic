import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "../../data/content";

export default function Hero({ onScrollTo }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);
  const overlay = useTransform(scrollY, [0, 500], [0.32, 0.55]);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex items-end"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Interior sereno da Origem Dental Clinic"
          className="w-full h-[115%] object-cover"
        />
        <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-origem-black" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-24 md:pb-32 pt-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-block text-xs uppercase tracking-[0.32em] text-white/80 mb-8"
        >
          Origem Dental Clinic — Braga
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-white font-light leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          O cuidado dentário deve ser tão confortável quanto o resultado.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 text-white/85 font-light leading-relaxed max-w-xl text-base md:text-lg"
        >
          Na Origem Dental Clinic, cada detalhe foi pensado para que a sua
          experiência seja tranquila, personalizada e excecional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button
            data-testid="hero-primary-cta"
            onClick={() => onScrollTo("agendar")}
            className="px-9 py-4 rounded-sm bg-origem-green text-white text-sm tracking-wide transition-all duration-300 hover:bg-[#1a3b2f] hover:tracking-wider"
          >
            Marcar Avaliação
          </button>
          <button
            data-testid="hero-secondary-cta"
            onClick={() => onScrollTo("atmosfera")}
            className="px-9 py-4 rounded-sm border border-white/50 text-white text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-origem-black"
          >
            Conhecer a Clínica
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Descer</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-white/40"
        />
      </motion.div>
    </section>
  );
}
