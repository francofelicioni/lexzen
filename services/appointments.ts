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
  appointment_date: string
  appointment_time: string
}

export const appointmentService = {
  async createAppointment(data: AppointmentData) {
    const { error } = await supabase.from('appointments').insert({
      ...data,
      created_at: new Date().toISOString()
    })

    if (error) throw error
    return true
  },

  async checkAvailability(date: string, time: string) {
    const { data, error } = await supabase
      .from('appointments')
      .select('id')
      .eq('appointment_date', date)
      .eq('appointment_time', time)
      .single()

    if (error && error.code !== 'PGRST116') throw error // PGRST116 means no rows found
    return !data // true if slot is available
  }
}
