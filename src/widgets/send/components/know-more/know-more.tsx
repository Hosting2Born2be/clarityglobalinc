'use client';

import { KnowMore as CommonKnowMore } from '@/widgets/common/components';

import st from './know-more.module.css';

export function KnowMore() {
  return (
    <div className={st.layout}>
      <CommonKnowMore />
    </div>
  );
}
