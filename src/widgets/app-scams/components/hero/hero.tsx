'use client';

import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.css';

export function Hero() {
  return (
    <section className={st.layout}>
      <Title color="white" className={st.title}>
        APP Scams: Reimbursement Rules
      </Title>
    </section>
  );
}
