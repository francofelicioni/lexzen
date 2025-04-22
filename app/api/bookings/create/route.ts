import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, date, timeSlot } = await request.json()

    // Check if slot is available
    const slot = await prisma.availability.findFirst({
      where: {
        date: new Date(date),
        timeSlot,
        isBooked: false,
      },
    })

    if (!slot) {
      return NextResponse.json({ error: "Time slot not available" }, { status: 400 })
    }

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        date: new Date(date),
        timeSlot,
      },
    })

    await prisma.availability.update({
      where: { id: slot.id },
      data: { isBooked: true },
    })

    return NextResponse.json(booking, { status: 200 })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
