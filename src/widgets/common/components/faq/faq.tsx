'use client';

import { useMemo } from 'react';

import { Accordion } from '@/shared/ui/kit/accordion';
import { Tag } from '@/shared/ui/kit/tag';
import { Title } from '@/shared/ui/kit/title';

import { extendedFaqData, faqData } from './data';
import st from './faq.module.css';

export function Faq({
  showLabel = true,
  extended = false,
}: {
  extended?: boolean;
  showLabel?: boolean;
}) {
  const data = useMemo(
    () => (extended ? extendedFaqData : faqData),
    [extended],
  );

  return (
    <section className={st.layout}>
      {showLabel ? <Tag>FAQ</Tag> : null}
      <div className={st.accordionContainer}>
        {data.map(({ question, answer }) => (
          <Accordion
            key={question}
            mode="wide"
            trigger={
              <Title level={4} weight={600}>
                {question}
              </Title>
            }
            content={<section className={st.contentLayout}>{answer}</section>}
          />
        ))}
      </div>
    </section>
  );
}
