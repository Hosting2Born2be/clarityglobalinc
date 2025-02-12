'use client';

import { Text } from '@/shared/ui/kit/text';

import st from './list.module.css';

export function List({ values }: { values: string[] }) {
  return (
    <ul className={st.list}>
      {values.map(item => (
        <li key={item} className={st.listItem}>
          <Text size="base">{item}</Text>
        </li>
      ))}
    </ul>
  );
}
