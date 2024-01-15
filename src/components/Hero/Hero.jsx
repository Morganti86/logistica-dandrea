"use client";
import React, { useEffect, useState } from "react";
import style from "./Hero.module.css";
import { PHRASE } from "./HeroPhrase";

export function Hero() {
  const [subTitle, setSubTitle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSubTitle((prevState) => (prevState < 2 ? prevState + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={style.hero} id="Inicio">
      <div className={style.container}>
        <h1 className={style.title}>
          Bienvenidos a <span className={style.shadow}>LOGISTICA D'ANDREA</span>
        </h1>
        <div className={style.subTitleContainer}>
          <h2 className={style.subTitle}>{PHRASE[subTitle]}</h2>
        </div>
        <span className={style.phrase}>
          Impulsamos tus operaciones de venta
        </span>
      </div>
    </section>
  );
}
