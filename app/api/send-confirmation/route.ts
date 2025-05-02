import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { format } from "date-fns"
import { es, enUS } from "date-fns/locale"
import { translations } from "@/lib/translations"

export async function POST(req: Request) {
  const { name, email, date, time, topic, lang = "es" }: { name: string; email: string; date: string; time: string; topic?: string; lang?: "en" | "es" } = await req.json()

  if (!email || !name || !date || !time) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const t = translations[lang as "en" | "es"].confirmationEmail || translations.es.confirmationEmail
  const locale = lang === "en" ? enUS : es

  const formattedDate = format(new Date(date), "EEEE, d 'de' MMMM 'de' yyyy", { locale })

  const htmlMessage = `
    <p>${t.greeting(name)}</p>
    <p>${t.confirmation(formattedDate, time)}</p>
    ${topic ? `<p>${t.topic(topic)}</p>` : ""}
    <p>${t.closing}</p>
    <p>${t.farewell}</p>
  `

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_ENCRYPTION === "ssl",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Lexzen" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: t.subject,
      html: htmlMessage,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
