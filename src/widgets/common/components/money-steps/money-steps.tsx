'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './money-steps.module.css';

export function MoneySteps({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; description: string }[];
}) {
  return (
    <section className={st.layout}>
      <Title level={3} className={st.titleLayout}>
        {title}
      </Title>
      <section className={st.stepsLayout}>
        <div className={st.cards}>
          {steps.map(({ title, description }, index) => (
            <StepCard
              key={title}
              title={title}
              description={description}
              number={index + 1}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

function StepCard({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: number;
}) {
  return (
    <article className={st.cardLayout}>
      <Title level={4} className={st.cardNumber} color="white">
        {number}
      </Title>
      <section className={st.cardInfo}>
        <Text size="lg" weight={600} className={st.text}>
          {title}
        </Text>
        <Text size="sm" weight={500} className={st.text}>
          {description}
        </Text>
      </section>
    </article>
  );
}
