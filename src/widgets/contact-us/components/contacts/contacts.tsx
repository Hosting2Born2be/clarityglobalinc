'use client';

import { Title } from '@/shared/ui/kit/title';

import { OperationalAddress, RegisteredAddress } from '../addresses';
import { ContactLinks } from '../contact-links';
import { HelpBanner } from '../help-banner';
import st from './contacts.module.css';

export function Contacts() {
  return (
    <section className={st.layout}>
      <Title level={0}>We are here to help you 12/5.</Title>
      <section className={st.contacts}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          <ContactLinks />
          <RegisteredAddress />
          <OperationalAddress />
        </div>
        <div style={{ width: '100%' }}>
          <HelpBanner />
        </div>
      </section>
    </section>
  );
}
