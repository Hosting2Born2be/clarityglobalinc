'use client';

import { Control, Controller } from '@/shared/lib/forms';
import { cn } from '@/shared/lib/styles';
import { EqualIcon, MinusIcon, MultiplyIcon } from '@/shared/ui/icons';
import { Accordion } from '@/shared/ui/kit/accordion';
import { Divider } from '@/shared/ui/kit/divider';
import { RadioGroup } from '@/shared/ui/kit/radio-group';
import { Text } from '@/shared/ui/kit/text';

import { CurrencyDTO } from '../../lib/types';
import { useCurrencyConverterStore } from '../../services/currency-converter.store';
import st from './transfer-info.module.css';

export function TransferInfo({ control }: { control?: Control<CurrencyDTO> }) {
  const { fee, convertedAmount, rate } = useCurrencyConverterStore();

  return (
    <div className={st.additionalFieldsLayout}>
      <div className={cn(st.additionalField, st.additionalFieldWithAccordion)}>
        <div className={st.fieldWithIcon}>
          <div className={st.icon}>
            <MinusIcon />
          </div>
          <Text weight={600} size="sm">
            {fee}
          </Text>
        </div>
        <div style={{ width: '100%', paddingBottom: '2px' }}>
          <Divider />
        </div>
        <div className={st.accordionWrapper}>
          <Accordion
            trigger={
              <Text weight={600} size="sm">
                Fast transfer fee
              </Text>
            }
            content={
              <div style={{ marginTop: '10px' }}>
                <Controller
                  name="fee"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      options={[
                        { value: 'fast', label: 'Fast transfer fee' },
                        { value: 'express', label: 'Express transfer fee' },
                      ]}
                      defaultValue="fast"
                      onChange={field.onChange}
                      align="left"
                    />
                  )}
                />
              </div>
            }
            contentAlign="right"
          />
        </div>
      </div>
      <div className={st.additionalField}>
        <div className={st.fieldWithIcon}>
          <div className={st.icon}>
            <EqualIcon />
          </div>
          <Text weight={600} size="sm">
            {convertedAmount}
          </Text>
        </div>
        <Divider />
        <Text weight={600} size="sm">
          Total amount we’ll convert
        </Text>
      </div>
      <div className={st.additionalField}>
        <div className={st.fieldWithIcon}>
          <div className={st.icon}>
            <MultiplyIcon />
          </div>
          <Text weight={600} size="sm">
            {rate}
          </Text>
        </div>
        <Divider />
        <Text weight={600} size="sm">
          Guaranteed rate (50h)
        </Text>
      </div>
    </div>
  );
}
