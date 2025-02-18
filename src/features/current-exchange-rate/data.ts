import { CurrencyExchange } from '@/features/current-exchange-rate/types';

import {
  OrangeAed,
  OrangeCny,
  OrangeEur,
  OrangeGbp,
  OrangeIls,
  OrangeUsd,
} from '@/shared/ui/icons';

export const data: CurrencyExchange[] = [
  { value: 'USD', label: 'USD', Icon: OrangeUsd },
  { value: 'GBP', label: 'GBP', Icon: OrangeGbp },
  { value: 'EUR', label: 'EUR', Icon: OrangeEur },
  { value: 'CNY', label: 'CNY', Icon: OrangeCny },
  { value: 'SGD', label: 'SGD', Icon: OrangeUsd },
  { value: 'AUD', label: 'AUD', Icon: OrangeUsd },
  { value: 'AED', label: 'AED', Icon: OrangeAed },
  { value: 'ILS', label: 'ILS', Icon: OrangeIls },
  { value: 'BTC', label: 'BTC', Icon: OrangeUsd },
];
