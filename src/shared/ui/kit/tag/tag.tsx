'use client';

import { cn } from '@/shared/lib/styles';

import st from './tag.module.css';

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn(st.tag, className)}>{children}</span>;
}
