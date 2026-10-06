import { skillGroups } from "../data/skills.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-ink-raised/40">
      <div className="section-shell">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-paper leading-tight mb-16 md:mb-20 max-w-[16ch]">
            The stack, plainly
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 90}>
              <div className="border-t hairline pt-5">
                <h3 className="text-sm text-steel mb-4">{group.category}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-sm text-paper/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
