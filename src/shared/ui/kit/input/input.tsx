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
}: {
  value?: string | string[] | number;
  defaultValue?: string | string[] | number;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  fullWidth?: boolean;
  readonly?: boolean;
  type?: 'text' | 'number' | 'password';
  error?: React.ReactNode;
}) {
  const inputClasses = cn(st.inputEl, {
    [st.widthFull]: fullWidth,
    [st.widthMax]: !fullWidth,
    [st.inputBorderError]: error,
    [st.inputBorderDefault]: !error,
  });

  return (
    <span style={{ position: 'relative', width: '100%', marginBottom: '4px' }}>
      <input
        id="input-container"
        placeholder={placeholder}
        className={cn(st.inputContainer, inputClasses, className)}
        value={value}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readonly}
      />
      <div style={{ position: 'absolute', left: 16 }}>
        {error && (
          <Text color="red" size="sm" weight={500}>
            {error}
          </Text>
        )}
      </div>
    </span>
  );
}
