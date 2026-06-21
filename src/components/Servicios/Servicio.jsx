import Image from "next/image";
import style from "./Servicio.module.css";

export function Servicio({ servicio }) {
  return (
    <div className={style.boxContainer}>
      <div className={style.imageTitle}>
        <Image
          className={style.image}
          src={servicio.image}
          width={325}
          height={217}
          alt={`Imagen de ${servicio.title}`}
          style={{ height: "auto" }}
          sizes="(max-width: 768px) 90vw, 325px"
        />
        <h3 className={style.title}>{servicio.title}</h3>
      </div>
      <ul className={style.ul}>
        {servicio.tags.map((tag) => (
          <li key={tag.name} className={style.li}>
            <span className={style.tick}>✔ </span>
            <span>{tag.name}</span>
            <span className={style.tagDesc}>{tag.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
