'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as Header,
  Trigger,
} from '@radix-ui/react-dialog';

import { FourDots } from '@/shared/ui/icons';
import { Close as CloseIcon } from '@/shared/ui/icons/close';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './burger-menu.module.css';

const navigationMain = [
  { title: 'Home', href: '/' },
  { title: 'Send', href: '/send' },
  { title: 'Receive', href: '/receive' },
  { title: 'Unique offer', href: '/unique-offers' },
  { title: 'Funds Safety', href: '/funds-safety' },
  { title: 'Acceptance Guidelines', href: '/acceptance-guidelines' },
  { title: 'Referral partner program', href: '/referral-partner-program' },
];

const navigationSecondary = [
  { title: 'Virtual cards services', href: '/virtual-cards-services' },
  { title: 'Exchange rates', href: '/exchange-rates' },
  { title: 'Newsletter', href: '/newsletter' },
  { title: 'About us', href: '/about-us' },
  { title: 'Faq', href: '/faq' },
  { title: 'Help', href: '/help' },
  { title: 'Contact Us', href: '/contact-us' },
];

export function BurgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger>
        <FourDots />
      </Trigger>
      <Portal>
        <Overlay className={st.overlay} />
        <Content className={st.content}>
          <section className={st.contentLayout}>
            <Close className={st.close}>
              <CloseIcon />
            </Close>
            <Header />
            <Description asChild>
              <section>
                <div className={st.header}>
                  <Image
                    className={st.logo}
                    src="/full-logo-black.svg"
                    alt="full-logo-black"
                    width={200}
                    height={35}
                  />
                  <div className={st.actions}>
                    <Button variant="orangeOutline">Login</Button>
                    <Button variant="orange">Sign Up</Button>
                  </div>
                </div>
                <nav className={st.nav}>
                  <ul className={st.navList}>
                    {navigationMain.map(({ title, href }) => (
                      <li key={title}>
                        <Link href={href} onClick={() => setOpen(false)}>
                          <Title level={2} className={st.listItem}>
                            {title.toUpperCase()}
                          </Title>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className={st.navList}>
                    {navigationSecondary.map(({ title, href }) => (
                      <li key={title}>
                        <Link href={href} onClick={() => setOpen(false)}>
                          <Title level={2} className={st.listItem}>
                            {title.toUpperCase()}
                          </Title>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            </Description>
          </section>
        </Content>
      </Portal>
    </Root>
  );
}
