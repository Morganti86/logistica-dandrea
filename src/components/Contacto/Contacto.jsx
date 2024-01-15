import style from "./Contacto.module.css";
import { Formulario } from "./Formulario";
import { DatosContacto } from "./DatosContacto";

export function Contacto() {
  return (
    <section className={style.contacto}>
      <p className="sectionTitle" id="Contacto">
        Contacto
      </p>
      <h2 className="subTitle">
        {/* Dejanos tu Consulta ó Llamanos! */}
        {/* Estamos a solo un mensaje o una llamada de distancia! */}
        {/* Estamos a un Mensaje ó una Llamada de Distancia! */}
        Estamos a un Mensaje de Distancia!
      </h2>
      <div className={style.container}>
        <Formulario />
        <DatosContacto />
      </div>
    </section>
  );
}
