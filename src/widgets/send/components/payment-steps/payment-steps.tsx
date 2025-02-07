'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './payment-steps.module.css';

const steps = [
  {
    title: 'Sign up for your account',
    description:
      'First, register. Then log in to your account and enter your card or bank details.',
  },
  {
    title: 'Get your account approved',
    description:
      'Submit all the required documents according to the KYC process to start enjoying Clarity Global services.',
  },
  {
    title: 'Send money',
    description:
      'Log into your account and start the process of transferring payments.',
  },
];

export function PaymentSteps() {
  return (
    <section className={st.layout}>
      <Title level={3} className={st.titleLayout}>
        To send payment, follow three simple steps:
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
        <Text size="base" weight={600} className={st.text}>
          {title}
        </Text>
        <Text size="sm" weight={500} className={st.text}>
          {description}
        </Text>
      </section>
    </article>
  );
}
