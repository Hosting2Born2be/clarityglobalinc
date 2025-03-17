'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './complaint-annotation.module.css';

export function ComplaintAnnotation() {
  return (
    <section className={st.layout}>
      <Title weight={600} className={st.title}>
        Anonymous
        <br /> complaint form
      </Title>
      <span className={st.divider} />
      <div>
        <Text size="base" weight={400}>
          Here you can leave an anonymous complaint if you face unethical,
          illegal, or otherwise inappropriate activities within the service,
          including fraud, embezzlement, discrimination, or harassment as an
          employee, partner, or customer of Clarity Global.
        </Text>
        <Text size="base" weight={400} className={st.italic}>
          Please fill out the form and provide the details of the case. We will
          thoroughly investigate it and take appropriate measures.
        </Text>
      </div>
    </section>
  );
}
