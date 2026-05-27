"use client";

import style from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className={style.footer}>
      <span>© LOGISTICA D'ANDREA {year}.</span>
      <span className="span">Todos los derechos reservados.</span>
    </section>
  );
}
