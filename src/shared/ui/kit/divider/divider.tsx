'use client';

import { cn } from '@/shared/lib/styles';

import st from './divider.module.css';

export function Divider({ className }: { className?: string }) {
  return <div className={cn(st.divider, className)} />;
}
