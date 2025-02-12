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
}: {
  value?: string | string[] | number;
  defaultValue?: string | string[] | number;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  error?: React.ReactNode;
}) {
  return (
    <textarea
      className={cn(st.textarea, className)}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
}
