'use client';

import { Text } from '@/shared/ui/kit/text';

import st from './addresses.module.css';

export function RegisteredAddress() {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.358155354012!2d-114.08935142352577!3d51.046474271712206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe712fd6379%3A0x451f48b85bad3e9c!2s1100%208%20Ave%20SW%20Suite%20222%2C%20Calgary%2C%20AB%20T2P%203T8%2C%20Canada!5e0!3m2!1sen!2sua!4v1718702758833!5m2!1sen!2sua"
        width="600"
        height="150"
        style={{ border: 0, width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Text size="xs" className={st.addressLine} weight={600}>
        Registered address: 222-1100 8 Ave SW, Calgary, Alberta, T2P3T8, Canada
      </Text>
    </section>
  );
}
