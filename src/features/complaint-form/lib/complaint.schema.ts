import { z } from '@/shared/lib/forms';

export const complaintSchema = z.object({
  date: z.string().nonempty({ message: 'Date is required' }),
  time: z.string().nonempty({ message: 'Time is required' }),
  dayPart: z.string().nonempty({ message: '' }),
  subject: z.string().nonempty({ message: 'Subject is required' }),
  complaint: z.string().nonempty({ message: 'Complaint is required' }),
  additionalInfo: z.string().nonempty({ message: 'Provide needed info' }),
  isContact: z.string(),
  email: z.string().email({ message: '' }).optional(),
});

export type ComplaintSchema = z.infer<typeof complaintSchema>;
