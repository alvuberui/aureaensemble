"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#formacion", label: "Formación" },
  { href: "#actos", label: "Actos" },
  { href: "#repertorio", label: "Repertorio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1612]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-none select-none">
          <span
            className="font-serif text-xl font-semibold tracking-[0.3em] text-[#b8963e]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            AUREA
          </span>
          <span className="text-[9px] tracking-[0.5em] text-white/70 font-light uppercase">
            Ensemble
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-widest uppercase text-white/80 hover:text-[#b8963e] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="ml-2 px-5 py-2 border border-[#b8963e] text-[#b8963e] text-sm tracking-widest uppercase hover:bg-[#b8963e] hover:text-white transition-all duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#1a1612] overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleLink}
                className="block text-sm tracking-widest uppercase text-white/80 hover:text-[#b8963e] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={handleLink}
              className="inline-block mt-2 px-5 py-2 border border-[#b8963e] text-[#b8963e] text-sm tracking-widest uppercase"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
