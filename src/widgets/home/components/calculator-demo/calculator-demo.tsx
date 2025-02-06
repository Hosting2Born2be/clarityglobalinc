'use client';

import Link from 'next/link';

import { SignUpDialog } from '@/core/auth/components';

import { CurrencyConverter } from '@/features/currency-converter';

import { cn } from '@/shared/lib/styles';
import { FourDots, SupportUkraine } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import mainSt from '../page.module.css';
import st from './calculator-demo.module.css';

export function CalculatorDemo() {
  return (
    <section className={cn(st.calculatorDemo, mainSt.headerSection)}>
      <div className={st.headerActions}>
        <div className={st.quickActions}>
          <Link href="https://savelife.in.ua/en/">
            <SupportUkraine />
          </Link>
          <Button variant="transparent">Login</Button>
          <SignUpDialog trigger={<Button variant="white">Sign Up</Button>} />
        </div>
        <button className={st.menu}>
          <FourDots />
        </button>
      </div>
      <div className={mainSt.contentContainer}>
        <Title weight={600} color="white">
          Global money transfer
        </Title>
        <Title weight={300} color="white">
          calculator
        </Title>
        <div className={mainSt.contentDescription}>
          <Text color="white">Calculate fees and conversion costs</Text>
          <Text color="white">for sending money abroad</Text>
        </div>
      </div>
      <div className={st.currencyConverterLayout}>
        <CurrencyConverter />
      </div>
    </section>
  );
}
