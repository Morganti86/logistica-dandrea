import style from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { Empresa } from "@/components/Empresa/Empresa";
import { Servicios } from "@/components/Servicios/Servicios";
import { Clientes } from "@/components/Clientes/Clientes";
import { Contacto } from "@/components/Contacto/Contacto";
import { Footer } from "@/components/Footer/Footer";
import MouseFollower from "@/components/UI/MouseFollower";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className={style.body}>
        <Empresa />
      </section>
      <Servicios />
      <section className={style.body}>
        <Clientes />
      </section>
      <Contacto />
      <Footer />
      <MouseFollower />
    </main>
  );
}
