'use client';

import { ReactNode } from 'react';

import st from './privacy-content.module.scss';

export function PrivacyContent({ children }: { children: ReactNode }) {
  return <section className={st.layout}>{children}</section>;
}
