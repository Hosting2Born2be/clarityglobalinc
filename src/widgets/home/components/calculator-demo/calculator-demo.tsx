'use client';

import { CurrencyConverter } from '@/features/currency-converter';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import mainSt from '../page.module.css';
import st from './calculator-demo.module.css';

export function CalculatorDemo() {
  return (
    <section className={cn(st.calculatorDemo, mainSt.headerSection)}>
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
