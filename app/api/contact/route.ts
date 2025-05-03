import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    console.log("📥 Contact form API hit in production");
    const { fullName, email, subject, message, subscribe } = await request.json();
    console.log("📨 Contact form data:", fullName, email, subject, message, subscribe );

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: process.env.MAIL_ENCRYPTION === "ssl",
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: process.env.MAIL_USERNAME,
            subject: subject || "Nuevo mensaje desde el formulario de contacto",
            text: `
            Nombre: ${fullName}
            Email: ${email}
            Suscripción a newsletter: ${subscribe ? "Sí" : "No"}

            Mensaje:
            ${message}`,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error al enviar email:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
