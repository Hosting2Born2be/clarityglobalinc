'use client';

import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  return (
    <header className={st.layout}>
      <Title className={st.title} color="white">
        Unique Offer
      </Title>
    </header>
  );
}
