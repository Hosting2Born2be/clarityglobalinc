'use client';

import { SignUpDialog } from '@/core/auth/components';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './tracking-currencies.module.css';

const data = [
  {
    title: 'Minimise Costs',
    description:
      'Tracking currency rates allows businesses to capitalise on favourable exchange rates, reducing the cost of international transactions and maximising their budgetary efficiency.',
  },
  {
    title: 'Strategic Decision-Making',
    description:
      'Monitoring currency fluctuations empowers businesses to make informed decisions regarding the timing of international payments, helping to optimise financial strategies and mitigate currency-related risks.',
  },
  {
    title: 'Competitive Edge',
    description:
      'Staying abreast of currency trends enables businesses to adapt swiftly to market changes, ensuring they remain competitive in global markets by leveraging advantageous exchange rates to their advantage.',
  },
];

export function TrackingCurrencies() {
  return (
    <section className={st.layout}>
      <Title level={3} className={st.title}>
        Why tracking currency exchange rates matters
      </Title>
      <div className={st.cardsLayout}>
        <section className={st.cards}>
          {data.map(({ title, description }, i) => (
            <TrackingCard
              key={title}
              title={title}
              description={description}
              index={i}
            />
          ))}
        </section>
      </div>
      <div className={st.signUp}>
        <SignUpDialog
          trigger={
            <Button variant="orangeOutline" size="md">
              Sign Up Now
            </Button>
          }
        />
      </div>
    </section>
  );
}

function TrackingCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className={st.cardLayout}>
      <div className={st.cardNumber}>{index + 1}</div>
      <div className={st.cardInfo}>
        <Title level={5} className={st.cardText}>
          {title}
        </Title>
        <Text size="sm" className={st.cardText}>
          {description}
        </Text>
      </div>
    </article>
  );
}
