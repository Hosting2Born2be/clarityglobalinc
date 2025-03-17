'use client';

import { Alert } from '@/shared/ui/icons';

import st from './alert-banner.module.css';

export function AlertBanner() {
  return (
    <section className={st.layout}>
      <Alert />
      <span>Please fill in all required fields</span>
    </section>
  );
}
