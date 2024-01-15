import { SERVICIOS } from "./ServiciosList";
import { Servicio } from "./Servicio";
import style from "./Servicios.module.css"

export function Servicios() {
  return (
    <section className={style.servicio}>
      <p className="sectionTitle" id="Servicios">
        Servicios
      </p>
      <h2 className="subTitle">Nuestro Compromiso</h2>
      <div className={style.container}>
        {SERVICIOS.map((servicio) => (
          <Servicio key={servicio.title} servicio={servicio} />
        ))}
      </div>
    </section>
  );
}
