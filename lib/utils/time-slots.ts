import { prisma } from "@/lib/prisma"

export async function generateTimeSlotsForDate(date: Date, intervalMinutes = 20) {
  try {
    // Start time (9:00 AM)
    const startHour = 9
    // End time (5:00 PM)
    const endHour = 17

    const slots = []
    const slotDate = new Date(date)

    // Reset time to start of day
    slotDate.setHours(0, 0, 0, 0)

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += intervalMinutes) {
        if (hour === endHour - 1 && minute > 40) continue // Don't go past end time

        const slotTime = new Date(slotDate)
        slotTime.setHours(hour, minute, 0, 0)

        // Format time as HH:MM
        const timeSlot = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

        slots.push({
          date: slotTime,
          timeSlot,
        })
      }
    }

    // Create all slots in the database
    const createdSlots = await Promise.all(
      slots.map(async (slot) => {
        // Check if slot already exists
        const existingSlot = await prisma.availability.findFirst({
          where: {
            date: slot.date,
            timeSlot: slot.timeSlot,
          },
        })

        if (!existingSlot) {
          return prisma.availability.create({
            data: {
              date: slot.date,
              timeSlot: slot.timeSlot,
              isBooked: false,
            },
          })
        }

        return existingSlot
      }),
    )

    return createdSlots
  } catch (error) {
    console.error("Error generating time slots:", error)
    throw error
  }
}
