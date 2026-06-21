import Image from "next/image";
import style from "./Hero.module.css";
import { PHRASE } from "./HeroPhrase";

export function Hero() {
  return (
    <section className={style.hero} id="Inicio">
      <Image
        src="/Company/Home.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className={style.heroImage}
      />
      <div className={style.heroOverlay} />
      <div className={style.container}>
        <h1 className={style.title}>
          Bienvenidos a <span className={style.shadow}>LOGISTICA D'ANDREA</span>
        </h1>
        <div className={style.subTitleContainer} aria-live="polite">
          {PHRASE.map((phrase, i) => (
            <p
              key={phrase}
              className={style.subTitle}
              style={{ animationDelay: `${i * 5}s` }}
            >
              {phrase}
            </p>
          ))}
        </div>
        <span className={style.phrase}>Impulsamos tus operaciones de venta</span>
        <a href="#Contacto" className={style.cta}>
          Contactanos
        </a>
      </div>
    </section>
  );
}
