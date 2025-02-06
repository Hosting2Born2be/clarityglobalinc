'use client';

import { FormEventHandler } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './button.module.css';

export function Button({
  children,
  onSubmit,
  onClick,
  size,
  className,
  variant = 'transparent',
  fullWidth = false,
  type = 'button',
}: {
  children: React.ReactNode;
  variant?: 'white' | 'transparent' | 'orange' | 'orangeOutline';
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  onClick?: () => void;
  className?: string;
  size?: 'md';
}) {
  const btnClasses = cn(
    st.button,
    {
      [st.whiteButton]: variant === 'white',
      [st.transparentButton]: variant === 'transparent',
      [st.orangeButton]: variant === 'orange',
      [st.orangeOutlineButton]: variant === 'orangeOutline',
      [st.fullWidth]: fullWidth,
      [st.mediumSize]: size === 'md',
    },
    className,
  );

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
