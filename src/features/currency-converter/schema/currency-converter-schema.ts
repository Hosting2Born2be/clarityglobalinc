import { z } from '@/shared/lib/forms';

export const currencyConverterSchema = z.object({
  amount: z.number().min(1000, { message: 'Min value is 1000' }),
  toCurrency: z.string().nonempty(),
  fromCurrency: z.string().nonempty(),
  fee: z.string().nonempty(),
});

export type CurrencyConverterSchema = z.infer<typeof currencyConverterSchema>;
