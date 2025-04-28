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

export const appointmentService = {
  async createAppointment(data: AppointmentData) {
    const { error } = await supabase.from('appointments').insert({
      ...data,
      status: 'pending',
    })

    if (error) throw error
    return true
  },

  async checkAvailability(date: string, time: string) {
    const { data, error } = await supabase
      .from('appointments')
      .select('id')
      .eq('date', date)
      .eq('time', time)
      .single()

    if (error && error.code !== 'PGRST116') throw error // PGRST116 means no rows found
    return !data // true if slot is available
  }
}

export const getAppointments = async () => {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("time", { ascending: true })

  if (error) throw error

  console.log("Appointments fetched:", data)

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
  console.log("Updating appointment", id, "to status", status)

  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id)

  if (error) throw error
}


export const forceStatusUpdate = async (): Promise<void> => {
  console.log("Force updating appointment status")
  await updateAppointmentStatus("796cd8c5-daef-42b2-a463-4055468e3e96", "accepted");
};


