'use client';

import { SignUpDialog } from '@/core/auth/components';

import { HelpFormDialog } from '@/widgets/help/components/help-form-dialog';

import { HelpForm } from '@/features/help-form';

import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './help-buttons.module.css';

export function HelpButtons() {
  return (
    <section className={st.layout}>
      <Title level={0} className={st.title}>
        How can we help you?
      </Title>
      <section className={st.buttons}>
        <SignUpDialog
          trigger={
            <Button size="md" variant="orange">
              My account
            </Button>
          }
        />
        <HelpFormDialog
          placeholder="Payment"
          reason="Assistance with Payment"
        />
        <HelpFormDialog placeholder="Security" reason="Security" />
        <HelpFormDialog placeholder="Cards" />
      </section>
    </section>
  );
}
