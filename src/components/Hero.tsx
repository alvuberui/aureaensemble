export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1612]"
    >
      {/* Gradient overlay texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Decorative lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[#b8963e]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#b8963e] text-xs tracking-[0.5em] uppercase mb-8 font-light">
          Música que acompaña
        </p>

        <h1
          className="text-white mb-6"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em]">
            AUREA
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-light italic text-[#b8963e] tracking-widest">
            Ensemble
          </span>
        </h1>

        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 bg-[#b8963e]/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#b8963e]" />
          <div className="h-px w-16 bg-[#b8963e]/50" />
        </div>

        <p className="text-white/60 text-sm tracking-[0.3em] uppercase font-light mb-12">
          Saxo soprano · Saxo alto · Saxo tenor · Trombón · Tuba · Caja
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#actos"
            className="px-8 py-3.5 bg-[#b8963e] text-white text-sm tracking-widest uppercase hover:bg-[#d4af5a] transition-colors duration-200"
          >
            Nuestros actos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 border border-white/40 text-white text-sm tracking-widest uppercase hover:border-[#b8963e] hover:text-[#b8963e] transition-colors duration-200"
          >
            Contrátanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Descubre más
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#b8963e]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
