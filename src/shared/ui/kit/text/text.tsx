'use client';

import { cn } from '@/shared/lib/styles';

import st from './text.module.css';

export function Text({
  children,
  weight = 300,
  size = 'base',
  color = 'black',
}: {
  children: React.ReactNode;
  weight?: 300;
  color?: 'black' | 'white';
  size?: 'sm' | 'base';
}) {
  const titleClasses = cn(st.text, {
    [st.weightLight]: weight === 300,
    [st.colorBlack]: color === 'black',
    [st.colorWhite]: color === 'white',
    [st.sizeBase]: size === 'base',
    [st.sizeSmall]: size === 'sm',
  });

  return <p className={titleClasses}>{children}</p>;
}
