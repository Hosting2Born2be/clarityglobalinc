'use client';

import st from './policy-update.module.css';

export function PolicyUpdate({
  update,
  version,
}: {
  version: string;
  update: string;
}) {
  return (
    <section className={st.layout}>
      <span className={st.text}>{version}</span>
      <span className={st.text}>{update}</span>
    </section>
  );
}
