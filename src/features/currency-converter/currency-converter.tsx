'use client';

import { currencies } from '@/features/currency-converter/currencies';

import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './currency-converter.module.css';

export function CurrencyConverter() {
  return (
    <form className={st.currencyConverterContainer}>
      <Title level={2}>You send exactly</Title>
      <div className={st.currencyField}>
        <Input />
        <Select trigger="Open" options={currencies} />
      </div>
      <div className={st.recipientGets}>
        <Title level={2}>Recipient gets</Title>
      </div>
      <div className={st.currencyField}>
        <Input />
        <Select trigger="Open" options={currencies} />
      </div>
      <Text size="sm">Should arrive in 1-3 business days.</Text>
      <Button variant="orange" fullWidth>
        Sign Up
      </Button>
    </form>
  );
}
