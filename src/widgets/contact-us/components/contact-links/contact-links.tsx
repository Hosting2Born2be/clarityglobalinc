'use client';

import Link from 'next/link';

import {
  OrangeEmail,
  OrangePhone,
  OrangeTelegram,
  OrangeWhatsapp,
} from '@/shared/ui/icons';

import st from './contact-links.module.css';

const links = [
  { label: '+14378873911', link: 'tel:+14378873911', icon: <OrangePhone /> },
  {
    label: 'Telegram',
    link: 'https://t.me/ClarityGlobalSupport',
    icon: <OrangeTelegram flat />,
  },
  {
    label: 'info@clarityglobalinc.com',
    link: 'mailto:info@clarityglobalinc.com',
    icon: <OrangeEmail flat />,
  },
  {
    label: 'WhatsApp',
    link: 'https://wa.me/38669403456',
    icon: <OrangeWhatsapp />,
  },
];

export function ContactLinks() {
  return (
    <section className={st.links}>
      {links.map(({ label, link, icon }) => (
        <ContactCard key={label} label={label} link={link} icon={icon} />
      ))}
    </section>
  );
}

function ContactCard({
  label,
  link,
  icon,
}: {
  label: string;
  link: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={link} className={st.card}>
      {icon}
      {label}
    </Link>
  );
}
