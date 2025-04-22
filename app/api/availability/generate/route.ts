import { generateTimeSlotsForDate } from "@/lib/utils/time-slots"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { date, intervalMinutes = 20 } = await request.json()

    if (!date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 })
    }

    const slots = await generateTimeSlotsForDate(new Date(date), intervalMinutes)

    return NextResponse.json(slots, { status: 200 })
  } catch (error) {
    console.error("Error generating time slots:", error)
    return NextResponse.json({ error: "Failed to generate time slots" }, { status: 500 })
  }
}
