'use client';

import { Divider } from '@/shared/ui/kit/divider';
import { Dot } from '@/shared/ui/kit/dot';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './can-cover.module.css';

const steps = [
  {
    title:
      'If you are willing to diversify your solutions and services and manage your money allocation risks - or to spread your payment directions and types within different financial institutions.',
  },
  {
    title:
      'If it’s essential for you to have a partner who treats and keep your account and business as his own, answers your calls and requests six days a week, and fills your account with new services, solutions and opportunities within a lifetime.',
  },
  {
    title:
      'If you need a banking partner, you can communicate in your preferred way - by Whatsapp, Telegram, Skype, Email or Phone - we’re here for you.',
  },
  {
    title:
      'If you need a banking solution that processes your transactions each business day.',
  },
  {
    title:
      'If you need a banking partner, not a solution, who can provide you with a Tailor made pricing schedule integrated into your business financial model.',
  },
  {
    title:
      'If your business-sphere is Service companies, Affiliation, or Marketing, and you want to work with expert people in these spheres.',
  },
  {
    title: 'If your business is going to scale to such markets as:',
    list: ['Africa', 'North America', 'GCC', 'Europe', 'South Asia'],
  },
];

export function CanCover() {
  return (
    <section className={st.layout}>
      <section className={st.title}>
        <Title level={2} className={st.titleEl}>
          Client’s needs we can cover:
        </Title>
        <Divider className={st.divider} />
        <Title level={2} color="orange">
          02
        </Title>
      </section>
      <Tag size="base">Overall needs</Tag>
      <section className={st.steps}>
        <div className={st.stepContainer}>
          {steps.slice(0, 4).map(({ title, list }) => (
            <CoverStep key={title} title={title} list={list} />
          ))}
        </div>
        <div className={st.stepContainer}>
          {steps.slice(4).map(({ title, list }) => (
            <CoverStep key={title} title={title} list={list} />
          ))}
        </div>
      </section>
    </section>
  );
}

function CoverStep({ title, list }: { title: string; list?: string[] }) {
  return (
    <article className={st.step}>
      <Dot width={20} height={20} />
      <section>
        <Text size="lg">{title}</Text>
        <ul
          style={{
            listStyleType: 'disc',
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {list?.map(item => (
            <li
              key={item}
              style={{ listStyleType: 'disc', marginLeft: '20px' }}
            >
              <Text size="lg">{item}</Text>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
