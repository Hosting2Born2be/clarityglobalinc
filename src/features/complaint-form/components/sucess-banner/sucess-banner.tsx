'use client';

import { Sucess } from '@/shared/ui/icons';

import st from './sucess-banner.module.css';

export function SuccessBanner() {
  return (
    <section className={st.layout}>
      <Sucess />
      <span>
        Thanks for the info, your
        <br /> complaint has been accepted!
      </span>
    </section>
  );
}
