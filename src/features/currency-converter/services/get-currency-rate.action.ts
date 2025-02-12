'use server';

import axios from 'axios';

import {
  OPEN_CHANGE_RATE_API_KEY,
  OPEN_CHANGE_RATE_URL,
} from '@/shared/config/env';

import { CurrencyDTO } from '../lib/types';

const calculateFee = ({
  fee,
  amount,
  toCurrency,
  fromCurrency,
}: {
  fromCurrency: string;
  toCurrency: string;
  fee: string;
  amount: number;
}) => {
  if (fromCurrency === 'EUR' && toCurrency === 'EUR') {
    return fee === 'fast' ? amount * 0.003 : amount * 0.005 + 250;
  }
  return fee === 'fast' ? amount * 0.008 : amount * 0.012 + 250;
};

export async function getCurrencyRate({
  fromCurrency,
  fee,
  amount,
  toCurrency,
}: CurrencyDTO) {
  const res = await axios.get(
    `${OPEN_CHANGE_RATE_URL}?app_id=${OPEN_CHANGE_RATE_API_KEY}&base=${fromCurrency}`,
  );

  if (!res.data || !res.data.rates) {
    return { gets: '0', fee: 0, rate: 0, convertedAmount: 0 };
  }

  const calculatedFee = calculateFee({ fromCurrency, toCurrency, fee, amount });
  const gets = amount - calculatedFee;
  const rate = res.data.rates[toCurrency] || 0;
  const convertedAmount = gets * rate;

  return {
    gets: gets.toFixed(2),
    fee: calculatedFee,
    rate,
    convertedAmount,
  };
}
