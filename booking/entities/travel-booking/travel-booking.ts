import { z } from 'zod';

export const travelBooking = z.object({
  firstName: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .catch('Must be a valid first name'),
  lastName: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .catch('Must be a valid last name'),
  email: z.string().email('Must be a valid email address'),
});

export type TravelBookingType = z.infer<typeof travelBooking>;
