'use client';

import st from './answers.module.scss';
import { data } from './data';

export function Answers() {
  return (
    <section className={st.layout}>
      {data.map(({ title, answer }) => (
        <section key={title} className={st.list}>
          <h5>{title}</h5>
          {answer}
        </section>
      ))}
    </section>
  );
}
