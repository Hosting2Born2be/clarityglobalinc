import { Fragment } from 'react';
import Link from 'next/link';

import { parseJSONToElements } from '@/widgets/common/lib/payload';

import { PolicyLayout, PolicyUpdate } from '@/features/policies/components';
import { getPolicy } from '@/features/policies/services/get-policy';

import { nanoid } from '@/shared/lib/id';
import { Pdf } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './page.module.css';

export default async function CookiePolicy() {
  const res = await getPolicy({ id: '4' });
  const { elements, lastUpdate } = parseJSONToElements(
    res.content.root.children,
  );

  return (
    <PolicyLayout>
      <PolicyUpdate
        version={lastUpdate?.version ?? ''}
        update={lastUpdate?.lastUpdate ?? ''}
      />
      <section className={st.title}>
        <Title level={4} weight={700} className={st.titleEl}>
          Cookie Policy
        </Title>
        <Link href="/cookie-policy.pdf" target="_blank">
          <Button variant="orangeSecondary" className={st.downloadBtn}>
            Download Cookie Policy in PDF
            <Pdf />
          </Button>
        </Link>
      </section>
      {elements.map(el => (
        <Fragment key={nanoid()}>{el}</Fragment>
      ))}
    </PolicyLayout>
  );
}
