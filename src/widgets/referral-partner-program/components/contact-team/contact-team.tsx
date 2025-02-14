'use client';

import Link from 'next/link';

import { OrangeEmail, OrangeTelegram } from '@/shared/ui/icons';
import { OrangeSkype } from '@/shared/ui/icons/orange-skype';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-team.module.css';

const links = [
  {
    title: 'live:.cid.93dc92d260a0819e',
    href: 'skype:live:.cid.93dc92d260a0819e',
    Icon: OrangeSkype,
  },
  {
    title: 'sales@clarityglobalinc.com',
    href: 'mailto:sales@clarityglobalinc.com',
    Icon: OrangeEmail,
  },
  {
    title: '@Sales_ClarityGlobalinc',
    href: 'tttps://t.me/Sales_ClarityGlobalinc',
    Icon: OrangeTelegram,
  },
];

export function ContactTeam() {
  return (
    <section className={st.layout}>
      <Title level={3}>Have questions? Contact our team!</Title>
      <section className={st.cards}>
        {links.map(({ title, href, Icon }) => (
          <ContactCard key={title} title={title} href={href} Icon={Icon} />
        ))}
      </section>
    </section>
  );
}

function ContactCard({
  title,
  href,
  Icon,
}: {
  title: string;
  href: string;
  Icon: React.ElementType;
}) {
  return (
    <article className={st.card}>
      <span className={st.icon}>
        <Icon />
      </span>
      <Link href={href}>
        <Text size="base" weight={700}>
          {title}
        </Text>
      </Link>
    </article>
  );
}
