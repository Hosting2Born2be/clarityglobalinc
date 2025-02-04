'use client';

import { Control, Controller } from '@/shared/lib/forms';
import { Input } from '@/shared/ui/kit/input';
import { Select } from '@/shared/ui/kit/select';

import { currencies } from '../../lib/currencies';
import { CurrencyDTO } from '../../lib/types';
import { useCurrencyConverterStore } from '../../services/currency-converter.store';
import st from './result-currency.module.css';

export function ResultCurrency({ control }: { control: Control<CurrencyDTO> }) {
  const { gets } = useCurrencyConverterStore();

  return (
    <div className={st.currencyField}>
      <Input placeholder="Result" defaultValue={gets === '0' ? '' : gets} />
      <Controller
        name="toCurrency"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={currencies}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </div>
  );
}
