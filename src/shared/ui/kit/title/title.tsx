'use client';

import { cn } from '@/shared/lib/styles';

import st from './title.module.css';

export function Title({
  children,
  weight = 600,
  color = 'black',
  level = 2,
}: {
  children: React.ReactNode;
  weight?: 300 | 400 | 600 | 700;
  color?: 'black' | 'white';
  level?: 1 | 2 | 3 | 4;
}) {
  const titleClasses = cn(st.title, {
    [st.weightLight]: weight === 300,
    [st.weightNormal]: weight === 400,
    [st.weightSemibold]: weight === 600,
    [st.weightBold]: weight === 700,
    [st.colorBlack]: color === 'black',
    [st.colorWhite]: color === 'white',
    [st.levelOne]: level === 1,
    [st.levelTwo]: level === 2,
    [st.levelThree]: level === 3,
    [st.levelFour]: level === 4,
  });

  return <h1 className={titleClasses}>{children}</h1>;
}
