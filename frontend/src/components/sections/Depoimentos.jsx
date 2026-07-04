import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Overline } from "../Reveal";
import { DEPOIMENTOS } from "../../data/content";

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % DEPOIMENTOS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const current = DEPOIMENTOS[index];

  return (
    <section id="depoimentos" data-testid="depoimentos-section" className="py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <Overline>Testemunhos</Overline>
        </Reveal>

        <div className="mt-10 min-h-[280px] md:min-h-[240px] flex flex-col items-center justify-center">
          <span className="font-serif text-7xl md:text-8xl text-origem-green/25 leading-none select-none">“</span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              data-testid="depoimento-quote"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-origem-black text-2xl md:text-4xl leading-[1.3] tracking-tight -mt-6"
            >
              {current.quote}
              <footer className="mt-8">
                <span className="block font-sans text-xs uppercase tracking-[0.28em] text-origem-green">
                  {current.author}
                </span>
                <span className="block font-sans text-xs text-origem-black/40 mt-1 tracking-wide">
                  {current.role}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {DEPOIMENTOS.map((_, i) => (
            <button
              key={i}
              data-testid={`depoimento-dot-${i}`}
              onClick={() => setIndex(i)}
              aria-label={`Testemunho ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === index ? "w-10 bg-origem-green" : "w-5 bg-origem-silver"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
