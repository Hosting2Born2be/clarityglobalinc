'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-values.module.css';

const values = [
  {
    title: 'Transparency',
    description:
      'We believe openness and honesty are essential in all our relationships. By being clear about our processes, we foster strong, lasting relationships built on mutual understanding.',
  },
  {
    title: 'Trust',
    description:
      'We deliver on our promises. Through consistent actions and open communication, we create an environment where trust grows, driving both success and stability.',
  },
  {
    title: 'Investment',
    description:
      'We invest in our people, products, and future. By supporting talent and continuously improving what we offer, we ensure sustained growth and innovation.',
  },
];

export function OurValues() {
  return (
    <section className={st.layout}>
      <div className={st.divider} />
      <Title level={3}>Our values</Title>
      <div className={st.cardLayout}>
        {values.map(({ title, description }) => (
          <ValueCard key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className={st.card}>
      <div className={st.dot} />
      <Title level={5} weight={600}>
        {title}
      </Title>
      <Text size="base" weight={400} className={st.cardDescContainer}>
        {description}
      </Text>
    </article>
  );
}
