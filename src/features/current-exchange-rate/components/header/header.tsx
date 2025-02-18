'use client';

import { Select } from '@/shared/ui/kit/select';
import { Title } from '@/shared/ui/kit/title';

import { data } from '../../data';
import st from './header.module.css';

export function Header({
  selectedCurrency,
  onSelect,
}: {
  selectedCurrency: string;
  onSelect: (currency: string) => void;
}) {
  return (
    <header className={st.header}>
      <Title level={5}>Current exchange rate</Title>
      <Select options={data} value={selectedCurrency} onChange={onSelect} />
    </header>
  );
}
