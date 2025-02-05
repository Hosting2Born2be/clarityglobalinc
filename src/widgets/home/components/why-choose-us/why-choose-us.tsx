'use client';

import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why-choose-us.module.css';

const options = [
  {
    title: 'Faster payments',
    description: 'Send or receive your money worldwide just in minutes!',
  },
  {
    title: 'Lower fees',
    description: 'Our fees and exchange rates are shown upfront.',
  },
  {
    title: 'Easy-to-use',
    description:
      'A simple and convenient platform that does not require much of your time.',
  },
  {
    title: '100% secure',
    description:
      'Our industry-leading technology protects your money and guarantees it arrives safely every time.',
  },
];

export function WhyChooseUs() {
  return (
    <section className={st.layout}>
      <section className={st.bannerLayout}>
        <Tag>WHY CHOOSE US?</Tag>
        <Title level={1}>
          Managing money never was so easy and convenient.
        </Title>
        <Divider />
        <div
          style={{
            marginTop: '76px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '52px 107px',
          }}
        >
          {options.map(({ title, description }) => (
            <Option key={title} title={title} description={description} />
          ))}
        </div>
      </section>
      <Button variant="orange" size="md">
        Send payment
      </Button>
    </section>
  );
}

export function Option({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className={st.optionsLayout}>
      <div className={st.optionDot} />
      <div className={st.option}>
        <Text size="lg" weight={600}>
          {title.toUpperCase()}
        </Text>
        <Text size="lg" weight={300}>
          {description}
        </Text>
      </div>
    </article>
  );
}
