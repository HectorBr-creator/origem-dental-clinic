import { Reveal, Overline } from "../Reveal";
import { IMAGES } from "../../data/content";

const points = [
  { title: "Ambiente acolhedor", text: "Materiais naturais e luz suave que transformam a espera em pausa." },
  { title: "Privacidade", text: "Espaços reservados onde cada consulta é sua, e só sua." },
  { title: "Tecnologia moderna", text: "Precisão discreta, ao serviço do seu conforto." },
  { title: "Atendimento próximo", text: "Uma equipa que ouve antes de tratar." },
];

export default function Atmosfera() {
  return (
    <section id="atmosfera" data-testid="atmosfera-section" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="max-w-3xl">
          <Overline>A Experiência</Overline>
          <h2 className="mt-6 font-serif font-light text-origem-black tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
            Mais do que tratamentos. Uma experiência pensada para si.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <Reveal className="md:col-span-7 overflow-hidden rounded-sm">
            <div className="overflow-hidden rounded-sm">
              <img
                src={IMAGES.atmosferaMain}
                alt="Sala de espera serena"
                className="w-full h-[420px] md:h-[560px] object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          </Reveal>

          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            <Reveal delay={0.1} className="overflow-hidden rounded-sm">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={IMAGES.atmosferaWood}
                  alt="Detalhe de materiais naturais"
                  className="w-full h-[240px] md:h-[268px] object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="overflow-hidden rounded-sm">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={IMAGES.atmosferaRoom}
                  alt="Gabinete clínico minimalista"
                  className="w-full h-[240px] md:h-[268px] object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="pt-6 border-t border-origem-silver/60">
                <h3 className="font-serif text-2xl text-origem-black font-normal">{p.title}</h3>
                <p className="mt-3 text-sm text-origem-black/60 leading-relaxed font-light">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
