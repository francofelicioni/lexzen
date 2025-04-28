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
                slots,
            },
        ], { onConflict: ['date'] })

    if (error) throw error
    return data
}

export async function getAvailabilityForDate(date: Date): Promise<string[]> {
    const { data, error } = await supabase
      .from('availability')
      .select('slots')
      .eq('date', formatDateToYYYYMMDD(date))
      .single()
  
    if (error) {
      if (error.code === 'PGRST116') {
        return []
      }
      throw error
    }
  
    if (typeof data?.slots === 'string') {
      return JSON.parse(data.slots)
    }

    console.log('data', data)
  
    return Array.isArray(data?.slots) ? data.slots : []
  }
  

