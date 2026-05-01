"use client";

import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: "📍",
    label: "Localización",
    value: "Disponibles para toda Andalucía y fuera de ella",
    href: null,
  },
  {
    icon: "📞",
    label: "Teléfono",
    value: "+34 600 000 000",
    href: "tel:+34600000000",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@aureaensemble.es",
    href: "mailto:info@aureaensemble.es",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@aureaensemble",
    href: "#",
  },
];

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder: wire up to a real email service (e.g. Resend, Formspree)
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#1a1612]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#b8963e] text-xs tracking-[0.5em] uppercase mb-4 font-light">
            Habla con nosotros
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            ¿Organizas un acto?
            <br />
            <em className="text-[#b8963e]">Cuéntanos tu proyecto</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-5 items-start">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <div className="text-xs tracking-widest uppercase text-[#b8963e] mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-[#b8963e] transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center py-16 border border-[#b8963e]/20">
              <div className="text-4xl mb-6">✉️</div>
              <h3
                className="text-2xl font-light text-white mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Mensaje enviado
              </h3>
              <p className="text-white/50 text-sm">
                Te responderemos en menos de 48 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-[#b8963e]">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/30 text-sm focus:border-[#b8963e] focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-[#b8963e]">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/30 text-sm focus:border-[#b8963e] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#b8963e]">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="600 000 000"
                  className="bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/30 text-sm focus:border-[#b8963e] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#b8963e]">
                  Tipo de acto
                </label>
                <select className="bg-[#1a1612] border border-white/20 px-4 py-3 text-white/70 text-sm focus:border-[#b8963e] focus:outline-none transition-colors">
                  <option value="">— Selecciona una opción —</option>
                  <option value="procesion">Procesión</option>
                  <option value="liturgico">Acto litúrgico</option>
                  <option value="pregon">Pregón</option>
                  <option value="traslado">Traslado</option>
                  <option value="viacrucis">Vía Crucis</option>
                  <option value="presentacion">Presentación / Cartel</option>
                  <option value="boda">Boda en iglesia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#b8963e]">
                  Cuéntanos tu acto *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Fecha aproximada, lugar, detalles del acto..."
                  className="bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/30 text-sm focus:border-[#b8963e] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#b8963e] text-white text-sm tracking-widest uppercase hover:bg-[#d4af5a] transition-colors duration-200"
              >
                Enviar consulta
              </button>
              <p className="text-white/30 text-xs text-center">
                Te responderemos en menos de 48 horas.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
