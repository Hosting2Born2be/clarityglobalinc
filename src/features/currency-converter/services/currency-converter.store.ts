import { create } from 'zustand';

import { CurrencyResult } from '../lib/types';

export const useCurrencyConverterStore = create<{
  fee: number;
  convertedAmount: number;
  rate: number;
  gets: string;
  updateData: (args: CurrencyResult) => void;
}>(set => ({
  fee: 0,
  gets: '0',
  convertedAmount: 0,
  rate: 0,
  updateData: (args: {
    fee: number;
    convertedAmount: number;
    rate: number;
    gets: string;
  }) => set(args),
}));
