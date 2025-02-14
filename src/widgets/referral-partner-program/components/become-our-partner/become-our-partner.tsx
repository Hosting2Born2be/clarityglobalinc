'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './become-our-partner.module.css';

const partnerCards = [
  {
    title: 'Advantageous collaboration',
    description:
      'Position yourself as a trusted source, promoting services that transcend industry boundaries.',
  },
  {
    title: 'A commission that grows with success',
    description:
      'Enjoy a commission directly tied to the turnover of clients you refer, ensuring your rewards grow as their success.',
  },
  {
    title: 'Transparent commission structure',
    description:
      'Receive monthly commission payments and track your success through comprehensive reports and our simple-to-use CRM.',
  },
];

export function BecomeOurPartner() {
  return (
    <section className={st.layout}>
      <Title level={3}>Why become our partner?</Title>
      <section className={st.cards}>
        {partnerCards.map(({ title, description }) => (
          <PartnerCard key={title} title={title} description={description} />
        ))}
      </section>
    </section>
  );
}

function PartnerCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className={st.card}>
      <div className={st.dot} />
      <Text size="base" weight={700}>
        {title}
      </Text>
      <Text size="base" weight={500}>
        {description}
      </Text>
    </article>
  );
}
