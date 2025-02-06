'use client';

import { Button } from '@/shared/ui/kit/button';
import { Dialog } from '@/shared/ui/kit/dialog';
import { Title } from '@/shared/ui/kit/title';

import st from './sign-up-dialog.module.css';

export function SignUpDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog trigger={trigger}>
      <div className={st.dialogContent}>
        <Title level={2} weight={600}>
          Choose your identity
        </Title>
        <div className={st.dialogButtons}>
          <Button variant="orange" size="md">
            Company
          </Button>
          <Button variant="orangeOutline" size="md">
            Individual
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
