'use client';

import { Fragment } from 'react';

import {
  groupElementsByH4,
  parseJSONToElements,
} from '@/widgets/common/lib/payload';
import { Node } from '@/widgets/common/lib/types';
import {
  PrivacyContent,
  PrivacyTitle,
} from '@/widgets/privacy-policy/components/index';

import { Accordion } from '@/shared/ui/kit/accordion';
import { Title } from '@/shared/ui/kit/title';

export function PrivacyList({ data }: { data: Node[] }) {
  const elements = parseJSONToElements(data);

  const groupedElements = groupElementsByH4(elements);

  return (
    <>
      <PrivacyTitle />
      <PrivacyContent>
        {groupedElements.map(({ title, content }, index) => (
          <Accordion
            key={title + index}
            mode="wide"
            trigger={
              <Title level={4} weight={600}>
                {title}
              </Title>
            }
            content={
              <section style={{ marginTop: '25px' }}>
                {content.map((item, i) => (
                  <Fragment key={i}>{item}</Fragment>
                ))}
              </section>
            }
          />
        ))}
      </PrivacyContent>
    </>
  );
}
