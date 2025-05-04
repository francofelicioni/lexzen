import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const { token, fullName, email, subject, message, subscribe } = await request.json();

    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const recaptchaJson = await recaptchaRes.json();

    console.log("reCAPTCHA validation result:", recaptchaJson);

    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      console.warn("reCAPTCHA failed:", recaptchaJson);
      return NextResponse.json({ success: false, message: "reCAPTCHA failed" }, { status: 400 });
    }

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
            ${message}
            `,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error in sending contact form:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
