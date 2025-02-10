'use client';

import Image from 'next/image';

import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  return (
    <header className={st.layout}>
      <Title weight={600} color="white" className={st.title}>
        Your payment security
      </Title>
      <Title weight={300} color="white">
        is our top priority.
      </Title>
      <div className={st.cards}>
        <Image
          className={st.cardsImg}
          src="/clarity-cards.png"
          alt="cards"
          width={1012}
          height={325}
        />
      </div>
    </header>
  );
}
