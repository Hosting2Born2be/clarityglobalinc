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
import { Divider } from '@/shared/ui/kit/divider';

import st from './wide-accordion.module.css';

export function WideAccordion({
  trigger,
  content,
  className,
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}) {
  return (
    <Root
      className={cn(st.root, className)}
      type="single"
      defaultValue="item-0"
      collapsible
    >
      <Item className={st.item} value="item-1">
        <Header>
          <Trigger className={st.header}>
            <span className={st.trigger}>{trigger}</span>
            <Divider />
            <div className={st.triggerIcon}>
              <ArrowDown height="14" width="14" color="#FFFFFF" />
            </div>
          </Trigger>
        </Header>
        <Content className={st.content}>{content}</Content>
      </Item>
    </Root>
  );
}
