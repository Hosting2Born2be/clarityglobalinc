'use client';

import { ComplaintForm } from '@/features/complaint-form/components';

import { ComplaintAnnotation } from '../complaint-annotation';
import st from './anonymous-complaint-form.module.css';

export function AnonymousComplaintForm() {
  return (
    <section className={st.layout}>
      <ComplaintAnnotation />
      <ComplaintForm />
    </section>
  );
}
