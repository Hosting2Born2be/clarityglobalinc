'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';

import st from '../not-acceptable-countries/not-acceptable-countries.module.css';

export function RestrictedCountries() {
  return (
    <section className={st.layout}>
      <div className={st.textSection}>
        <div className={st.divider} />
        <Text size="base" weight={500}>
          Clarity Global will apply an Enhanced Due Diligence to clients
          incorporated, located or having business relations with the following
          countries:
        </Text>
      </div>
      <Image
        src="/res-flags.png"
        alt="res-flags"
        className={st.img}
        width={910}
        height={1012}
        priority
      />
      <div className={st.textSection}>
        <div className={st.divider} />
        <Text size="base" weight={500}>
          The list is not exhaustive - Clarity Global may amend the list
          according to changed Risk Appetite, updates in regulatory framework or
          other reasons
        </Text>
      </div>
    </section>
  );
}
