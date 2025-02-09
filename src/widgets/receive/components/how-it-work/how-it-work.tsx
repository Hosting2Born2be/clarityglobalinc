import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-it-work.module.css';

export function HowItWork() {
  return (
    <section className={st.layout}>
      <Tag>HOW DOES IT WORK?</Tag>
      <div className={st.infoLayout}>
        <Title level={1} weight={600}>
          Registering with Clarity Global Inc couldn’t be simpler.
        </Title>
        <Text className={st.textSize}>
          Our service is comprised of favourable exchange rates and fantastic
          customer service. Every transfer is important to us, and we want to
          build lasting relationships with every client. Also, our team of
          experts is always on hand to help!
        </Text>
      </div>
    </section>
  );
}
