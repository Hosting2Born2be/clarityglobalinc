'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import mainSt from '../page.module.css';
import st from './cards-presentation.module.css';

export function CardsPresentation() {
  return (
    <section className={cn(st.presentation, mainSt.headerSection)}>
      <Image src="/full-logo.svg" alt="full-logo" width="188" height="36" />
      <div className={mainSt.contentContainer}>
        <Title weight={600} color="white">
          Smart electronic money
        </Title>
        <Title weight={300} color="white">
          solution in your pocket.
        </Title>
        <div className={mainSt.contentDescription}>
          <Text color="white">Send and receive payments across</Text>
          <Text color="white">Canada and worldwide.</Text>
        </div>
      </div>
    </section>
  );
}
