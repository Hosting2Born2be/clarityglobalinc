'use client';

import { cn } from '@/shared/lib/styles';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why-choose.module.css';

const defaultOptions = [
  {
    title: 'Faster payments',
    description: 'Send or receive your money worldwide just in minutes!',
  },
  {
    title: 'Lower fees',
    description: 'Our fees and exchange rates are shown upfront.',
  },
  {
    title: 'Over 180 countries',
    description:
      'Our robust payment services allow you to transfer money globally in 30 different currencies to over 180 countries. Hello, 21st century, is it you?',
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
  {
    title: '12/5 customer support',
    description:
      'Our support team is available for your questions and requests. We are ready to solve any question you may have as soon as possible by phone or online by e-mail.',
  },
];

export function WhyChoose({
  optionsView = 'grid',
  title = 'Why choose Clarity Global Inc?',
  options = defaultOptions,
}: {
  title?: string;
  options?: { title: string; description: string }[];
  optionsView?: 'grid' | 'list';
}) {
  return (
    <section className={st.layout}>
      <section className={st.bannerLayout}>
        <Title level={1} className={st.title}>
          {title}
        </Title>
        <Divider />
        <div
          className={
            optionsView === 'grid' ? st.optionsListGrid : st.optionsList
          }
        >
          {options.map(({ title, description }) => (
            <Option
              key={title}
              title={title}
              description={description}
              optionsView={optionsView}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export function Option({
  title,
  description,
  optionsView,
}: {
  title: string;
  description: string;
  optionsView: 'grid' | 'list';
}) {
  const optionClasses = cn(st.option, {
    [st.optionGrid]: optionsView === 'grid',
  });

  return (
    <article className={st.optionsLayout}>
      <div className={st.optionDot} />
      <div className={optionClasses}>
        <Text size="base" weight={600}>
          {title.toUpperCase()}
        </Text>
        <Text size="base" weight={300}>
          {description}
        </Text>
      </div>
    </article>
  );
}
