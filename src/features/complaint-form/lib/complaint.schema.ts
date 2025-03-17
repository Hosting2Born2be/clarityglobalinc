import { z } from '@/shared/lib/forms';

export const complaintSchema = z.object({
  date: z.string().nonempty({ message: '' }),
  time: z.string().nonempty({ message: '' }),
  dayPart: z.string().nonempty({ message: '' }),
  subject: z.string().nonempty({ message: '' }),
  complaint: z.string().nonempty({ message: '' }),
  additionalInfo: z.string().nonempty({ message: '' }),
  isContact: z.boolean(),
});

export type ComplaintSchema = z.infer<typeof complaintSchema>;
