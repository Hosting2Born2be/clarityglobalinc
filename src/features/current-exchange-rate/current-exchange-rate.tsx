'use client';

import { useEffect, useMemo, useState } from 'react';

import { CurrencyHeader, CurrencyRates, Header } from './components';
import st from './current-exchange-rate.module.css';
import { data } from './data';
import { getExchangeRate } from './services/get-exchange-rate.action';

export function CurrentExchangeRate() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState<Map<string, string>>(
    new Map(),
  );

  const toCurrencies = useMemo(
    () => data.filter(currency => currency.value !== selectedCurrency),
    [selectedCurrency],
  );

  const toCurrenciesMap = useMemo(
    () => toCurrencies.map(currency => currency.value),
    [toCurrencies],
  );

  useEffect(() => {
    getExchangeRate({
      fromCurrency: selectedCurrency,
      toCurrencies: toCurrenciesMap,
    })
      .then(res => {
        if (res) {
          setExchangeRates(res.rates);
        }
      })
      .catch(e => console.error(e));
  }, [selectedCurrency, toCurrenciesMap]);

  return (
    <section className={st.layout}>
      <Header
        selectedCurrency={selectedCurrency}
        onSelect={setSelectedCurrency}
      />
      <section className={st.exchangeRate}>
        <CurrencyHeader />
        <CurrencyRates
          currencies={toCurrencies}
          exchangeRates={exchangeRates}
        />
      </section>
    </section>
  );
}
