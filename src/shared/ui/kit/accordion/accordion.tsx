'use client';

import { CompactAccordion } from './compact-accordion';
import { WideAccordion } from './wide-accordion';

export function Accordion({
  trigger,
  content,
  className,
  contentAlign = 'left',
  mode = 'compact',
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
  mode?: 'compact' | 'wide';
  className?: string;
  contentAlign?: 'left' | 'right';
}) {
  return mode === 'compact' ? (
    <CompactAccordion
      trigger={trigger}
      content={content}
      className={className}
      contentAlign={contentAlign}
    />
  ) : (
    <WideAccordion trigger={trigger} content={content} className={className} />
  );
}
