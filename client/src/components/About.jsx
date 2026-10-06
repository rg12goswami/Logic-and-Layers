import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="section-shell grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-14 md:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-ink-line">
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1200&auto=format&fit=crop"
              alt="Developer workspace with dual monitors displaying code"
              className="h-full w-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-brass/10 mix-blend-multiply" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-3xl md:text-5xl text-paper leading-tight mb-6 max-w-[16ch]">
            One person, full ownership.
          </h2>

          <p className="text-paper/70 leading-relaxed mb-5 max-w-[54ch]">
            Logic &amp; Layers is the practice of one full-stack developer, not an
            agency of handoffs. The name is the working method: logic is the part
            that has to be correct — the data model, the API contracts, the
            edge cases. Layers is everything built on top of it, done with the
            same care.
          </p>
          <p className="text-paper/70 leading-relaxed mb-8 max-w-[54ch]">
            That means the person who scopes your project is the same one who
            writes the migration script at 11pm and answers your message about
            it the next morning. Nothing gets lost in translation because
            there's no translation layer.
          </p>

          <p className="font-display italic text-xl text-brass-bright/90 max-w-[40ch]">
            Software should be judged by what happens when it's under load, not
            by the demo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
