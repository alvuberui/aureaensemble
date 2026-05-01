"use client";

import { useState } from "react";

type Track = {
  title: string;
  composer: string;
  note?: string;
};

type TabData = {
  id: string;
  label: string;
  intro: string;
  tracks: Track[];
};

const tabs: TabData[] = [
  {
    id: "procesiones",
    label: "Procesiones",
    intro:
      "Marchas procesionales y piezas de acompañamiento para pasos y cofradías.",
    tracks: [
      { title: "Amarguras", composer: "Manuel Font de Anta" },
      { title: "Pasan los Campanilleros", composer: "Manuel López Farfán" },
      { title: "La Macarena", composer: "Pedro Morales Muñoz" },
      { title: "Virgen de la Esperanza", composer: "Antonio Pantión" },
      { title: "Cristo de la Expiración", composer: "Eduardo Gutiérrez Salas" },
      { title: "Coronación", composer: "Manuel López Farfán" },
      { title: "Soleá Dame la Mano", composer: "Abel Moreno" },
      { title: "Stella Maris", composer: "J. Franco Ribate" },
    ],
  },
  {
    id: "liturgico",
    label: "Litúrgico",
    intro: "Piezas para la celebración de la liturgia: misas, oficios y actos religiosos.",
    tracks: [
      { title: "Ave María", composer: "Franz Schubert" },
      { title: "Panis Angelicus", composer: "César Franck" },
      { title: "Salve Regina", composer: "Tradicional" },
      { title: "O Salutaris Hostia", composer: "Tradicional" },
      { title: "Tantum Ergo", composer: "Gregoriano" },
    ],
  },
  {
    id: "viacrucis",
    label: "Vía Crucis",
    intro: "Piezas meditativas y de recogimiento para acompañar el rezo del Vía Crucis.",
    tracks: [
      { title: "Stabat Mater", composer: "Pergolesi" },
      { title: "Miserere", composer: "Gregorio Allegri" },
      { title: "O Vos Omnes", composer: "Victoria / Casals" },
      { title: "Perdona a Tu Pueblo", composer: "Tradicional" },
    ],
  },
  {
    id: "bodas",
    label: "Bodas",
    intro: "Selección de piezas para cada momento del enlace matrimonial en iglesia.",
    tracks: [
      { title: "Canon en Re", composer: "Johann Pachelbel", note: "Entrada" },
      { title: "Marcha Nupcial", composer: "Felix Mendelssohn", note: "Salida" },
      { title: "Ave María", composer: "Schubert / Gounod", note: "Comunión" },
      { title: "Air on the G String", composer: "J.S. Bach", note: "Firma" },
      { title: "A Thousand Years", composer: "Christina Perri", note: "Entrada novia" },
      { title: "Clair de Lune", composer: "Claude Debussy", note: "Fondo" },
    ],
  },
  {
    id: "otros",
    label: "Concierto / Otros",
    intro: "Piezas para conciertos, presentaciones y eventos especiales.",
    tracks: [
      { title: "España Cañí", composer: "Pascual Marquina" },
      { title: "Granada", composer: "Agustín Lara" },
      { title: "Adagio de Albinoni", composer: "Tomaso Albinoni" },
      { title: "Nessun Dorma", composer: "Giacomo Puccini" },
      { title: "La Traviata — Brindis", composer: "Giuseppe Verdi" },
    ],
  },
];

export default function Repertorio() {
  const [active, setActive] = useState("procesiones");

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="repertorio" className="py-24 lg:py-32 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#b8963e] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            Nuestras obras
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1612]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Repertorio
            <br />
            <em className="text-[#b8963e]">por tipo de acto</em>
          </h2>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#b8963e]/20 pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-3 text-xs tracking-widest uppercase transition-all duration-200 relative ${
                active === tab.id
                  ? "text-[#b8963e]"
                  : "text-[#4a3f35] hover:text-[#b8963e]"
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b8963e]" />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="min-h-[320px]">
          <p className="text-[#4a3f35] mb-8 text-sm leading-relaxed max-w-xl">
            {current.intro}
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-[#b8963e]/10">
            {current.tracks.map((track) => (
              <div
                key={track.title}
                className="bg-[#faf7f2] px-6 py-5 flex justify-between items-center hover:bg-white transition-colors duration-200"
              >
                <div>
                  <div
                    className="text-lg font-light text-[#1a1612]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {track.title}
                  </div>
                  <div className="text-xs text-[#4a3f35]/70 mt-0.5">
                    {track.composer}
                  </div>
                </div>
                {track.note && (
                  <span className="text-xs tracking-widest uppercase text-[#b8963e] border border-[#b8963e]/30 px-3 py-1 shrink-0 ml-4">
                    {track.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-[#4a3f35]/70 italic text-center">
          ¿Tienes en mente una obra que no aparece aquí? Consúltanos, estudiamos cualquier petición especial.
        </p>
      </div>
    </section>
  );
}
