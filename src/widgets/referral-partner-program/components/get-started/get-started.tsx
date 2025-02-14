'use client';

import Link from 'next/link';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './get-started.module.css';

export function GetStarted() {
  return (
    <section className={st.layout}>
      <div className={st.title}>
        <Title color="white">Ready to get started?</Title>
        <Title level={4} color="white">
          Begin your journey toward success by joining our Referral Partner
          Program today!
        </Title>
      </div>
      <Button variant="white" size="md">
        Become a partner
      </Button>
      <div className={st.text}>
        <Text size="xs" color="white">
          To ensure a harmonious partnership, please
        </Text>
        <Text size="xs" color="white">
          review our <Link href="#">Terms and Conditions.</Link>
        </Text>
      </div>
    </section>
  );
}
