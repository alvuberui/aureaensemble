import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Formacion from "@/components/Formacion";
import Actos from "@/components/Actos";
import Repertorio from "@/components/Repertorio";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Formacion />
        <Actos />
        <Repertorio />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
