import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json()

    if (!["accepted", "declined"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    const updated = await prisma.booking.update({
      where: { id },
      data: { status },
    })

    // Free up the slot if declined
    if (status === "declined") {
      await prisma.availability.updateMany({
        where: {
          date: updated.date,
          timeSlot: updated.timeSlot,
        },
        data: { isBooked: false },
      })
    }

    return NextResponse.json(updated, { status: 200 })
  } catch (error) {
    console.error("Error updating booking status:", error)
    return NextResponse.json({ error: "Failed to update booking status" }, { status: 500 })
  }
}
