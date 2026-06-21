import style from "./Contacto.module.css";
import { Formulario } from "./Formulario";
import { DatosContacto } from "./DatosContacto";

export function Contacto() {
  return (
    <section className={style.contacto}>
      <h2 className="sectionTitle" id="Contacto">
        Contacto
      </h2>
      <h3 className="subTitle">Estamos a un Mensaje de Distancia!</h3>
      <div className={style.container}>
        <Formulario />
        <DatosContacto />
      </div>
    </section>
  );
}
