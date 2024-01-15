import { Nosotros } from "./Nosotros";
import { Valores } from "./Valores";
import style from "./Empresa.module.css";
import Image from "next/image";

export function Empresa() {
  return (
    <section className={style.empresa}>
      <p className="sectionTitle" id="Empresa">
        Empresa
      </p>
      <div className={style.wordcloud}>
        <Image
          className={style.wordcloudImage}
          src="/Company/wordcloud.webp"
          width={325}
          height={433}
          alt={`wordcloud image`}
          priority={true}
        />
      </div>
      <Nosotros />
      <Valores />
    </section>
  );
}
