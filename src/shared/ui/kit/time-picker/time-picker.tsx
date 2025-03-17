'use client';

import { FocusEventHandler } from 'react';
import TPicker from 'react-time-picker';

import { cn } from '@/shared/lib/styles';

import 'react-time-picker/dist/TimePicker.css';
import './reset.css';
import st from './time-picker.module.css';

export function TimePicker({
  value,
  className,
  onChange,
  onBlur,
  error,
  readonly = false,
  fullWidth = true,
  size = 'base',
}: {
  value?: string | Date;
  className?: string;
  onChange?: (value: string | Date | null) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  fullWidth?: boolean;
  readonly?: boolean;
  error?: React.ReactNode;
  size?: 'base' | 'sm';
}) {
  const inputClasses = cn(st.inputEl, {
    [st.widthFull]: fullWidth,
    [st.widthMax]: !fullWidth,
    [st.inputBorderError]: error,
    [st.inputBorderDefault]: !error,
    [st.sizeBase]: size === 'base',
    [st.sizeSm]: size === 'sm',
  });

  return (
    <span
      style={{
        position: 'relative',
        marginBottom: '4px',
      }}
    >
      <TPicker
        className={cn(st.inputContainer, st.time, inputClasses, className)}
        value={value}
        hourPlaceholder="hh"
        minutePlaceholder="mm"
        onChange={onChange}
        onBlur={onBlur}
        disableClock={true}
        clearIcon={null}
        clockIcon={null}
        format="HH:mm"
        disabled={readonly}
      />
    </span>
  );
}
