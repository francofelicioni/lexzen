import { formatDateToYYYYMMDD } from '@/utils/date'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Get availability between two dates
export async function getAvailability(startDate: Date, endDate: Date) {
    const formattedStart = startDate.getFullYear() + '-' +
        String(startDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(startDate.getDate()).padStart(2, '0')

    const formattedEnd = endDate.getFullYear() + '-' +
        String(endDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(endDate.getDate()).padStart(2, '0')

    const { data, error } = await supabase
        .from('availability')
        .select('*')
        .gte('date', formattedStart)
        .lte('date', formattedEnd)

    if (error) throw error
    return data
}

// Update availability for a specific date
export async function updateAvailability(date: Date, slots: string[]) {
    const formattedDate = date.getFullYear() + '-' +
        String(date.getMonth() + 1).padStart(2, '0') + '-' +
        String(date.getDate()).padStart(2, '0')

    const { data, error } = await supabase
        .from('availability')
        .upsert([
            {
                date: formattedDate,
                slots: JSON.stringify(slots),
            },
        ], { onConflict: ['date'] })

    if (error) throw error
    return data
}

export async function getAvailabilityForDate(date: Date): Promise<string[]> {
    const formattedDate = date.getFullYear() + '-' +
        String(date.getMonth() + 1).padStart(2, '0') + '-' +
        String(date.getDate()).padStart(2, '0')

    // Get availability
    const { data: availabilityData, error: availabilityError } = await supabase
        .from('availability')
        .select('slots')
        .eq('date', formattedDate)
        .single()

    if (availabilityError) {
        if (availabilityError.code === 'PGRST116') return []
        throw availabilityError
    }

    const slots: string[] = Array.isArray(availabilityData?.slots)
        ? availabilityData.slots
        : typeof availabilityData?.slots === 'string'
            ? JSON.parse(availabilityData.slots)
            : []

    // Get booked appointments
    const { data: appointmentsData, error: appointmentError } = await supabase
        .from('appointments')
        .select('time')
        .eq('date', formattedDate)

    if (appointmentError) throw appointmentError

    const normalizeTimeString = (t: string): string =>
        t.length === 5 ? `${t}:00` : t

    const bookedTimes = appointmentsData.map((appt) => normalizeTimeString(appt.time))


    // Return available slots that are not already booked
    return slots.filter((slot) => !bookedTimes.includes(normalizeTimeString(slot)))
}

export const removeSlotFromAvailability = async (date: string, time: string) => {
    const { data, error } = await supabase
        .from("availability")
        .select("slots")
        .eq("date", date)
        .single()

    if (error) throw error

    const currentSlots: string[] = Array.isArray(data?.slots)
        ? data.slots
        : typeof data?.slots === 'string'
            ? JSON.parse(data.slots)
            : []

    const updatedSlots = currentSlots.filter((slot) => slot !== time)

    const { error: updateError } = await supabase
        .from("availability")
        .update({ slots: updatedSlots })
        .eq("date", date)

    if (updateError) throw updateError
}


