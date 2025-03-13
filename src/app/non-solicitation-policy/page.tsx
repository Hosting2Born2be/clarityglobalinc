import { Fragment } from 'react';

import { parseJSONToElements } from '@/widgets/common/lib/payload';

import { PolicyLayout, PolicyUpdate } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services/get-policy';

import { nanoid } from '@/shared/lib/id';
import { Title } from '@/shared/ui/kit/title';

import st from './page.module.css';

export default async function NonSolicitationPolicy() {
  const res = await getPolicy({ id: '6' });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );

  return (
    <PolicyLayout>
      <PolicyUpdate
        version={lastUpdate?.version ?? ''}
        update={lastUpdate?.lastUpdate ?? ''}
      />
      <Title level={4} weight={700} className={st.title}>
        Non Solicitation Policy
      </Title>
      {elements.map(el => (
        <Fragment key={nanoid()}>{el}</Fragment>
      ))}
    </PolicyLayout>
  );
}
