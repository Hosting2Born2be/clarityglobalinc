'use client';

import { ChangeEventHandler, FocusEventHandler } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './input.module.css';

export function Input({
  value,
  defaultValue,
  className,
  onChange,
  onBlur,
  fullWidth = true,
}: {
  value?: string | string[] | number;
  defaultValue?: string | string[] | number;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  fullWidth?: boolean;
}) {
  const inputClasses = cn(st.inputEl, {
    [st.widthFull]: fullWidth,
    [st.widthMax]: !fullWidth,
  });

  return (
    <input
      id="input-container"
      className={cn(inputClasses, st.inputContainer, className)}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
