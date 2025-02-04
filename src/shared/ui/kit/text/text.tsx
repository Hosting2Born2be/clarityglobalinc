'use client';

import { cn } from '@/shared/lib/styles';

import st from './text.module.css';

export function Text({
  children,
  weight = 300,
  size = 'base',
  color = 'black',
  className,
}: {
  children: React.ReactNode;
  weight?: 300 | 400 | 500 | 600 | 700;
  color?: 'black' | 'white' | 'red';
  size?: 'sm' | 'base';
  className?: string;
}) {
  const titleClasses = cn(st.text, {
    [st.weightLight]: weight === 300,
    [st.weightNormal]: weight === 400,
    [st.weightMedium]: weight === 500,
    [st.weightSemibold]: weight === 600,
    [st.weightBold]: weight === 700,
    [st.colorBlack]: color === 'black',
    [st.colorWhite]: color === 'white',
    [st.colorRed]: color === 'red',
    [st.sizeBase]: size === 'base',
    [st.sizeSmall]: size === 'sm',
  });

  return <p className={cn(titleClasses, className)}>{children}</p>;
}
