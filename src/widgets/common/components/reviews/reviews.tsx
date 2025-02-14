'use client';

import { Slider } from '@/shared/ui/components/slider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { reviews } from './data';
import st from './reviews.module.css';

export function Reviews() {
  const slides = reviews.map(({ name, review, country, Icon }) => (
    <ReviewCard
      key={name}
      name={name}
      review={review}
      country={country}
      Icon={Icon}
    />
  ));

  return (
    <section className={st.layout}>
      <Title level={3} weight={600} className={st.title}>
        Clients say about us:
      </Title>
      <Slider slides={slides} />
    </section>
  );
}

function ReviewCard({
  name,
  review,
  country,
  Icon,
}: {
  name: string;
  review: string;
  country: string;
  Icon: React.ElementType;
}) {
  return (
    <article className={st.card}>
      <section className={st.cardName}>
        <Text size="base" weight={600}>
          {name}
        </Text>
        <div className={st.cardCountry}>
          <Icon />
          <Text color="grey" size="sm" weight={500}>
            {country}
          </Text>
        </div>
      </section>
      <Text size="sm" weight={300} className={st.cardReview}>
        {review}
      </Text>
    </article>
  );
}
