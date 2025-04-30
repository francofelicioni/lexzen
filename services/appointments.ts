import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export interface AppointmentData {
  full_name: string
  email: string | null
  phone: string | null
  topic: string | null
  date: string
  time: string
}

function normalizeTimeString(t: string): string {
  return t.length === 5 ? `${t}:00` : t
}

export const appointmentService = {
  async createAppointment(data: AppointmentData) {
    const appointmentDate = data.date
    const appointmentTime = normalizeTimeString(data.time)

    const { error } = await supabase.from('appointments').insert({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      topic: data.topic,
      date: appointmentDate,
      time: appointmentTime,
      status: 'pending',
      created_at: new Date().toISOString()
    })

    if (error) throw error

    // Log the error but don't prevent the booking from completing
    await removeSlotFromAvailability(appointmentDate, appointmentTime).catch(err => {
      console.error(" Error removing slot from availability (non-blocking):", err)
    })

    return true
  },

  async checkAvailability(date: string, time: string) {
    const appointmentTime = normalizeTimeString(time)

    const { data, error } = await supabase
      .from('appointments')
      .select('id')
      .eq('date', date)
      .eq('time', appointmentTime)

    if (error && error.code !== 'PGRST116') throw error
    return !data || data.length === 0
  }
}

export const getAppointments = async () => {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("time", { ascending: true })

  if (error) throw error

  return data.map((appt) => ({
    id: appt.id,
    name: appt.full_name,
    email: appt.email,
    date: appt.date,
    time: appt.time,
    topic: appt.topic,
    status: appt.status as "pending" | "accepted" | "rejected",
  }))
}

export const updateAppointmentStatus = async (
  id: string,
  status: "pending" | "accepted" | "rejected"
) => {

  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id)

  if (error) throw error
}

export async function removeSlotFromAvailability(date: string, time: string) {
  const { data: availabilityData, error } = await supabase
    .from('availability')
    .select('slots')
    .eq('date', date)
    .single()

  if (error) throw error

  if (!availabilityData) return

  const slots = availabilityData?.slots || []
  const updatedSlots = Array.isArray(slots)
    ? slots.filter((slot: string) => slot !== time)
    : []

  const { error: updateError } = await supabase
    .from('availability')
    .update({ slots: updatedSlots })
    .eq('date', date)

  if (updateError) throw updateError
}

export const forceStatusUpdate = async (): Promise<void> => {
  await updateAppointmentStatus("796cd8c5-daef-42b2-a463-4055468e3e96", "accepted");
};


