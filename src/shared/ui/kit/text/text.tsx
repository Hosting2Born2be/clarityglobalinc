'use client';

import { cn } from '@/shared/lib/styles';

import st from './text.module.css';

export function Text({
  children,
  weight = 300,
  size = 'lg',
  color = 'black',
  className,
}: {
  children: React.ReactNode;
  weight?: 300 | 400 | 500 | 600 | 700;
  color?: 'black' | 'white' | 'red';
  size?: 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
}) {
  const textClasses = cn(st.text, {
    [st.weightLight]: weight === 300,
    [st.weightNormal]: weight === 400,
    [st.weightMedium]: weight === 500,
    [st.weightSemibold]: weight === 600,
    [st.weightBold]: weight === 700,
    [st.colorBlack]: color === 'black',
    [st.colorWhite]: color === 'white',
    [st.colorRed]: color === 'red',
    [st.sizeExtaLarge]: size === 'xl',
    [st.sizeLarge]: size === 'lg',
    [st.sizeBase]: size === 'base',
    [st.sizeSmall]: size === 'sm',
  });

  return <p className={cn(textClasses, className)}>{children}</p>;
}
