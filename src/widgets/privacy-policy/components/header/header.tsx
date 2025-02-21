'use client';

import Link from 'next/link';

import { VerifiedDoc } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './header.module.css';

export function Header() {
  return (
    <header className={st.layout}>
      <section className={st.essentialsText}>
        <Title level={1}>CLARITY GLOBAL INC.</Title>
        <Text size="base" weight={400}>
          Data protection is at the core of our products, team, foundation, and
          processes. On this page you will find the measures we take to keep
          your data is safe.
        </Text>
      </section>
      <GdprEssentials />
    </header>
  );
}

function GdprEssentials() {
  return (
    <section className={st.essentialsLayout}>
      <VerifiedDoc />
      <section className={st.essentialsInfo}>
        <div>
          <Text size="sm" weight={700}>
            GDPR Essentials
          </Text>
          <Text size="sm" weight={400}>
            Last verify: 15 December 2023
          </Text>
        </div>
        <Button
          variant="orange"
          onClick={() =>
            window.open('/CLARITY-GLOBAL-INC- GDPR Essentials.pdf', '_blank')
          }
        >
          Download
        </Button>
        <Text size="xs">
          Certified by{' '}
          <Link href="https://www.privasee.io/" className={st.link}>
            Privasee
          </Link>
        </Text>
      </section>
    </section>
  );
}
