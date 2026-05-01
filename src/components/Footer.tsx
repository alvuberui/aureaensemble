const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#formacion", label: "Formación" },
  { href: "#actos", label: "Actos" },
  { href: "#repertorio", label: "Repertorio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0c09] text-white/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span
                className="text-2xl font-light tracking-[0.3em] text-[#b8963e]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                AUREA
              </span>
              <span className="text-xs tracking-[0.5em] text-white/40 uppercase">
                Ensemble
              </span>
            </div>
            <p className="text-sm max-w-xs">
              Música que acompaña los momentos que importan.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-widest uppercase hover:text-[#b8963e] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Aurea Ensemble. Todos los derechos reservados.</p>
          <p className="text-white/25">Música para cada momento</p>
        </div>
      </div>
    </footer>
  );
}
