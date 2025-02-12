'use client';

import { ChangeEvent } from 'react';
import ReactPhoneInput, { CountryData } from 'react-phone-input-2';

import { Text } from '@/shared/ui/kit/text';

import 'react-phone-input-2/lib/high-res.css';
import './phone-input-reset.css';
import st from './phone-input.module.css';

export function PhoneInput({
  countryCode,
  placeholder,
  onChange,
  error,
}: {
  countryCode: string;
  placeholder?: string;
  error?: React.ReactNode;
  onChange?: (
    value: string,
    data: object | CountryData,
    event: ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => void;
}) {
  return (
    <span style={{ position: 'relative', width: '100%', marginBottom: '4px' }}>
      <ReactPhoneInput
        country={countryCode}
        placeholder={placeholder}
        containerClass={st.container}
        inputClass={st.inputEl}
        buttonClass={st.button}
        onChange={onChange}
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
