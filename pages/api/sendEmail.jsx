require("dotenv").config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Método no permitido
  }

  const { name, email, tel, message } = req.body;

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    // Configuración del servicio de correo
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "Logisticadandrea@gmail.com",
      to: "mmorganti86@gmail.com, contacto@logisticadandrea.com.ar, beatriz@logisticadandrea.com.ar",
      // cc: "mafsobrero8@hotmail.com",
      subject: `Nuevo mensaje del formulario - ${email}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${tel}\nMensaje:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
