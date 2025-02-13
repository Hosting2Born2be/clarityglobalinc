'use client';

import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import { restrictedBusinesses, restrictedBusinessesColumns } from './data';
import st from './restricted-businesses.module.css';

export function RestrictedBusinesses() {
  return (
    <section className={st.layout}>
      <Text size="base" weight={500}>
        Clarity Global will apply Enhanced Due Diligence to clients operating in
        the following businesses:
      </Text>
      <Table
        data={restrictedBusinesses}
        columns={restrictedBusinessesColumns}
      />
    </section>
  );
}
