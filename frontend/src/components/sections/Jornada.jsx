import { Reveal, Overline } from "../Reveal";
import { JORNADA } from "../../data/content";

export default function Jornada() {
  return (
    <section id="jornada" data-testid="jornada-section" className="py-24 md:py-40 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <Overline>A Jornada do Paciente</Overline>
          <h2 className="mt-6 font-serif font-light text-origem-black tracking-tight leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
            Um percurso pensado ao seu ritmo.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {JORNADA.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div
                data-testid={`jornada-step-${step.n}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 md:py-10 border-t border-origem-silver/60 last:border-b transition-colors duration-500 hover:bg-white"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-4xl md:text-5xl text-origem-green/40 group-hover:text-origem-green transition-colors duration-500">
                    {step.n}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl md:text-3xl text-origem-black font-normal">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-origem-black/60 font-light leading-relaxed">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
