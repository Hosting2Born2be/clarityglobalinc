'use client';

import { useCardsMove } from '../../hooks/use-cards-move';
import { CalculatorDemo } from '../calculator-demo';
import { CardsPresentation } from '../cards-presentation';
import st from './header.module.css';

export function Header() {
  const animationsMeta = useCardsMove();

  return (
    <header className={st.homeHeader} onMouseMove={animationsMeta.onMouseMove}>
      <CardsPresentation animationsMeta={animationsMeta} />
      <CalculatorDemo />
    </header>
  );
}
