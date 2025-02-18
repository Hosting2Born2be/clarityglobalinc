'use client';

import { HelpForm } from '@/features/help-form';

import { Button } from '@/shared/ui/kit/button';
import { Dialog } from '@/shared/ui/kit/dialog';

import st from './help-form-dialog.module.css';

export function HelpFormDialog({
  placeholder,
  reason = 'Cards',
}: {
  placeholder: string;
  reason?: 'Cards' | 'My Account' | 'Security' | 'Assistance with Payment';
}) {
  return (
    <Dialog
      trigger={
        <Button size="md" variant="orange">
          {placeholder}
        </Button>
      }
    >
      <div className={st.layout}>
        <HelpForm reason={reason} />
      </div>
    </Dialog>
  );
}
