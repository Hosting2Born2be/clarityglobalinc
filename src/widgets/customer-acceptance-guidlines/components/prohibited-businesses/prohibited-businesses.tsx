'use client';

import { Fragment } from 'react';

import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import { prohibitedBusinesses, prohibitedBusinessesColumns } from './data';
import st from './prohibited-businesses.module.css';

const info = [
  'This section provides industries which Clarity Global would not accept for onboarding according to its Risk appetite, Regulation restrictions or other reasons.',
  'The list is not exhaustive - Clarity Global may amend the list according to changed Risk Appetite, updates in regulatory framework or other reasons.',
  'Clarity Global would not accept any business conducting illegal activities, even if it is not in the list below.',
];

export function ProhibitedBusinesses() {
  return (
    <section>
      <div className={st.info}>
        {info.map(text => (
          <Fragment key={text}>
            <div className={st.divider} />
            <Text size="base" weight={500}>
              {text}
            </Text>
          </Fragment>
        ))}
      </div>
      <Table
        data={prohibitedBusinesses}
        columns={prohibitedBusinessesColumns}
      />
    </section>
  );
}
