'use client';

import { SignUpDialog } from '@/core/auth/components';

import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './get-free-account.module.css';

export function GetFreeAccount() {
  return (
    <section className={st.layout}>
      <Title level={1} weight={600} color="white" className={st.title}>
        Get your free Clarity Global Inc account right now!
      </Title>
      <SignUpDialog
        trigger={
          <Button variant="white" size="md">
            Sign up
          </Button>
        }
      />
    </section>
  );
}
