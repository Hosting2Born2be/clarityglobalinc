'use client';

import st from './dot.module.css';

export function Dot({
  width = 40,
  height = 40,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <div
      className={st.dot}
      style={{ height: `${height}px`, width: `${width}px` }}
    />
  );
}
