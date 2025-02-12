'use client';

import { useCountryCode } from '@/shared/lib/hooks';
import { PhoneInput } from '@/shared/ui/kit/phone-input';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-form.module.css';

export function ContactForm() {
  const countryCode = useCountryCode();

  return (
    <section className={st.layout}>
      <Title level={3} weight={700}>
        Did not find the answer?
      </Title>
      <Text weight={500} size="base">
        Ask the Clarity Global team!
      </Text>
      <PhoneInput countryCode={countryCode} />
    </section>
  );
}
