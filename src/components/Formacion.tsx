const instruments = [
  {
    emoji: "🎷",
    name: "Saxo Soprano",
    desc: "Voz lírica y penetrante que lleva la melodía principal en los momentos más solemnes. Su timbre brillante se proyecta con elegancia en espacios abiertos y cerrados.",
  },
  {
    emoji: "🎷",
    name: "Saxo Alto",
    desc: "Cuerpo y calor al conjunto, reforzando armonías con un timbre rico y expresivo que complementa la voz soprano y crea un diálogo musical de gran belleza.",
  },
  {
    emoji: "🎷",
    name: "Saxo Tenor",
    desc: "Registro medio-grave que aporta profundidad y sustenta la estructura armónica, conectando el mundo de los saxos con los metales graves.",
  },
  {
    emoji: "🎺",
    name: "Trombón",
    desc: "Potencia y majestuosidad en los momentos más emotivos y procesionales. Su sonido amplio y noble da carácter a las marchas más solemnes.",
  },
  {
    emoji: "🎺",
    name: "Tuba",
    desc: "El fundamento grave del conjunto. La tuba da solidez, presencia y profundidad al sonido global, siendo el pilar sobre el que se construye toda la armonía.",
  },
  {
    emoji: "🥁",
    name: "Caja",
    desc: "El pulso y la solemnidad que marca el paso y el carácter de cada pieza. El latido que une al ensemble y guía a los que desfilan.",
  },
];

export default function Formacion() {
  return (
    <section id="formacion" className="py-24 lg:py-32 bg-[#1a1612]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#b8963e] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            Nuestra formación
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Los instrumentos
            <br />
            <em className="text-[#b8963e]">que nos definen</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#b8963e]/10">
          {instruments.map((inst) => (
            <div
              key={inst.name}
              className="bg-[#1a1612] p-8 group hover:bg-[#2c2419] transition-colors duration-300"
            >
              <div className="text-4xl mb-5">{inst.emoji}</div>
              <h3
                className="text-xl font-light text-white mb-3 group-hover:text-[#b8963e] transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {inst.name}
              </h3>
              <div className="w-8 h-px bg-[#b8963e]/40 mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-white/50 text-sm leading-relaxed">{inst.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
