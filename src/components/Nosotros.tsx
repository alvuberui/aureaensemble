const stats = [
  { number: "6", label: "Músicos" },
  { number: "+50", label: "Obras en repertorio" },
  { number: "+100", label: "Actuaciones" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#b8963e] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            Quiénes somos
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1612]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Tradición y pasión
            <br />
            <em className="text-[#b8963e]">al servicio de la música</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xl md:text-2xl font-light text-[#2c2419] leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Aurea Ensemble es un conjunto musical dedicado a enriquecer los
              momentos más significativos con música en directo de la más alta
              calidad.
            </p>
            <p className="text-[#4a3f35] leading-relaxed mb-4">
              Nacidos de la pasión por la música procesional y litúrgica, nos
              especializamos en acompañar actos religiosos, cofradías y
              celebraciones populares con un sonido cálido, poderoso y emotivo.
            </p>
            <p className="text-[#4a3f35] leading-relaxed mb-12">
              Nuestra formación de viento y percusión nos permite adaptarnos a
              cualquier entorno: desde la intimidad de una iglesia hasta las
              calles de una procesión multitudinaria, siempre con la solemnidad
              y el respeto que cada momento merece.
            </p>

            {/* Stats */}
            <div className="flex gap-10 border-t border-[#b8963e]/20 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-4xl font-light text-[#b8963e]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {s.number}
                  </div>
                  <div className="text-xs tracking-widest uppercase text-[#4a3f35] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-[#1a1612] flex flex-col items-center justify-center gap-6 border border-[#b8963e]/20">
              <div className="grid grid-cols-3 gap-4 text-4xl">
                {["🎷", "🎷", "🎷", "🎺", "🎺", "🥁"].map((icon, i) => (
                  <span
                    key={i}
                    className="flex items-center justify-center w-14 h-14 border border-[#b8963e]/30 text-2xl"
                  >
                    {icon}
                  </span>
                ))}
              </div>
              <p className="text-white/30 text-xs tracking-widest uppercase text-center px-8">
                Añade aquí una fotografía del ensemble
              </p>
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#b8963e]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
