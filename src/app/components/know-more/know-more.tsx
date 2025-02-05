'use client';

import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './know-more.module.css';

export function KnowMore() {
  return (
    <section className={st.layout}>
      <Title level={1} weight={600}>
        Need to know more?
      </Title>
      <Button size="md" variant="orange">
        Open all FAQ
      </Button>
    </section>
  );
}
