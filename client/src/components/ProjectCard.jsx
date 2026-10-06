export default function ProjectCard({ project }) {
  const { name, tagline, description, image, tech, liveUrl, githubUrl } = project;

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-sm border border-ink-line aspect-[16/10] mb-6">
        <img
          src={image}
          alt={`${name} interface preview`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      </div>

      <div>
        <h3 className="font-display text-2xl md:text-3xl text-paper mb-2">
          {name}
        </h3>

        <p className="text-brass-bright/90 text-sm mb-4">
          {tagline}
        </p>

        <p className="text-paper/70 leading-relaxed mb-6 max-w-[46ch]">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {tech?.map((t) => (
            <li
              key={t}
              className="font-mono text-[11px] text-steel border border-ink-line rounded-sm px-2 py-1"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 text-sm">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 text-paper hover:text-brass-bright transition-colors"
            >
              Live demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline pb-0.5 text-paper/70 hover:text-paper transition-colors"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}