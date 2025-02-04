'use client';

import { Control, Controller } from '@/shared/lib/forms';
import { Input } from '@/shared/ui/kit/input';
import { Select } from '@/shared/ui/kit/select';
import { Title } from '@/shared/ui/kit/title';

import { currencies } from '../../lib/currencies';
import { CurrencyDTO } from '../../lib/types';
import st from './amount-currency.module.css';

export function AmountCurrency({
  control,
  error,
}: {
  control: Control<CurrencyDTO>;
  error?: string;
}) {
  return (
    <>
      <Title level={4}>You send exactly</Title>
      <div className={st.currencyField}>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Amount"
              value={field.value ?? ''}
              onChange={e => field.onChange(Number(e.target.value) ?? 0)}
              type="number"
              error={error}
            />
          )}
        />
        <Controller
          name="fromCurrency"
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
    </>
  );
}
