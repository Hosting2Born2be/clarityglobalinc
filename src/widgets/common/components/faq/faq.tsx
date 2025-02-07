'use client';

import { Accordion } from '@/shared/ui/kit/accordion';
import { Tag } from '@/shared/ui/kit/tag';
import { Title } from '@/shared/ui/kit/title';

import { faqData } from './data';
import st from './faq.module.css';

export function Faq() {
  return (
    <section className={st.layout}>
      <Tag>FAQ</Tag>
      <div className={st.accordionContainer}>
        {faqData.map(({ question, answer }) => (
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
