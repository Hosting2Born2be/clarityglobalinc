'use client';

import { OrangeMessage } from '@/shared/ui/icons';
import { Link } from '@/shared/ui/kit/link';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './feedback-hint.module.css';

export function FeedbackHint() {
  return (
    <section className={st.layout}>
      <OrangeMessage />
      <div>
        <Title level={5}>
          If you have any complaint or feedback, we are here to listen and
          address them promptly.
        </Title>
        <Text size="base">
          Please feel free to contact our dedicated Complaint Handling Officer
          at{' '}
          <Link href="mailto:dispute@clarityglobalinc.com">
            dispute@clarityglobalinc.com
          </Link>
          .
        </Text>
      </div>
    </section>
  );
}
