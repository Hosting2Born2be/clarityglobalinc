'use client';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/styles';
import { ArrowDown } from '@/shared/ui/icons';

import st from './select.module.css';
import { SelectOption } from './types';

export function Select({
  options,
  value,
  onChange,
  triggerClassName,
  textSize = 'base',
}: {
  options: SelectOption[];
  value: string;
  onChange?: (value: string) => void;
  textSize?: string;
  triggerClassName?: string;
}) {
  const triggerClasses = cn(
    st.selectTrigger,
    {
      [st.sizeBase]: textSize === 'base',
      [st.sizeSm]: textSize === 'sm',
    },
    triggerClassName,
  );

  return (
    <Root>
      <DropdownMenuTrigger className={triggerClasses}>
        {options.find(item => item.value === value)?.label}
        <ArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className={st.selectContent} sideOffset={5}>
          {options.map(option => (
            <DropdownMenuItem
              key={option.value}
              className={st.selectItem}
              onClick={() => onChange?.(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
}
