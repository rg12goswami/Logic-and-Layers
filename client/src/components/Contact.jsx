import ContactForm from "./ContactForm.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-ink-raised/40">
      <div className="section-shell grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-14 md:gap-20">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-paper leading-tight mb-6 max-w-[14ch]">
            Start a project
          </h2>
          <p className="text-paper/65 leading-relaxed max-w-[42ch] mb-8">
            Tell me what you're building. If it's a fit, I'll reply within a
            business day with questions or a rough scope — no discovery call
            required to get a first read.
          </p>
          <p className="text-paper/50 text-sm">
            Prefer email?{" "}
            <a
              href="mailto:logiclayers25@gmail.com"
              className="link-underline text-brass-bright"
            >
              logiclayers25@gmail.com
            </a>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
