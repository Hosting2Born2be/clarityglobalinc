'use client';

import { Text } from '@/shared/ui/kit/text';

import st from './addresses.module.css';

export function OperationalAddress() {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2808820151154!2d-79.40520992423457!3d43.725491547752846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b32dd61af3829%3A0x701eedbfbda5dd2d!2s3080%20Yonge%20St%2C%20Toronto%2C%20ON%20M4N%203N1%2C%20Canada!5e0!3m2!1sen!2sua!4v1698411877206!5m2!1sen!2sua"
        width="600"
        height="150"
        style={{ border: 0, width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Text size="xs" className={st.addressLine} weight={600}>
        Operational address: 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N
        3N, Canada
      </Text>
    </section>
  );
}
