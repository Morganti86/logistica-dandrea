"use client";
import style from "./Navbar.module.css";
import { NAVBARLIST } from "./NavbarList";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={style.navbar}>
      <a
        href={NAVBARLIST[0].route}
        className={style.logo}
        onClick={menuOpen ? toggleMenu : null}>
        <img
          className={style.logoImage}
          src="/Company/logo.webp"
          width={"207px"}
          height={"50px"}
          alt="Logo Image"
        />
      </a>
      <ul className={`${style.navLinks} ${menuOpen ? style.show : ""}`}>
        {NAVBARLIST.map((nav) => (
          <li key={nav.label}>
            <a className={style.a} href={nav.route} onClick={toggleMenu}>
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
      {menuOpen ? (
        <div className={style.menuButton} onClick={toggleMenu}>
          ✖
        </div>
      ) : (
        <div className={style.menuButton} onClick={toggleMenu}>
          ☰
        </div>
      )}
    </section>
  );
}
