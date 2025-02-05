'use client';

import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';

import { cn } from '@/shared/lib/styles';
import { ArrowDown } from '@/shared/ui/icons';

import st from './compact-accordion.module.css';

export function CompactAccordion({
  trigger,
  content,
  className,
  contentAlign = 'left',
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentAlign?: 'left' | 'right';
}) {
  const contentClasses = cn(st.contentAlign, {
    [st.contentAlignLeft]: contentAlign === 'left',
    [st.contentAlignRight]: contentAlign === 'right',
  });

  return (
    <Root
      className={cn(st.root, className)}
      type="single"
      defaultValue="item-0"
      collapsible
    >
      <Item className={st.item} value="item-1">
        <Header className={st.header}>
          <Trigger className={st.trigger}>{trigger}</Trigger>
          <ArrowDown />
        </Header>
        <Content className={st.content}>
          <div className={contentClasses}>{content}</div>
        </Content>
      </Item>
    </Root>
  );
}
