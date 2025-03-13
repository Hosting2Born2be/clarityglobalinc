'use server';

import axios from 'axios';

const coinMarketCapApiKey = '43a6bb93-a08f-4841-b617-a60400e4ab57';

export async function getExchangeRate({
  fromCurrency,
  toCurrencies,
}: {
  fromCurrency: string;
  toCurrencies: string[];
}) {
  try {
    const res = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/tools/price-conversion',
      {
        params: {
          amount: 1,
          symbol: fromCurrency,
          convert: toCurrencies.join(','),
        },
        headers: {
          'X-CMC_PRO_API_KEY': coinMarketCapApiKey,
          Accept: 'application/json',
        },
      },
    );

    const rates = new Map<string, string>();
    let error: string | null = null;

    for (const toCurrency of toCurrencies) {
      let price: number = res.data.data.quote[toCurrency]?.price;

      if (price) {
        if (toCurrency === 'BTC') {
          price *= 1 - 0.029;
          price *= 10000;
        } else if (toCurrency === 'EUR' && fromCurrency === 'USD') {
          price *= 1 - 0.002;
        } else if (toCurrency === 'USD' && fromCurrency === 'EUR') {
          price *= 1 - 0.01;
        } else {
          price *= 1 - 0.029;
        }

        rates.set(toCurrency, price.toFixed(6));
      } else {
        error = `Rate not available for ${fromCurrency} to ${toCurrency}`;
      }
    }

    return { rates, error };
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return { rates: new Map(), error: 'Failed to fetch exchange rates' };
  }
}
