'use client';

import ReactPhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

export function PhoneInput({ countryCode }: { countryCode: string }) {
  return (
    <div>
      <ReactPhoneInput
        country={countryCode}
        value="1425652"
        onChange={phone => console.log({ phone })}
      />
    </div>
  );
}
