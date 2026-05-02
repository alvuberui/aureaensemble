const acts = [
  {
    num: "01",
    title: "Procesiones",
    desc: "Acompañamos pasos y cofradías en sus salidas procesionales, marcando el ritmo y la solemnidad con nuestro repertorio litúrgico más emotivo.",
    featured: true,
  },
  {
    num: "02",
    title: "Actos Litúrgicos",
    desc: "Misas, oficios y celebraciones religiosas donde la música eleva el espíritu y acompaña la liturgia con respeto y devoción.",
    featured: false,
  },
  {
    num: "03",
    title: "Pregones",
    desc: "Presencia musical en pregones de Semana Santa, fiestas patronales y actos institucionales que requieren solemnidad y distinción.",
    featured: false,
  },
  {
    num: "04",
    title: "Traslados",
    desc: "Acompañamiento en traslados de imágenes sagradas, aportando la música adecuada para cada momento del recorrido.",
    featured: false,
  },
  {
    num: "05",
    title: "Vía Crucis",
    desc: "Música para el Vía Crucis, acompañando cada estación con piezas que invitan a la reflexión y la oración.",
    featured: false,
  },
  {
    num: "06",
    title: "Presentaciones",
    desc: "Actos de presentación de carteles, libros y publicaciones relacionadas con la Semana Santa y la cultura local.",
    featured: false,
  },
  {
    num: "07",
    title: "Ceremonias de Boda",
    desc: "Acompañamiento musical para el enlace matrimonial: entrada, firma, comunión y salida, con piezas clásicas y contemporáneas.",
    featured: false,
  },
  {
    num: "08",
    title: "Otros Eventos",
    desc: "Conciertos, celebraciones especiales y cualquier acto donde la música en directo marque la diferencia. Consúltanos sin compromiso.",
    featured: false,
  },
];

export default function Actos() {
  return (
    <section id="actos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#b8963e] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            Lo que hacemos
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1612]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Presentes en cada
            <br />
            <em className="text-[#b8963e]">momento especial</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
          {acts.map((act) => (
            <div
              key={act.num}
              className={`p-8 group transition-colors duration-300 ${
                act.featured
                  ? "bg-[#1a1612] sm:col-span-2"
                  : "bg-white hover:bg-[#faf7f2]"
              }`}
            >
              <div
                className={`text-xs tracking-widest mb-4 font-light ${
                  act.featured ? "text-[#b8963e]" : "text-[#b8963e]/60"
                }`}
              >
                {act.num}
              </div>
              <h3
                className={`text-xl font-light mb-3 ${
                  act.featured ? "text-white" : "text-[#1a1612]"
                }`}
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {act.title}
              </h3>
              <div
                className={`w-8 h-px mb-4 transition-all duration-300 group-hover:w-16 ${
                  act.featured ? "bg-[#b8963e]" : "bg-[#b8963e]/40"
                }`}
              />
              <p
                className={`text-sm leading-relaxed ${
                  act.featured ? "text-white/60" : "text-[#4a3f35]"
                }`}
              >
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
