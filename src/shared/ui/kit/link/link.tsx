'use client';

import NavLink from 'next/link';

import st from './link.module.css';

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink href={href} className={st.link}>
      {children}
    </NavLink>
  );
}
