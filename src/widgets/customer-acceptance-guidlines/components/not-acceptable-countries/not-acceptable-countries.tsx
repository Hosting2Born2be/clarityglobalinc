'use client';

import Image from 'next/image';

import { Link } from '@/shared/ui/kit/link';
import { Text } from '@/shared/ui/kit/text';

import st from './not-acceptable-countries.module.css';

export function NotAcceptableCountries() {
  return (
    <section className={st.layout}>
      <div className={st.textSection}>
        <div className={st.divider} />
        <Text size="base" weight={500}>
          Clarity Global does not establish business relations with Companies
          incorporated and/or located or individuals residing in the following
          countries:
        </Text>
      </div>
      <Image
        src="/not-flags.png"
        alt="not-flags"
        className={st.img}
        width={910}
        height={1012}
        priority
      />
      <div className={st.textSection}>
        <div className={st.divider} />
        <Text size="base" weight={500}>
          Clarity Global regularly updates the above list based on the latest
          United Nations Security Council Sanctions (as published at{' '}
          <Link href="https://www.un.org/securitycouncil/content/un-sc-consolidated-list">
            https://www.un.org/securitycouncil/content/un-sc-consolidated-list
          </Link>
          ) and the latest guidelines of the FATF (published at{' '}
          <Link href="http://www.fatfgafi.org/countries/">
            http://www.fatfgafi.org/countries/
          </Link>
          ).
        </Text>
      </div>
    </section>
  );
}
