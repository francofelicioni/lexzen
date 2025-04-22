import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const dateParam = searchParams.get("date")

    let whereClause = {}

    if (dateParam) {
      const date = new Date(dateParam)
      whereClause = {
        date: {
          gte: new Date(date.setHours(0, 0, 0, 0)),
          lt: new Date(date.setHours(23, 59, 59, 999)),
        },
        isBooked: false,
      }
    } else {
      whereClause = {
        isBooked: false,
      }
    }

    const availableSlots = await prisma.availability.findMany({
      where: whereClause,
      orderBy: [{ date: "asc" }, { timeSlot: "asc" }],
    })

    return NextResponse.json(availableSlots, { status: 200 })
  } catch (error) {
    console.error("Error fetching available slots:", error)
    return NextResponse.json({ error: "Failed to fetch available slots" }, { status: 500 })
  }
}
