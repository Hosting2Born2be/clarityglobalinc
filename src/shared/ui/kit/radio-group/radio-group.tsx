'use client';

import { Indicator, Item, Root } from '@radix-ui/react-radio-group';

import { cn } from '@/shared/lib/styles';

import st from './radio-group.module.css';
import { RadioOption } from './types';

export function RadioGroup({
  options,
  defaultValue,
  onChange,
  className,
  itemClassName,
  align = 'left',
  indicatorSize = 'sm',
  reverseOrder = false,
}: {
  options: RadioOption[];
  defaultValue?: string;
  align?: 'left' | 'right';
  onChange?: (value: string) => void;
  reverseOrder?: boolean;
  className?: string;
  itemClassName?: string;
  indicatorSize?: 'sm' | 'md';
}) {
  const rootClasses = cn(
    st.root,
    {
      [st.rootLeft]: align === 'left',
      [st.rootRight]: align === 'right',
    },
    className,
  );
  const indicatorClasses = cn(st.indicator, {
    [st.indicatorSizeSm]: indicatorSize === 'sm',
    [st.indicatorSizeMd]: indicatorSize === 'md',
  });
  const itemClasses = cn(st.item, {
    [st.itemSizeSm]: indicatorSize === 'sm',
    [st.itemSizeMd]: indicatorSize === 'md',
  });

  return (
    <Root
      className={rootClasses}
      defaultValue={defaultValue}
      aria-label="radio"
      onValueChange={onChange}
    >
      {options.map(option => (
        <div
          key={option.value}
          className={cn(
            st.content,
            {
              [st.reversOrder]: reverseOrder,
            },
            itemClassName,
          )}
        >
          <label className={st.label} htmlFor={option.value}>
            {option.label}
          </label>
          <Item className={itemClasses} value={option.value} id={option.value}>
            <Indicator className={indicatorClasses} />
          </Item>
        </div>
      ))}
    </Root>
  );
}
