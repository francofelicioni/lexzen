# Next.js Prisma Booking System

This project is a booking system built with Next.js, Prisma, and Supabase PostgreSQL.

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Set up your environment variables in `.env`:
   \`\`\`
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.keslkggdrgijjbtyzrfb.supabase.co:5432/postgres"
   \`\`\`
4. Push the Prisma schema to your database:
   \`\`\`bash
   npx prisma db push
   \`\`\`
5. Generate the Prisma client:
   \`\`\`bash
   npx prisma generate
   \`\`\`
6. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## API Routes

### Bookings

- `POST /api/bookings/create` - Create a new booking
- `GET /api/bookings/all` - Get all bookings
- `PATCH /api/bookings/status` - Update booking status

### Availability

- `POST /api/availability/create` - Create a new availability slot
- `GET /api/availability` - Get all available slots
- `POST /api/availability/generate` - Generate time slots for a specific date

## Models

### Booking

- `id` - Unique identifier
- `name` - Customer name
- `email` - Customer email
- `date` - Booking date
- `timeSlot` - Booking time slot
- `status` - Booking status (pending, accepted, declined)
- `createdAt` - Creation timestamp

### Availability

- `id` - Unique identifier
- `date` - Available date
- `timeSlot` - Available time slot
- `isBooked` - Whether the slot is booked
- `createdAt` - Creation timestamp
\`\`\`

Let's create a simple example of how to use the API in a Next.js page:
