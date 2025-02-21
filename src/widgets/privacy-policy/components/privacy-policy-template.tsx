'use client';

import { ReactNode } from 'react';

import { Header } from '@/widgets/privacy-policy/components/header';
import { PrivacyTitle } from '@/widgets/privacy-policy/components/privacy-title';

export function PrivacyPolicyTemplate({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      <PrivacyTitle />
      {children}
    </main>
  );
}
