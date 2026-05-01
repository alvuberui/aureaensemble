import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Aurea Ensemble — Música para cada momento",
  description:
    "Ensemble musical de viento y percusión especializado en actos litúrgicos, procesiones, pregones, traslados, vía crucis y bodas. Saxo soprano, alto, tenor, trombón, tuba y caja.",
  keywords: [
    "ensemble musical",
    "música procesional",
    "banda de viento",
    "semana santa",
    "bodas iglesia",
    "música litúrgica",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
