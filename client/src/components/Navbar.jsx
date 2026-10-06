import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="section-shell flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-paper">
          Logic <span className="text-brass">&amp;</span> Layers
        </a>

        <div className="hidden md:flex items-center gap-9 text-sm text-paper/80">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline pb-0.5 hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-sm border border-brass/40 px-4 py-2 text-sm text-brass-bright hover:bg-brass hover:text-ink hover:border-brass transition-colors duration-300"
        >
          Start a Project
        </a>

        <a
          href="#contact"
          className="md:hidden text-sm text-brass-bright border border-brass/40 rounded-sm px-3 py-1.5"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
