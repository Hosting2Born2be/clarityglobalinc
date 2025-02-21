'use client';

import { Pdf } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './privacy-title.module.css';

export function PrivacyTitle() {
  return (
    <section className={st.layout}>
      <span className={st.download}>
        <Title level={4} weight={800}>
          YOUR PRIVACY IS RESPECTED HERE
        </Title>
        <Button
          variant="orangeSecondary"
          className={st.btn}
          onClick={() => window.open('/privacy-policy.pdf')}
        >
          <span>Download Privacy Policy in PDF</span>
          <Pdf />
        </Button>
      </span>
      <Text size="base" weight={400}>
        We aim to be transparent. We care so much about our business, and you
        are key to it. That is why we do not hide behind complex wording and
        fine print. Read our Privacy Policy below to understand what we use your
        data for.
      </Text>
    </section>
  );
}
