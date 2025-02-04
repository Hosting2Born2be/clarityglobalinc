'use client';

import st from './tag.module.css';

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className={st.tag}>{children}</span>;
}
