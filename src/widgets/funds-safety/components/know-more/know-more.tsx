'use client';

import React from 'react';

import { KnowMore as CommonKnowMore } from '@/widgets/common/components';

import st from './know-more.module.css';

export function KnowMore() {
  return (
    <section className={st.layout}>
      <CommonKnowMore />
    </section>
  );
}
