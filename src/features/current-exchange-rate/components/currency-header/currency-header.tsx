'use client';

import { Text } from '@/shared/ui/kit/text';

import st from './currency-header.module.css';

export function CurrencyHeader() {
  return (
    <header className={st.headerGroup}>
      <Text size="xs" weight={700}>
        Currency
      </Text>
      <Text size="xs" weight={700}>
        Rate
      </Text>
    </header>
  );
}
