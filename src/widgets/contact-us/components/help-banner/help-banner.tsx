'use client';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './help-banner.module.css';

export function HelpBanner() {
  return (
    <article className={st.layout}>
      <div className={st.title}>
        <Title level={1} color="white">
          Have any questions or requests?
        </Title>
        <Text color="white">
          Don’t worry! We have great people ready to get a solution for you
          whenever you need it.
        </Text>
      </div>
      <Button variant="white" size="md">
        Find out more
      </Button>
    </article>
  );
}
