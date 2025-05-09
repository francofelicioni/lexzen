export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          full_name: string
          email: string | null
          phone: string | null
          topic: string | null
          date: string | null
          time: string | null
          status: "pending" | "accepted" | "rejected"
          created_at: string
        }
        Insert: {
          id?: string
          full_name?: string
          email?: string | null
          phone?: string | null
          topic?: string | null
          date?: string | null
          time?: string | null
          status?: "pending" | "accepted" | "rejected"
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          email?: string | null
          phone?: string | null
          topic?: string | null
          date?: string | null
          time?: string | null
          status?: "pending" | "accepted" | "rejected"
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 