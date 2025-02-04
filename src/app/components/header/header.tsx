'use client';

import { CalculatorDemo } from '../calculator-demo';
import { CardsPresentation } from '../cards-presentation';
import st from './header.module.css';

export function Header() {
  return (
    <header className={st.homeHeader}>
      <CardsPresentation />
      <CalculatorDemo />
    </header>
  );
}
