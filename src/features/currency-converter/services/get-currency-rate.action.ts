'use server';

import axios from 'axios';

import { CurrencyDTO } from '../lib/types';

const OPEN_CHANGE_RATE_URL = 'https://openexchangerates.org/api/latest.json';
const OPEN_CHANGE_RATE_API_KEY = '3b95e8fae18343a6b4d8ba6354fc77de';

export async function getCurrencyRate({
  fromCurrency,
  fee,
  amount,
  toCurrency,
}: CurrencyDTO) {
  const res = await axios.get(
    `${OPEN_CHANGE_RATE_URL}?app_id=${OPEN_CHANGE_RATE_API_KEY}&base=${fromCurrency}`,
  );
  console.log('@res.data', res.data);

  if (res.data) {
    let feeRes = 0;
    if (fromCurrency == 'EUR' && toCurrency == 'EUR') {
      if (fee == 'fast') {
        feeRes = amount * 0.003;
      } else {
        feeRes = amount * 0.005 + 250;
      }
    } else {
      if (fee == 'fast') {
        feeRes = amount * 0.008;
      } else {
        feeRes = amount * 0.012 + 250;
      }
    }

    const totalFrom = amount - feeRes;
    const feeResult = feeRes;
    const totalFromRes = totalFrom.toFixed(2);
    let conversionRateRes = 0;
    let convertedAmountRes = 0;

    if (res.data.rates) {
      const rates = res.data.rates;
      if (toCurrency in rates) {
        conversionRateRes = rates[toCurrency];
        convertedAmountRes = (amount - feeRes) * conversionRateRes;
      }
    }

    return {
      gets: totalFromRes,
      fee: feeResult,
      rate: conversionRateRes,
      convertedAmount: convertedAmountRes,
    };
  }
}
