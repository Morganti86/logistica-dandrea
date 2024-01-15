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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      // console.error("Error al enviar el correo:", error);
      toast.error(`Error ${error} al enviar el correo.`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <section className={style.formulario}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label}>
          <h3 className={style.title}>*Nombre:</h3>
          <input
            className={style.input}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={style.label}>
          <h3 className={style.title}>*Email:</h3>
          <input
            className={style.input}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={style.label}>
          <h3 className={style.title}>*Telefono:</h3>
          <input
            className={style.input}
            type="tel"
            required
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>

        <label className={style.label}>
          <h3 className={style.title}>*Mensaje:</h3>
          <textarea
            className={style.inputArea}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button className={style.button} type="submit">
          ENVIAR
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}
