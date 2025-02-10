'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './offer-emoney.module.css';

const offers = [
  {
    title: 'Unlimited transactions',
    description:
      'First, register. Then log in to your account and enjoy your unlimited and rapid payment transfers.',
  },
  {
    title: 'Currency conversion',
    description:
      'You do not need to use third parties to convert the currency. With Clarity Global Inc, you can have several currencies balances simultaneously or do a conversion right at your account.',
  },
  {
    title: 'Internal transfer',
    description:
      'In the Clarity Global Inc system, you can effortlessly transfer funds with your personal account to your friends or family.',
  },
];

export function OfferEmoney() {
  return (
    <section className={st.layout}>
      <Title level={3} className={st.title}>
        Clarity Global Inc offers you e-money solutions without boundaries:
      </Title>
      <section className={st.cards}>
        {offers.map(({ title, description }) => (
          <OfferCard key={title} title={title} description={description} />
        ))}
      </section>
    </section>
  );
}

function OfferCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className={st.card}>
      <div className={st.dot} />
      <Text size="lg" weight={600}>
        {title}
      </Text>
      <Text size="base" weight={300}>
        {description}
      </Text>
    </article>
  );
}
