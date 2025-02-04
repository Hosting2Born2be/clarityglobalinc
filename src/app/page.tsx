'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CurrencyConverter } from '@/features/currency-converter';

import { FourDots, SupportUkraine } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './page.module.css';

export default function Home() {
  return (
    <main>
      <header className={st.homeHeader}>
        <section className={st.presentation}>
          <Image src="/full-logo.svg" alt="full-logo" width="188" height="36" />
          <div className={st.contentContainer}>
            <Title weight={600} color="white">
              Smart electronic money
            </Title>
            <Title weight={300} color="white">
              solution in your pocket.
            </Title>
            <div className={st.contentDescription}>
              <Text color="white">Send and receive payments across</Text>
              <Text color="white">Canada and worldwide.</Text>
            </div>
          </div>
        </section>
        <section className={st.calculatorDemo}>
          <div className={st.headerActions}>
            <div>
              <Link href="https://savelife.in.ua/en/">
                <SupportUkraine />
              </Link>
              <Button variant="transparent">Login</Button>
              <Button variant="white">Sign Up</Button>
            </div>
            <FourDots />
          </div>
          <div className={st.contentContainer}>
            <Title weight={600} color="white">
              Global money transfer
            </Title>
            <Title weight={300} color="white">
              calculator
            </Title>
            <div className={st.contentDescription}>
              <Text color="white">Calculate fees and conversion costs</Text>
              <Text color="white">for sending money abroad</Text>
            </div>
          </div>
          <div className={st.currencyConverterLayout}>
            <CurrencyConverter />
          </div>
        </section>
      </header>
    </main>
  );
}
