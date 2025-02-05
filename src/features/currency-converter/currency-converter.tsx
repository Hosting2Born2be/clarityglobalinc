'use client';

import { useEffect, useRef } from 'react';

import { useForm, zodResolver } from '@/shared/lib/forms';
import { isEqual } from '@/shared/lib/objects';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { AmountCurrency } from './components/amount-currency';
import { ResultCurrency } from './components/result-currency';
import { TransferInfo } from './components/transfer-info';
import st from './currency-converter.module.css';
import {
  CurrencyConverterSchema,
  currencyConverterSchema,
} from './schema/currency-converter-schema';
import { useCurrencyConverterStore } from './services/currency-converter.store';
import { getCurrencyRate } from './services/get-currency-rate.action';

export function CurrencyConverter() {
  const { updateData } = useCurrencyConverterStore();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<CurrencyConverterSchema>({
    resolver: zodResolver(currencyConverterSchema),
    defaultValues: {
      fee: 'fast',
      fromCurrency: 'EUR',
      toCurrency: 'EUR',
    },
  });

  const onSubmit = handleSubmit(async (data: CurrencyConverterSchema) => {
    setTimeout(async () => {
      const res = await getCurrencyRate({
        toCurrency: data.toCurrency,
        fromCurrency: data.fromCurrency,
        fee: data.fee,
        amount: data.amount,
      });
      if (res) {
        updateData({
          rate: res.rate,
          fee: res.fee,
          gets: res.gets,
          convertedAmount: res.convertedAmount,
        });
      }
    }, 500);
  });

  const watchedValues = watch();
  const prevWatchedValues = useRef(watchedValues);

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      !isEqual(watchedValues, prevWatchedValues.current)
    ) {
      void onSubmit();
      prevWatchedValues.current = watchedValues;
    }
  }, [watchedValues, errors, onSubmit]);

  return (
    <form className={st.currencyConverterContainer}>
      <AmountCurrency control={control} error={errors.amount?.message} />
      <TransferInfo control={control} />
      <Title level={5}>Recipient gets</Title>
      <ResultCurrency control={control} />
      <Text size="sm" className={st.arriveHint}>
        Should arrive in 1-3 business days.
      </Text>
      <Button variant="orange" type="button" fullWidth>
        Sign Up
      </Button>
    </form>
  );
}
