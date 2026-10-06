import { testimonials } from "../data/testimonials.js";
import Reveal from "./Reveal.jsx";

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-paper leading-tight mb-16 md:mb-20 max-w-[16ch]">
            From past engagements
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="border-t hairline pt-6 h-full flex flex-col">
                <p className="font-display italic text-lg text-paper/90 leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>
                <div>
                  <p className="text-sm text-brass-bright">{t.name}</p>
                  <p className="text-sm text-steel">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
