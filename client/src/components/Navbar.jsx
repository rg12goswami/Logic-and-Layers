
import { useEffect, useState } from "react";
import LogicandLayersLogo from "../assets/Logic & Layers Premium Logo.png";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "glass py-3"
          : "bg-transparent py-3 md:py-6"
      }`}
    >
      <nav className="section-shell flex items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={LogicandLayersLogo}
            alt="Logic & Layers"
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
          />
        </a>

        {/* Desktop navigation */}
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

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-brass-bright border border-brass/40 rounded-sm px-3 py-2"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="text-paper p-2 text-2xl leading-none"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden section-shell pt-4 pb-3 flex flex-col gap-4 text-sm text-paper/80">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-1 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
