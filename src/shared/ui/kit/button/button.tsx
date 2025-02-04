'use client';

import { FormEventHandler } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './button.module.css';

export function Button({
  children,
  onSubmit,
  onClick,
  variant = 'transparent',
  fullWidth = false,
  type = 'button',
}: {
  children: React.ReactNode;
  variant?: 'white' | 'transparent' | 'orange';
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  onClick?: () => void;
}) {
  const btnClasses = cn(st.button, {
    [st.whiteButton]: variant === 'white',
    [st.transparentButton]: variant === 'transparent',
    [st.orangeButton]: variant === 'orange',
    [st.fullWidth]: fullWidth,
  });

  return (
    <button
      className={btnClasses}
      onSubmit={onSubmit}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
