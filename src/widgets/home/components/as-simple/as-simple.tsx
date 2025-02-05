'use client';

import { Tag } from '@/shared/ui/kit/tag';
import { Title } from '@/shared/ui/kit/title';

import st from './as-simple.module.css';

export function AsSimple() {
  return (
    <section className={st.layout}>
      <Tag className={st.tag}>AS SIMPLE AS ABC</Tag>
      <Title level={1} className={st.title}>
        We make international money transfers fast, easy and secure.
      </Title>
      <Title level={5} weight={300} className={st.text}>
        With Clarity Global Inc, any method you choose takes a few steps to send
        & receive money online.
      </Title>
    </section>
  );
}
