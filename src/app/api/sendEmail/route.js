import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, tel, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: "Logisticadandrea@gmail.com",
      to: "mmorganti86@gmail.com, contacto@logisticadandrea.com.ar, beatriz@logisticadandrea.com.ar",
      subject: `Nuevo mensaje del formulario - ${email}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${tel}\nMensaje:\n${message}`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
