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
    id: "cofrade",
    label: "Cofrade",
    intro:
      "Marchas procesionales y piezas para acompañar pasos, cofradías, traslados, vía crucis y actos litúrgicos.",
    tracks: [
      { title: "Aniversario Macareno", composer: "" },
      { title: "Reina de San Román", composer: "" },
      { title: "Ave María", composer: "" },
      { title: "Cachorro Eterno", composer: "" },
      { title: "Cordero de Dios", composer: "" },
      { title: "Coronación de la Macarena", composer: "" },
      { title: "Cristo del Buen Fin", composer: "" },
      { title: "Cristo en la Alcazaba", composer: "" },
      { title: "El Mayor Dolor", composer: "" },
      { title: "Jesús de las Penas", composer: "" },
      { title: "Lacrimosa", composer: "" },
      { title: "Madruga Macarena", composer: "" },
      { title: "Macarena", composer: "Abel Moreno" },
      { title: "Ossana in Excelsis", composer: "" },
      { title: "Pasa la Virgen Macarena", composer: "" },
      { title: "Quinta Angustia", composer: "" },
      { title: "Tus Dolores Son Mis Penas", composer: "" },
      { title: "Virgen del Amor entre Naranjos", composer: "" },
    ],
  },
  {
    id: "ceremonias",
    label: "Ceremonias",
    intro:
      "Selección de piezas para bodas en iglesia y actos ceremoniales. Adaptamos el programa a cada momento del enlace.",
    tracks: [
      { title: "Marcha Nupcial", composer: "Wagner" },
      { title: "Marcha Nupcial", composer: "Mendelssohn" },
      { title: "Canon en Re Mayor", composer: "Pachelbel" },
      { title: "Air on the G String", composer: "Bach" },
      { title: "Largo", composer: "Haendel" },
      { title: "Gabriel's Oboe", composer: "Morricone" },
      { title: "Hallelujah", composer: "Leonard Cohen" },
      { title: "Perfect", composer: "Ed Sheeran" },
      { title: "Méditation de Thaïs", composer: "Massenet" },
      { title: "Ave María", composer: "Schubert" },
      { title: "Ave María", composer: "Gounod-Bach" },
      { title: "Oda a la Alegría", composer: "Beethoven" },
      { title: "Viva la Vida", composer: "Coldplay" },
      { title: "La Primavera", composer: "Vivaldi" },
      { title: "Eine kleine Nachtmusik — I mov.", composer: "Mozart" },
    ],
  },
];

export default function Repertorio() {
  const [active, setActive] = useState("cofrade");

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
              type="button"
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{ touchAction: "manipulation" }}
              className={`px-5 py-3 text-xs tracking-widest uppercase transition-colors duration-200 cursor-pointer border-b-2 ${
                active === tab.id
                  ? "text-[#b8963e] border-[#b8963e]"
                  : "text-[#4a3f35] border-transparent hover:text-[#b8963e]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="min-h-[320px]">
          <p className="text-[#4a3f35] mb-8 text-sm leading-relaxed max-w-xl">
            {current.intro}
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-[#b8963e]/10">
            {current.tracks.map((track, i) => (
              <div
                key={`${active}-${i}`}
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
