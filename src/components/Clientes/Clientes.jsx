"use client";
import React, { useState, useEffect } from "react";
import { CLIENTESLIST } from "./ClientesList";
import Image from "next/image";
import style from "./Clientes.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Clientes() {
  const [slides, setSlides] = useState(5);


  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slides,
    slidesToScroll: slides,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      // Ajustar slidesToShow según el ancho de la pantalla
      if (window.innerWidth <= 500) {
        setSlides(2);
      } else {
        setSlides(5);
      }
    };

    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize al cargar el componente
    handleResize();

    // Desuscribirse del evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El array vacío significa que este efecto se ejecutará solo una vez al montar el componente

  return (
    <section>
      <h2 className="sectionTitle" id="Clientes">
        Clientes
      </h2>
      <h3 className="subTitle">Confían en nosotros</h3>
      <section className={style.slider}>
        <Slider {...settings}>
          {CLIENTESLIST.map((cliente) => (
            <Image
              key={cliente.name}
              src={cliente.src}
              width={150}
              height={150}
              alt={`Logo de ${cliente.name}`}
              sizes="(max-width: 500px) 45vw, 18vw"
            />
          ))}
        </Slider>
      </section>
    </section>
  );
}