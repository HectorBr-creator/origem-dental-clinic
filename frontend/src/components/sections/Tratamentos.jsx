import { Reveal, Overline } from "../Reveal";
import { TRATAMENTOS } from "../../data/content";

export default function Tratamentos() {
  return (
    <section id="tratamentos" data-testid="tratamentos-section" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <Overline>Tratamentos</Overline>
          <h2 className="mt-6 font-serif font-light text-origem-black tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
            Cuidado especializado, em cada detalhe.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {TRATAMENTOS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <article
                data-testid={`tratamento-card-${t.id}`}
                className="group relative overflow-hidden rounded-sm border border-origem-silver/50 bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-origem-black/70 via-origem-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <h3 className="font-serif text-white text-2xl md:text-3xl font-normal">{t.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{t.short}</p>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-white/85 text-sm font-light leading-relaxed mt-4 pt-4 border-t border-white/20">
                        {t.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
