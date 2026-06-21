import style from "./Mapa.module.css";
export function Mapa() {
  return (
    <iframe
      className={style.mapa}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.6759242865082!2d-58.539209725150464!3d-34.53643775394658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0b6c6674753%3A0xf144785a4f0bf0c7!2sV%C3%A9lez%20S%C3%A1rsfield%205780%2C%20Munro%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2suk!4v1703079708825!5m2!1ses-419!2suk"
      loading="lazy"
      title="Ubicación de Logistica D'andrea"></iframe>
  );
}
