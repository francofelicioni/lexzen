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
    if (!data.date || !data.time || !data.full_name) {
      throw new Error("Missing required appointment fields")
    }
  
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

    if (error) {
      console.error("Supabase insert error:", error)
      throw new Error(error.message)
    }

    // Meta Pixel CompleteRegistration event - fires when appointment is successfully created
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration', {
        content_name: 'Legal Consultation Appointment',
        content_category: 'Legal Services',
        value: 0, // Free consultation
        currency: 'EUR',
        registration_source: 'landing_page'
      })
    }
  },

  async checkAvailability(date: string, time: string) {
    const appointmentTime = normalizeTimeString(time)

    const { data, error } = await supabase
      .from('appointments')
      .select('id')
      .eq('date', date)
      .eq('time', appointmentTime)

      if (error && error.code !== 'PGRST116') throw error
      return Array.isArray(data) && data.length === 0
  }
}

export const getAppointments = async () => {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("time", { ascending: true })

  if (error) throw error

  if (!Array.isArray(data)) return []
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
  if (!id || !status) {
    throw new Error("Missing ID or status for update")
  }

  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id)

  if (error) throw error
}

export const forceStatusUpdate = async (): Promise<void> => {
  await updateAppointmentStatus("796cd8c5-daef-42b2-a463-4055468e3e96", "accepted");
};


