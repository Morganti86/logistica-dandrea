"use client";
import style from "./Navbar.module.css";
import { NAVBARLIST } from "./NavbarList";
import { useState, useEffect } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");

  useEffect(() => {
    const sectionIds = NAVBARLIST.map((nav) => nav.route.replace("#", ""));
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        const active = sectionIds.find((id) => visible.has(id));
        if (active) setActiveSection(active);
      },
      { rootMargin: "-60px 0px -40% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={style.navbar} aria-label="Navegación principal">
      <a
        href={NAVBARLIST[0].route}
        className={style.logo}
        onClick={menuOpen ? toggleMenu : null}
      >
        <img
          className={style.logoImage}
          src="/Company/logo.webp"
          width={207}
          height={50}
          alt="Logo de Logística D'ANDREA"
        />
      </a>
      <ul
        id="nav-menu"
        className={`${style.navLinks} ${menuOpen ? style.show : ""}`}
        aria-label="Menú de navegación"
      >
        {NAVBARLIST.map((nav) => (
          <li key={nav.label}>
            <a
              className={
                activeSection === nav.route.replace("#", "")
                  ? style.active
                  : undefined
              }
              href={nav.route}
              onClick={toggleMenu}
            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={style.menuButton}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
}
