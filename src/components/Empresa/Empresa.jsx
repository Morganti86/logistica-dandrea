import { Nosotros } from "./Nosotros";
import { Valores } from "./Valores";
import style from "./Empresa.module.css";
import Image from "next/image";

export function Empresa() {
  return (
    <section className={style.empresa}>
      <h2 className="sectionTitle" id="Empresa">
        Empresa
      </h2>
      <div className={style.empresaContent}>
        <div className={style.textContent}>
          <Nosotros />
          <Valores />
        </div>
        <div className={style.wordcloud}>
          <Image
            className={style.wordcloudImage}
            src="/Company/wordcloud.webp"
            width={325}
            height={433}
            alt="Nube de palabras con valores de la empresa"
          />
        </div>
      </div>
    </section>
  );
}
