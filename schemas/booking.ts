import { z } from "zod"

export const bookingSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(50, "El nombre no puede exceder los 50 caracteres"),
    email: z.string().email("Ingresa un email válido"),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Ingresa un número de teléfono válido"),
    topic: z.string().min(1, "El tema es obligatorio").max(100, "El tema no puede exceder los 100 caracteres"),
})

export type BookingFormData = z.infer<typeof bookingSchema>
