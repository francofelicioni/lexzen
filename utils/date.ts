import { parseISO } from "date-fns";

export function formatDateToYYYYMMDD(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function parseDateTime(date: string | null | undefined, time: string | null | undefined): Date {
  if (!date || !time || typeof time !== 'string') return new Date('Invalid Date')
  const safeTime = time.length === 5 ? `${time}:00` : time
  return new Date(`${date}T${safeTime}`)
}

export const isValidDate = (d: any): d is Date =>
  d instanceof Date && !isNaN(d.getTime());

export const normalizeDate = (value: string | Date): Date => {
  if (value instanceof Date) return value
  return parseISO(value)
}