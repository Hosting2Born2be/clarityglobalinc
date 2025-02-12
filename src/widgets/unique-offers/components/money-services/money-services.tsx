'use client';

import {
  aggregated,
  dedicated,
} from '@/widgets/unique-offers/components/money-services/data';

import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './money-services.module.css';

export function MoneyServices() {
  return (
    <section className={st.layout}>
      <Title level={2}>Need in Money Remittance services</Title>
      <section className={st.listLayout}>
        <div>
          <Tag variant="success" size="base" className={st.label}>
            Dedicated account
          </Tag>
          <div className={st.list}>
            {dedicated.map(({ title, list }) => (
              <Service key={title} title={title} list={list} />
            ))}
          </div>
        </div>
        <div>
          <Tag variant="success" size="base" className={st.label}>
            Aggregated account
          </Tag>
          <div className={st.list}>
            {aggregated.map(({ title }) => (
              <Service key={title} title={title} list={[]} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function Service({ title, list }: { title: string; list?: string[] }) {
  return (
    <article className={st.listItem}>
      <GreenDivider />
      <Text size="base" className={st.textList} weight={400}>
        {title}
      </Text>
      {list?.length ? (
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
              <Text size="base" weight={400}>
                {item}
              </Text>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function GreenDivider() {
  return <div className={st.greenDivider} />;
}
