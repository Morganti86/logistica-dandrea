"use client";
import { useState } from "react";
import style from "./Formulario.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tel, message }),
      });

      if (response.ok) {
        toast.success("Correo enviado con éxito.", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        setName("");
        setEmail("");
        setTel("");
        setMessage("");
      } else {
        toast.error("Error al enviar el correo.", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    } catch (error) {
      toast.error(`Error ${error} al enviar el correo.`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={style.formulario}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label}>
          <span className={style.title}>*Nombre:</span>
          <input
            className={style.input}
            type="text"
            required
            placeholder="Ej: Juan García"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={style.label}>
          <span className={style.title}>*Email:</span>
          <input
            className={style.input}
            type="email"
            required
            placeholder="Ej: juan@empresa.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={style.label}>
          <span className={style.title}>*Teléfono:</span>
          <input
            className={style.input}
            type="tel"
            required
            placeholder="Ej: 11-1234-5678"
            autoComplete="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <label className={style.label}>
          <span className={style.title}>*Mensaje:</span>
          <textarea
            className={style.inputArea}
            required
            placeholder="Escribí tu consulta..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button className={style.button} type="submit" disabled={loading}>
          {loading ? "ENVIANDO..." : "ENVIAR"}
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}
