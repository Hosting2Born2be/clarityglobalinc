'use client';

import { Canada, SegalLogo, StikemanLogo } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './partners.module.css';

const partners = [
  {
    name: 'Stikeman Elliott',
    description:
      'Our trusted legal partner, ensuring we navigate complex legal matters with precision and expertise.',
    Icon: Canada,
    Logo: StikemanLogo,
  },
  {
    name: 'Segal GCSE',
    description:
      'Our dedicated audit firm, helping us maintain financial transparency and integrity in all our endeavours.',
    Icon: Canada,
    Logo: SegalLogo,
  },
];

export function Partners() {
  return (
    <section className={st.layout}>
      <section className={st.info}>
        <Title level={3}>Our partners</Title>
        <Text size="lg">
          At Clarity Global, we are proud to collaborate with reputable Canadian
          firms to support our business operations:
        </Text>
      </section>
      <section className={st.cards}>
        {partners.map(({ name, description, Icon, Logo }) => (
          <PartnerCard
            key={name}
            name={name}
            description={description}
            Icon={Icon}
            Logo={Logo}
          />
        ))}
      </section>
    </section>
  );
}

function PartnerCard({
  name,
  description,
  Icon,
  Logo,
}: {
  name: string;
  description: string;
  Icon: React.ElementType;
  Logo: React.ElementType;
}) {
  return (
    <article className={st.card}>
      <div className={st.cardLogo}>
        <Logo />
      </div>
      <section>
        <div className={st.cardName}>
          <Icon />
          <Text size="base" weight={600}>
            {name}
          </Text>
        </div>
        <Text size="sm" weight={300}>
          {description}
        </Text>
      </section>
    </article>
  );
}
