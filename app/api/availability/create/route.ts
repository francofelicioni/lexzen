import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { date, timeSlot } = await request.json()

    // Check if slot already exists
    const existingSlot = await prisma.availability.findFirst({
      where: {
        date: new Date(date),
        timeSlot,
      },
    })

    if (existingSlot) {
      return NextResponse.json({ error: "Time slot already exists" }, { status: 400 })
    }

    const availability = await prisma.availability.create({
      data: {
        date: new Date(date),
        timeSlot,
        isBooked: false,
      },
    })

    return NextResponse.json(availability, { status: 200 })
  } catch (error) {
    console.error("Error creating availability slot:", error)
    return NextResponse.json({ error: "Failed to create availability slot" }, { status: 500 })
  }
}
