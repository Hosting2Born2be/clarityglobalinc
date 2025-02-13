'use client';

import { useState } from 'react';

import { useWindowSize } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/styles';
import { DoubleArrow } from '@/shared/ui/icons';
import { Divider } from '@/shared/ui/kit/divider';
import { Title } from '@/shared/ui/kit/title';

import st from './guidelines.module.css';
import { SelectedGuideline } from './selected-guideline';

const guidelines = [
  'Prohibited Businesses',
  'Restricted Businesses',
  'Not Acceptable Countries',
  'Restricted Countries',
];

export function Guidelines() {
  const [selectedGuideline, setSelectedGuideline] = useState<string>('');
  const { width } = useWindowSize();

  const onSelect = (guideline: string) => {
    setSelectedGuideline(guideline === selectedGuideline ? '' : guideline);
  };

  return (
    <section className={st.layout}>
      <Title level={2} weight={600}>
        Customer Acceptance guidelines
      </Title>
      <Divider />
      {width <= 768 ? <SelectedGuideline value="" /> : null}
      <section className={st.guidelineLayout}>
        <section className={st.guidelineTabs}>
          {guidelines.map(title => (
            <GuidelineCard
              key={title}
              title={title}
              onSelect={onSelect}
              selected={selectedGuideline}
              windowWidth={width}
            />
          ))}
        </section>
        {width > 768 ? <SelectedGuideline value={selectedGuideline} /> : null}
      </section>
    </section>
  );
}

function GuidelineCard({
  title,
  selected,
  onSelect,
  windowWidth,
}: {
  title: string;
  selected: string;
  onSelect: (guideline: string) => void;
  windowWidth: number;
}) {
  return (
    <div className={st.guidelineCardLayout}>
      <button
        className={cn(st.guidelineCard, {
          [st.selectedTabBg]: selected === title,
        })}
        onClick={() => onSelect(title)}
        role="tab"
        aria-selected={selected === title}
      >
        <Title
          level={5}
          weight={600}
          color={selected === title ? 'orange' : 'black'}
        >
          {title}
        </Title>
        {windowWidth <= 768 ? (
          <span className={st.doubleArrow}>
            <DoubleArrow />
          </span>
        ) : null}
      </button>
      <div className={st.guidelineInfo}>
        {windowWidth <= 768 && selected === title ? (
          <SelectedGuideline value={title} />
        ) : null}
      </div>
    </div>
  );
}
