'use client';

import { ChangeEventHandler, FocusEventHandler } from 'react';

import { cn } from '@/shared/lib/styles';

import st from './textarea.module.css';

export function Textarea({
  value,
  defaultValue,
  placeholder,
  onBlur,
  onChange,
  className,
  error,
  size = 'base',
  fullWidth = false,
  resizable = false,
}: {
  value?: string | string[] | number;
  defaultValue?: string | string[] | number;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  error?: React.ReactNode;
  size?: 'base' | 'sm';
  fullWidth?: boolean;
  resizable?: boolean;
}) {
  const textareaClasses = cn(
    st.textarea,
    {
      [st.sizeBase]: size === 'base',
      [st.sizeSm]: size === 'sm',
      [st.fullWidth]: fullWidth,
      [st.resizable]: resizable,
      [st.errorIntent]: error,
    },
    className,
  );

  return (
    <textarea
      className={textareaClasses}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
}
