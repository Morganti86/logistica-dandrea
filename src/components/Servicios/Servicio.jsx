import Image from "next/image";
import style from "./Servicio.module.css";

export function Servicio({ servicio }) {
  return (
    <div key={servicio.title} className={style.boxContainer}>
      <div className={style.imageTitle}>
        <Image
          className={style.image}
          src={servicio.image}
          width={325}
          height={0}
          alt={`${servicio.title} image`}
          priority={true}
        />
        <h3 className={style.title}>{servicio.title}</h3>
      </div>
      <ul className={style.ul}>
        {servicio.tags.map((tag) => (
          <li key={tag.name} className={style.li}>
            <span className={style.tick}>✔ </span>
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
