'use client';

import { Text, TextSize, TextWeight } from '@/shared/ui/kit/text';

import st from './list.module.css';

export function List({
  values,
  textSize = 'base',
  textWeight = 300,
}: {
  values: string[];
  textSize?: TextSize;
  textWeight?: TextWeight;
}) {
  return (
    <ul className={st.list}>
      {values.map(item => (
        <li key={item} className={st.listItem}>
          <Text size={textSize} weight={textWeight}>
            {item}
          </Text>
        </li>
      ))}
    </ul>
  );
}
