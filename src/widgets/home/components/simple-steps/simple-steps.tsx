'use client';

import { SignUpDialog } from '@/core/auth/components';

import { cn } from '@/shared/lib/styles';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './simple-steps.module.css';

const steps = [
  {
    title: 'Account sign up',
    description: 'Sign up for your free account right now.',
  },
  {
    title: 'Account verification',
    description:
      'Submit all the required documents according to the KYC process to get your account approved.',
  },
  {
    title: 'Send & receive money',
    description:
      'Hooray! Now you can send and receive payments worldwide. We are covering 180 regions!',
  },
];

export function SimpleSteps() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={3} className={st.title}>
          To get started, follow three simple steps:
        </Title>
        <div className={st.signUpButton}>
          <SignUpDialog
            trigger={
              <Button size="md" variant="orange">
                Open a Free Account
              </Button>
            }
          />
        </div>
      </section>
      <section className={st.cards}>
        {steps.map(({ title, description }, index) => (
          <StepCard
            key={title}
            title={title}
            description={description}
            number={index + 1}
          />
        ))}
      </section>
      <div className={st.signUpButtonMobile}>
        <SignUpDialog
          trigger={
            <Button size="md" variant="orange">
              Open a Free Account
            </Button>
          }
        />
      </div>
    </section>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <article
      className={cn(st.cardLayout, {
        [st.cardBlack]: number === 1,
        [st.cardWhite]: number !== 1,
      })}
    >
      <div className={st.cardNumber}>
        <Title level={4} weight={700} color="white">
          {number}
        </Title>
      </div>
      <div className={st.cardText}>
        <Text size="base" weight={600} color={number === 1 ? 'white' : 'black'}>
          {title}
        </Text>
        <Text size="sm" weight={500} color={number === 1 ? 'white' : 'black'}>
          {description}
        </Text>
      </div>
    </article>
  );
}
