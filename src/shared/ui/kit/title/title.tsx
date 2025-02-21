'use client';

import { cn } from '@/shared/lib/styles';

import st from './title.module.css';

export function Title({
  children,
  className,
  weight = 600,
  color = 'black',
  level = 2,
}: {
  children: React.ReactNode;
  weight?: 300 | 400 | 500 | 600 | 700 | 800;
  color?: 'black' | 'white' | 'orange';
  level?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const titleClasses = cn(st.title, {
    [st.weightLight]: weight === 300,
    [st.weightNormal]: weight === 400,
    [st.weightMedium]: weight === 500,
    [st.weightSemibold]: weight === 600,
    [st.weightBold]: weight === 700,
    [st.colorBlack]: color === 'black',
    [st.colorWhite]: color === 'white',
    [st.colorOrange]: color === 'orange',
    [st.levelZero]: level === 0,
    [st.levelOne]: level === 1,
    [st.levelTwo]: level === 2,
    [st.levelThree]: level === 3,
    [st.levelFour]: level === 4,
    [st.levelFive]: level === 5,
  });

  return <h1 className={cn(titleClasses, className)}>{children}</h1>;
}
