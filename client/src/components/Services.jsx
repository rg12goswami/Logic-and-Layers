import { services } from "../data/services.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-ink-raised/40">
      <div className="section-shell grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 md:gap-20">
        <Reveal>
          <div className="md:sticky md:top-32">
            <h2 className="font-display text-3xl md:text-5xl text-paper leading-tight max-w-[14ch]">
              What I take on
            </h2>
            <p className="mt-5 text-paper/60 max-w-[38ch]">
              Scoped as a single engagement or broken into phases — whichever fits
              how your team already works.
            </p>
          </div>
        </Reveal>

        <div className="border-t hairline">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-10 py-8 border-b hairline">
                <h3 className="font-display text-xl text-paper">{service.title}</h3>
                <p className="text-paper/65 leading-relaxed max-w-[52ch]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
