'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  return (
    <header className={st.layout}>
      <Title level={1} weight={700} color="white">
        FAQ
      </Title>
      <Text size="lg" weight={500} color="white" className={st.text}>
        Clarity Global is an online payment service. We transfer money to 180
        countries globally within seconds. There is a list of frequently asked
        questions to help you use the service faster and simpler. Please contact
        the customer support team if you can not find an answer.
      </Text>
    </header>
  );
}
