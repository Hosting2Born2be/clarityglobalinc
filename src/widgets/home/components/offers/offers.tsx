'use client';

import { SignUpDialog } from '@/core/auth/components';

import { BurgerMenu } from '@/features/burger-menu';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './offers.module.css';

const offers = [
  'Attractive rates',
  'Trouble-free account opening',
  'User-friendly platform for payments processing',
  'Innovative banking solutions',
  'Transparent pricing',
];

export function Offers() {
  return (
    <section className={st.offersLayout}>
      <div className={st.divider} />
      <Title level={3}>Clarity Global offers</Title>
      <div className={st.offers}>
        {offers.map(offer => (
          <OfferCard key={offer} value={offer} />
        ))}
      </div>
      <SignUpDialog
        trigger={
          <Button variant="orange" size="md" className={st.button}>
            Try now
          </Button>
        }
      />
      <BurgerMenu />
    </section>
  );
}

function OfferCard({ value }: { value: string }) {
  return (
    <article className={st.offerCard}>
      <div className={st.dot} />
      <Text weight={500} size="base">
        {value}
      </Text>
    </article>
  );
}
