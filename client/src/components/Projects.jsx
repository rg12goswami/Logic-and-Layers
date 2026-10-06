import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="work" className="py-28 md:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-paper max-w-[16ch] leading-tight mb-4">
            Selected projects
          </h2>

          <p className="text-paper/60 max-w-[50ch] mb-16 md:mb-24">
            A handful of engagements where the brief was ambitious and the timeline
            was real.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}