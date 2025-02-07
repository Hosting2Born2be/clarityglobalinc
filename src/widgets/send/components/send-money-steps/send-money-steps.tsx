'use client';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './send-money-steps.module.css';

const options = [
  'Registering to your account couldn’t be simpler!',
  'It is as easy as ABC and takes only a few minutes.',
  'We make international money transfers fast, simple and secure.',
];

export function SendMoneySteps() {
  return (
    <section className={st.layout}>
      <Title level={3}>
        How can I send money electronically using Clarity Global?
      </Title>
      <section className={st.cards}>
        {options.map((option, i) => (
          <OptionCard
            key={option}
            title={option}
            variant={i === 1 ? 'black' : 'white'}
          />
        ))}
      </section>
    </section>
  );
}

function OptionCard({
  title,
  variant,
}: {
  title: string;
  variant: 'black' | 'white';
}) {
  const cardClasses = cn(st.card, {
    [st.cardBlack]: variant === 'black',
    [st.cardWhite]: variant === 'white',
  });

  return (
    <article className={cardClasses}>
      <Text weight={500} color={variant === 'black' ? 'white' : 'black'}>
        {title}
      </Text>
    </article>
  );
}
