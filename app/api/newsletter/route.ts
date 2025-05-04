import { supabaseAdmin } from "@/lib/supabse/server"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, source } = body

    if (!email || !email.includes("@") || !["contact_form", "banner"].includes(source)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    const { error } = await supabaseAdmin.from("newsletter").insert([{ email, source }])

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ message: "Already subscribed" }, { status: 200 })
      }
      console.error("Insert error:", error)
      return NextResponse.json({ error: "Database error" }, { status: 500 })
    }

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 })
  } catch (err) {
    console.error("Unexpected error:", err)
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
