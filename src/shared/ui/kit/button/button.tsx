'use client';

import { cn } from '@/shared/lib/styles';

import st from './button.module.css';

export function Button({
  children,
  variant = 'transparent',
  fullWidth = false,
}: {
  children: React.ReactNode;
  variant?: 'white' | 'transparent' | 'orange';
  fullWidth?: boolean;
}) {
  const btnClasses = cn(st.button, {
    [st.whiteButton]: variant === 'white',
    [st.transparentButton]: variant === 'transparent',
    [st.orangeButton]: variant === 'orange',
    [st.fullWidth]: fullWidth,
  });

  return <button className={btnClasses}>{children}</button>;
}
