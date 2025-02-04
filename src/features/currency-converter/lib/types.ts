export type CurrencyResult = {
  fee: number;
  convertedAmount: number;
  rate: number;
  gets: string;
};

export type CurrencyDTO = {
  amount: number;
  toCurrency: string;
  fromCurrency: string;
  fee: string;
};
