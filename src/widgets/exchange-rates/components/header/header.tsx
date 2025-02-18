'use client';

import { CurrentExchangeRate } from '@/features/current-exchange-rate';

import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  return (
    <header className={st.header}>
      <Title level={1} color="white" className={st.title}>
        Currency exchange rates
      </Title>
      <section className={st.currencyExchange}>
        <CurrentExchangeRate />
      </section>
    </header>
  );
}
