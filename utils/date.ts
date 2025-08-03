export function formatDateToYYYYMMDD(date: Date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function parseDateTime(date: string, time: string): Date {
    return new Date(`${date}T${time.length === 5 ? `${time}:00` : time}`)
}

export const isValidDate = (d: any): d is Date =>
    d instanceof Date && !isNaN(d.getTime());
