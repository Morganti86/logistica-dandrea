import Image from "next/image";
import style from "./DatosContacto.module.css";
import { Mapa } from "./Mapa";

export function DatosContacto() {
  return (
    <section className={style.datosContacto}>
      <div className={style.contactoBox}>
        <Image
          className={style.image}
          src="/Icons/phone.webp"
          width={45}
          height={45}
          alt="telephone image"
          priority={true}
        />
        <label>
          <h3 className={style.title}>TELÉFONO</h3>
          <span className={style.info}>11-6396-8564</span>
        </label>
      </div>
      {/* <div className={style.contactoBox}>
          <Image
            className={style.image}
            src="/Icons/gmail.png"
            width={45}
            height={45}
            alt="gmail image"
            priority={true}
          />
          <label>
            <h3 className={style.title}>EMAIL</h3>
            <div>
              <p className={style.info}>Beatriz@logisticadandrea.com.ar</p>
              <p className={style.info}>Deposito@logisticadandrea.com.ar</p>
            </div>
          </label>
        </div> */}
      <div className={style.contactoBox}>
        <Image
          className={style.image}
          src="/Icons/schedule.webp"
          width={45}
          height={45}
          alt="schedule image"
          priority={true}
        />
        <label>
          <h3 className={style.title}>HORARIO</h3>
          <span className={style.info}>Lunes a Viernes - 8hs a 16hs</span>
        </label>
      </div>
      <div className={style.contactoBox}>
        <Image
          className={style.image}
          src="/Icons/location.webp"
          width={45}
          height={45}
          alt="location image"
          priority={true}
        />
        <label>
          <h3 className={style.title}>DIRECCIÓN</h3>
          <section className={style.info}>
            <span>Vélez Sársfield 5780, Munro.</span>
            <span className="span">Buenos Aires, Argentina.</span>
          </section>
        </label>
      </div>
      <Mapa />
    </section>
  );
}
