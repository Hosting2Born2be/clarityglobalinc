'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SignUpDialog } from '@/core/auth/components';

import { BurgerMenu } from '@/features/burger-menu';
import { pageWithBlackLogo } from '@/features/header/config';

import { SupportUkraine } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';

import st from './header.module.css';

export function Header() {
  const pathname = usePathname();

  const logoVariant = useMemo(
    () => (pageWithBlackLogo.has(pathname) ? 'black' : 'white'),
    [pathname],
  );

  return (
    <header className={st.headerActions}>
      <Link href="/">
        <Image
          src={
            logoVariant === 'white' ? '/full-logo.svg' : '/full-logo-black.svg'
          }
          alt="full-logo"
          width="188"
          height="36"
        />
      </Link>
      <section className={st.burgerMenu}>
        <div className={st.quickActions}>
          <Link href="https://savelife.in.ua/en/">
            <SupportUkraine />
          </Link>
          <Button
            variant={logoVariant === 'white' ? 'transparent' : 'orangeOutline'}
          >
            Login
          </Button>
          <SignUpDialog
            trigger={
              <Button variant={logoVariant === 'white' ? 'white' : 'orange'}>
                Sign Up
              </Button>
            }
          />
        </div>
        <BurgerMenu iconColor={logoVariant} />
      </section>
    </header>
  );
}
