'use client';

import { JSX } from 'react';

import { Investment, Transparency, Trust } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-values.module.css';

const values = [
  {
    title: 'Transparency',
    description:
      'We believe openness and honesty are essential in all our relationships. By being clear about our processes, we foster strong, lasting relationships built on mutual understanding.',
    icon: <Transparency />,
  },
  {
    title: 'Trust',
    description:
      'We deliver on our promises. Through consistent actions and open communication, we create an environment where trust grows, driving both success and stability.',
    icon: <Trust />,
  },
  {
    title: 'Investment',
    description:
      'We invest in our people, products, and future. By supporting talent and continuously improving what we offer, we ensure sustained growth and innovation.',
    icon: <Investment />,
  },
];

export function OurValues() {
  return (
    <section className={st.background}>
      <section className={st.layout}>
        <div className={st.divider} />
        <Title level={3} className={st.title}>
          Our values
        </Title>
        <div className={st.cardLayout}>
          {values.map(({ title, description, icon }) => (
            <ValueCard
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

function ValueCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <article className={st.card}>
      <div className={st.cardInner}>
        {icon}
        <Title level={5} weight={600}>
          {title}
        </Title>
        <Text size="base" weight={400} className={st.cardDescContainer}>
          {description}
        </Text>
      </div>
    </article>
  );
}
