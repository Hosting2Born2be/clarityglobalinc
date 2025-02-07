'use client';

import Image from 'next/image';

import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  return (
    <header className={st.header}>
      <Title level={1} weight={600} color="white">
        Send your payments
      </Title>
      <Title level={1} weight={300} color="white">
        quickly and securely.
      </Title>
      <Title level={5} weight={400} color="white" className={st.text}>
        Get a better exchange rate and avoid excessive bank fees.
      </Title>
    </header>
  );
}
