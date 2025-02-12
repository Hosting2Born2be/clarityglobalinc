'use client';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './develop-offer.module.css';

const offers = [
  { title: 'Client service-oriented', value: 'Yes' },
  { title: 'Tailor-made solutions', value: 'Yes' },
  {
    title: 'Sphere expertise',
    value: 'Service companies, Affiliation, Marketing',
  },
  {
    title: 'Speed',
    value: 'Yes, and improving',
  },
];

export function DevelopOffer() {
  return (
    <div className={st.wrapper}>
      <section className={st.layout}>
        <div className={st.title}>
          <Title level={2}>Possible ways to develop the unique offer</Title>
          <Title level={2} color="orange">
            01
          </Title>
        </div>
        <section className={st.offers}>
          {offers.map(({ title, value }) => (
            <OfferItem key={title} title={title} value={value} />
          ))}
        </section>
      </section>
    </div>
  );
}

function OfferItem({ title, value }: { title: string; value: string }) {
  return (
    <>
      <Divider className={st.topDivider} />
      <article className={st.offerItem}>
        <div className={st.offerTitleLayout}>
          <div className={st.dot} />
          <Text className={st.offerValue} weight={400} size="lg">
            {title}
          </Text>
        </div>
        <Divider className={st.divider} />
        <Text className={st.offerValue} weight={600} size="lg">
          {value}
        </Text>
      </article>
    </>
  );
}
