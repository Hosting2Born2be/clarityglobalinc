'use client';

import { Indicator, Item, Root } from '@radix-ui/react-radio-group';

import { cn } from '@/shared/lib/styles';

import st from './radio-group.module.css';
import { RadioOption } from './types';

export function RadioGroup({
  options,
  defaultValue,
  onChange,
  align = 'left',
}: {
  options: RadioOption[];
  defaultValue?: string;
  align?: 'left' | 'right';
  onChange?: (value: string) => void;
}) {
  const rootClasses = cn(st.root, {
    [st.rootLeft]: align === 'left',
    [st.rootRight]: align === 'right',
  });

  return (
    <Root
      className={rootClasses}
      defaultValue={defaultValue}
      aria-label="radio"
    >
      {options.map(option => (
        <div
          key={option.value}
          className={st.content}
          onClick={() => onChange?.(option.value)}
        >
          <label className={st.label} htmlFor={option.value}>
            {option.label}
          </label>
          <Item className={st.item} value={option.value} id={option.value}>
            <Indicator className={st.indicator} />
          </Item>
        </div>
      ))}
    </Root>
  );
}
