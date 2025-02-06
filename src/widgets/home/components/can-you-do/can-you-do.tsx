'use client';

import { SignUpDialog } from '@/core/auth/components';

import { cn } from '@/shared/lib/styles';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './can-you-do.module.css';

const options = ['Send money', 'Receive money', 'Pay a friend'];

export function CanYouDo() {
  return (
    <section className={st.layout}>
      <Title level={3} weight={600}>
        What can you do?
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
      <SignUpDialog
        trigger={
          <Button variant="orange" size="md">
            Make payment
          </Button>
        }
      />
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
      <Title
        level={5}
        weight={500}
        color={variant === 'black' ? 'white' : 'black'}
      >
        {title}
      </Title>
    </article>
  );
}
