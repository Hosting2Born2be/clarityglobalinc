import { z } from '@/shared/lib/forms';

export const helpSchema = z.object({
  name: z.string().min(2, { message: 'This field is required' }),
  email: z.string().email({ message: 'Please enter valid email address' }),
  phone: z.string().min(1, { message: 'Please enter your mobile number' }),
  reason: z.enum(
    ['Cards', 'My Account', 'Security', 'Assistance with Payment'],
    { message: 'Please choose your reason' },
  ),
  message: z.string().optional(),
});

export type HelpSchema = z.infer<typeof helpSchema>;
