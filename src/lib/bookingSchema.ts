import { z } from 'zod';

// Client-side validation — mirrors the backend schema
export const bookingFormSchema = z.object({
  serviceIds: z.array(z.number().int()).min(1, 'Select at least one service'),

  vehicleType: z.string().optional().default(''),
  vehicleMake: z.string().min(1, 'Required').max(50),
  vehicleModel: z.string().min(1, 'Required').max(50),
  vehicleColor: z.string().min(1, 'Required').max(30),
  vehiclePlate: z.string().max(15).optional().default(''),

  customerName: z.string().min(2, 'At least 2 characters').max(100),
  customerPhone: z
    .string()
    .regex(/^[+]?[\d\s\-()]{7,20}$/, 'Enter a valid phone number'),
  customerEmail: z
    .string()
    .email('Enter a valid email')
    .or(z.literal(''))
    .optional()
    .default(''),
  preferredAttendantId: z.number().int().optional().default(0),

  scheduledDate: z.string().min(1, 'Pick a date'),
  scheduledTime: z.string().min(1, 'Pick a time'),

  notes: z.string().max(500).optional().default(''),
});

export type ValidatedBookingForm = z.infer<typeof bookingFormSchema>;

export function validateStep(
  data: Partial<ValidatedBookingForm>,
  step: number
): Record<string, string> {
  const errors: Record<string, string> = {};

  const stepFields: Record<number, (keyof ValidatedBookingForm)[]> = {
    1: ['serviceIds'],
    2: ['vehicleMake', 'vehicleModel', 'vehicleColor', 'vehiclePlate'],
    3: ['customerName', 'customerPhone', 'customerEmail', 'preferredAttendantId'],
    4: ['scheduledDate', 'scheduledTime'],
    5: [], // review step
  };

  const fields = stepFields[step] || [];
  if (fields.length === 0) return errors;

  const partial = bookingFormSchema.partial();
  const stepSchema = partial.pick(
    Object.fromEntries(fields.map((f) => [f, true])) as any
  );

  const result = stepSchema.safeParse(data);
  if (!result.success) {
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!errors[key]) {
        errors[key] = issue.message;
      }
    }
  }

  return errors;
}