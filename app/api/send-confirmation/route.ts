import { NextResponse } from "next/server"
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  const { name, email, date, time, topic } = await req.json()

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_ENCRYPTION === "ssl",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const htmlMessage = `
    <p>Hola ${name},</p>
    <p>Tu consulta fue agendada para el <strong>${date}</strong> a las <strong>${time}</strong>.</p>
    ${topic ? `<p><strong>Tema:</strong> ${topic}</p>` : ""}
    <p>Gracias por reservar con Lexzen.</p>
  `

  try {
    await transporter.sendMail({
      from: `"Lexzen" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: "Confirmación de Consulta",
      html: htmlMessage,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
