export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-origami.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability — heavier at the bottom where copy sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      <div className="relative z-10 flex h-full items-end">
        <div className="section-shell w-full pb-20 md:pb-28">
          <p
            className="hero-line font-mono text-xs text-brass-bright/90 mb-5"
            style={{ animationDelay: "0.1s" }}
          >
            Full-stack development studio
          </p>

          <h1 className="max-w-[820px]">
            <span
              className="hero-line block font-display text-balance text-[2.6rem] leading-[1.08] tracking-tightest text-paper sm:text-6xl md:text-7xl"
              style={{ animationDelay: "0.25s" }}
            >
              Built to withstand
            </span>
            <span
              className="hero-line block font-display italic text-balance text-[2.6rem] leading-[1.08] tracking-tightest text-paper sm:text-6xl md:text-7xl"
              style={{ animationDelay: "0.4s" }}
            >
              what's coming.
            </span>
          </h1>

          <p
            className="hero-line mt-6 max-w-[520px] text-base text-paper/75 leading-relaxed sm:text-lg"
            style={{ animationDelay: "0.6s" }}
          >
            Logic &amp; Layers is a freelance full-stack studio for teams who need
            software that holds up under real pressure — considered architecture,
            precise interfaces, no shortcuts.
          </p>

          <div
            className="hero-line mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href="#work"
              className="inline-flex items-center rounded-sm bg-brass px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brass-bright"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-paper/60"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
