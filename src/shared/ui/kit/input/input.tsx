'use client';

import { ChangeEventHandler, FocusEventHandler } from 'react';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';

import st from './input.module.css';

export function Input({
  value,
  defaultValue,
  className,
  onChange,
  onBlur,
  placeholder,
  error,
  readonly = false,
  fullWidth = true,
  type = 'text',
  size = 'base',
  hideErrorText = false,
}: {
  value?: string | string[] | number | Date;
  defaultValue?: string | string[] | number;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  fullWidth?: boolean;
  readonly?: boolean;
  type?: 'text' | 'number' | 'password' | 'email' | 'date';
  error?: React.ReactNode;
  size?: 'base' | 'sm';
  hideErrorText?: boolean;
}) {
  const inputClasses = cn(st.inputEl, {
    [st.widthFull]: fullWidth,
    [st.widthMax]: !fullWidth,
    [st.inputBorderError]: error,
    [st.inputBorderDefault]: !error,
    [st.sizeSm]: size === 'sm',
    [st.sizeBase]: size === 'base',
  });

  return (
    <span style={{ position: 'relative', width: '100%', marginBottom: '4px' }}>
      <input
        id="input-container"
        placeholder={placeholder}
        className={cn(st.inputContainer, inputClasses, className)}
        value={String(value)}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readonly}
      />
      <div
        style={{ position: 'absolute', left: 16 }}
        className={cn({ [st.hideErrorText]: hideErrorText })}
      >
        {error && (
          <Text color="red" size="sm" weight={500}>
            {error}
          </Text>
        )}
      </div>
    </span>
  );
}
