'use client';

import { FocusEventHandler } from 'react';
import TPicker from 'react-time-picker';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';

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
}: {
  value?: string | Date;
  className?: string;
  onChange?: (value: string | Date | null) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  fullWidth?: boolean;
  readonly?: boolean;
  error?: React.ReactNode;
}) {
  const inputClasses = cn(st.inputEl, {
    [st.widthFull]: fullWidth,
    [st.widthMax]: !fullWidth,
    [st.inputBorderError]: error,
    [st.inputBorderDefault]: !error,
  });

  return (
    <span
      style={{
        position: 'relative',
        width: '100%',
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
