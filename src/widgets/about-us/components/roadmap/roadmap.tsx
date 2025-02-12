'use client';

import { useMemo } from 'react';

import { useWindowSize } from '@/shared/lib/hooks/hooks';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './roadmap.module.css';

const roadmap = [
  {
    title: 'Who we are',
    description:
      'We are the Clarity Global team — dedicated experts who make international money transfer rapid, user-friendly, and 100% secure. With Clarity Global, any method you choose only takes a few steps to send or receive payment online.',
  },
  {
    title: 'Our mission',
    description:
      'We pride ourselves on providing our customers with reasonable exchange rates, convenient payment transfers, and a courteous and prompt service that you would recommend to your friends.',
  },
  {
    title: 'Our values',
    description:
      'We take our reputation very seriously: a transparent relationship with customers is a must. To maintain our reputation, we work through mutual trust, support, and honesty to ensure that our clients, partners, and employees are proud of their cooperation with us.',
  },
  {
    title: 'Our goal',
    description:
      'Our goal is to be the most reliable and innovative provider in the payment industry, offering efficient solutions to our customers across all markets worldwide.',
  },
];

export function Roadmap() {
  const { width } = useWindowSize();
  const isLargeScreen = useMemo(() => width > 1280, [width]);

  return (
    <section className={st.layout}>
      {roadmap.map(({ title, description }, i) => (
        <RoadmapCard
          key={title}
          title={title}
          description={description}
          index={i}
          isLargeScreen={isLargeScreen}
        />
      ))}
    </section>
  );
}

function RoadmapCard({
  title,
  description,
  index,
  isLargeScreen,
}: {
  title: string;
  description: string;
  index: number;
  isLargeScreen: boolean;
}) {
  return (
    <article
      className={st.card}
      style={{
        flexDirection: isLargeScreen
          ? index % 2 === 0
            ? 'row'
            : 'row-reverse'
          : 'initial',
      }}
    >
      <section className={st.cardInfo}>
        <Title level={3} weight={600}>
          {title}
        </Title>
        <Text size="lg">{description}</Text>
      </section>
      <div className={st.attributes}>
        <div className={st.dot} />
        <div className={st.divider} />
      </div>
    </article>
  );
}
