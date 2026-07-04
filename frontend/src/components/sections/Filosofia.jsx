import { Reveal, Overline } from "../Reveal";
import { IMAGES } from "../../data/content";

export default function Filosofia() {
  return (
    <section id="filosofia" data-testid="filosofia-section" className="bg-origem-green text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Reveal y={0} className="relative min-h-[420px] lg:min-h-[720px] overflow-hidden">
          <img
            src={IMAGES.filosofia}
            alt="Sorriso natural e sereno"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </Reveal>

        <div className="flex items-center px-6 md:px-16 lg:px-20 py-20 md:py-28">
          <div className="max-w-lg">
            <Reveal>
              <Overline light>A Nossa Filosofia</Overline>
              <h2 className="mt-6 font-serif font-light tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
                O sorriso é apenas o começo.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-white/80 font-light leading-relaxed text-base md:text-lg">
                Acreditamos numa abordagem profundamente humana. Não tratamos
                dentes — cuidamos de pessoas. Cada plano é personalizado,
                construído consigo e pensado para durar.
              </p>
              <p className="mt-5 text-white/70 font-light leading-relaxed">
                Do primeiro olhar ao acompanhamento a longo prazo, o nosso
                compromisso é que se sinta ouvido, respeitado e verdadeiramente
                cuidado.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 h-px w-24 bg-white/40" />
              <p className="mt-6 font-serif italic text-xl md:text-2xl text-white/90">
                “Cuidar com tempo, tratar com verdade.”
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
