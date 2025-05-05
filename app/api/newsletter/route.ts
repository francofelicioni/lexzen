import { supabaseAdmin } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, source } = body

    if (!email || !email.includes("@") || !["contact_form", "banner", "newsletter_form"].includes(source)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    const { error } = await supabaseAdmin.from("newsletter").insert([{ email, source }])

    if (error?.code === "23505") {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 409 })
    }

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
