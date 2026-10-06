const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { label: "GitHub", href: "https://github.com/rg12goswami" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/riddam-goswami-a7b57025a" },
];

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="section-shell py-14 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <p className="font-display text-2xl text-paper mb-3">
            Logic <span className="text-brass">&amp;</span> Layers
          </p>
          <p className="text-paper/45 text-sm max-w-[36ch]">
            Freelance full-stack development. Based remote, working with teams
            everywhere.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-paper/60">
          {links.map((link) => (
            <a key={link.href} href={link.href}  target="_blank"
              rel="noopener noreferrer" className="link-underline pb-0.5 hover:text-paper">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-6 text-sm text-paper/60">
          {social.map((s) => (
            <a key={s.label} href={s.href}  target="_blank"
              rel="noopener noreferrer" className="link-underline pb-0.5 hover:text-paper">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="section-shell pb-8">
        <p className="text-paper/30 text-xs">
          © {new Date().getFullYear()} Logic &amp; Layers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
