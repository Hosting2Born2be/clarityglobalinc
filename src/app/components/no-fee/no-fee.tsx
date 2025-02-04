'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './no-fee.module.css';

export function NoFee() {
  return (
    <div className={st.layout}>
      <Title level={1} color="white" weight={700}>
        No opening fee and no subscription fee.
      </Title>
      <Text size="xl" color="white" weight={500}>
        For all individuals when opening an account for the year&#39;s first
        half!
      </Text>
    </div>
  );
}
