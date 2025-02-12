'use client';

import { ContactForm } from '@/features/contact-form';

import st from './contact-us.module.css';

export function ContactUs() {
  return (
    <section className={st.layout}>
      <ContactForm />
    </section>
  );
}
