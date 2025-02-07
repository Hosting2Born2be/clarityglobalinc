'use client';

import { SignUpDialog } from '@/core/auth/components';

import { st } from '@/widgets/home/components/get-free-account/';

import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

export function ChangeTheWay() {
  return (
    <section className={st.layout}>
      <Title level={1} weight={600} color="white" className={st.title}>
        Change the way you think about money transfers with Clarity Global!
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
