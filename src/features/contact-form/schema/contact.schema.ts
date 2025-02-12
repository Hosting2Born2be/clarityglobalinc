import { z } from '@/shared/lib/forms';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'This field is required' }),
  email: z.string().email({ message: 'Please enter valid email address' }),
  phone: z.string().min(1, { message: 'Please enter your mobile number' }),
  message: z.string().optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
