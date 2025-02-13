'use client';

import { cn } from '@/shared/lib/styles';

import st from './text.module.css';
import { TextColor, TextSize, TextWeight } from './types';

export function Text({
  children,
  weight = 300,
  size = 'lg',
  color = 'black',
  className,
}: {
  children: React.ReactNode;
  weight?: TextWeight;
  color?: TextColor;
  size?: TextSize;
  className?: string;
}) {
  const textClasses = cn(st.text, {
    [st.weightLight]: weight === 300,
    [st.weightNormal]: weight === 400,
    [st.weightMedium]: weight === 500,
    [st.weightSemibold]: weight === 600,
    [st.weightBold]: weight === 700,
    [st.colorBlack]: color === 'black',
    [st.colorGrey]: color === 'grey',
    [st.colorWhite]: color === 'white',
    [st.colorRed]: color === 'red',
    [st.sizeExtaLarge]: size === 'xl',
    [st.sizeLarge]: size === 'lg',
    [st.sizeBase]: size === 'base',
    [st.sizeSmall]: size === 'sm',
    [st.sizeExtraSmall]: size === 'xs',
  });

  return <p className={cn(textClasses, className)}>{children}</p>;
}
