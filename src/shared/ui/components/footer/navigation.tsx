'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.css';

export function Navigation({
  children,
  href,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} target="_blank" className={className}>
      <Text size="base" color="grey" weight={300} className={st.navigation}>
        {children}
      </Text>
    </Link>
  );
}
