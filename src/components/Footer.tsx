const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#formacion", label: "Formación" },
  { href: "#actos", label: "Actos" },
  { href: "#repertorio", label: "Repertorio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <>
    <footer className="bg-[#0f0c09] text-white/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <img
              src="/Logo_Aurea.png"
              alt="Aurea Ensemble"
              className="h-10 w-auto mb-3 brightness-90"
            />
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

    <div className="fixed bottom-4 right-4 z-40 pointer-events-none">
      <p className="text-[10px] tracking-wide text-white/70 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
        Desarrollado por Álvaro Úbeda Ruiz · 2026
      </p>
    </div>
    </>
  );
}
