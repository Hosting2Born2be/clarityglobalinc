'use client';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import { CurrencyExchange } from '../../types';
import st from './currency-rates.module.css';

export function CurrencyRates({
  currencies,
  exchangeRates,
}: {
  currencies: CurrencyExchange[];
  exchangeRates: Map<string, string>;
}) {
  return (
    <div>
      {currencies.map(({ value, label, Icon }, i) => (
        <div key={value}>
          <div className={st.currencyLayout}>
            <div className={st.currencyName}>
              <Icon />
              <Text size="sm" weight={500}>
                {label}
              </Text>
            </div>
            <Text size="sm" weight={500}>
              {exchangeRates.get(value)}
            </Text>
          </div>
          {i < currencies.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}
