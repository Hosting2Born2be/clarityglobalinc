'use client';

import Image from 'next/image';
import Link from 'next/link';

import { SignUpDialog } from '@/core/auth/components';

import { BurgerMenu } from '@/features/burger-menu';

import { SupportUkraine } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';

import st from './header.module.css';

export function Header() {
  return (
    <header className={st.headerActions}>
      <Link href="/">
        <Image src="/full-logo.svg" alt="full-logo" width="188" height="36" />
      </Link>
      <section className={st.burgerMenu}>
        <div className={st.quickActions}>
          <Link href="https://savelife.in.ua/en/">
            <SupportUkraine />
          </Link>
          <Button variant="transparent">Login</Button>
          <SignUpDialog trigger={<Button variant="white">Sign Up</Button>} />
        </div>
        <BurgerMenu />
      </section>
    </header>
  );
}
