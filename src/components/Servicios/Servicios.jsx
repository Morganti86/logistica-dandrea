import { SERVICIOS } from "./ServiciosList";
import { Servicio } from "./Servicio";
import style from "./Servicios.module.css"

export function Servicios() {
  return (
    <section className={style.servicio}>
      <h2 className="sectionTitle" id="Servicios">
        Servicios
      </h2>
      <h3 className="subTitle">Nuestro Compromiso</h3>
      <div className={style.container}>
        {SERVICIOS.map((servicio) => (
          <Servicio key={servicio.title} servicio={servicio} />
        ))}
      </div>
    </section>
  );
}
