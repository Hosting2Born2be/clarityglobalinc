'use client';

import { cn } from '@/shared/lib/styles';

import st from './tag.module.css';

export function Tag({
  children,
  className,
  size = 'sm',
  variant = 'orange',
}: {
  children: React.ReactNode;
  variant?: 'orange' | 'success';
  size?: 'base' | 'sm';
  className?: string;
}) {
  const tagClasses = cn(
    st.tag,
    {
      [st.orange]: variant === 'orange',
      [st.success]: variant === 'success',
      [st.sizeBase]: size === 'base',
      [st.sizeSm]: size === 'sm',
    },
    className,
  );

  return <span className={tagClasses}>{children}</span>;
}
