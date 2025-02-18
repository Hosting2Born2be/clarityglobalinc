import { create } from 'zustand/index';

export const useExchangeRateStore = create<{
  fee: number;
  // updateData: (args: CurrencyResult) => void;
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
