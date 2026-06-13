'use client';

import Link from 'next/link';
import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '../lib/utils';

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className='mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-dentalBlue/70 dark:text-cyan-200'>{children}</div>;
}

export function SectionTitle({ children, description }: { children: React.ReactNode; description?: string }) {
  return (
    <div className='max-w-3xl'>
      <h2 className='text-3xl font-semibold tracking-tight text-navy dark:text-white sm:text-4xl'>{children}</h2>
      {description ? <p className='mt-4 text-base leading-7 text-slate-600 dark:text-slate-300'>{description}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className='inline-flex items-center justify-center rounded-full bg-dentalBlue px-6 py-3 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-dentalBlue/90'>
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className='inline-flex items-center justify-center rounded-full border border-dentalBlue/15 bg-white/80 px-6 py-3 text-sm font-semibold text-navy backdrop-blur transition hover:border-dentalBlue/30 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white'>
      {children}
    </Link>
  );
}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = (theme === 'system' ? resolvedTheme : theme) === 'dark';

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-dentalBlue/30 dark:border-white/10 dark:bg-white/5 dark:text-white'
      aria-label='Toggle theme'
    >
      {isDark ? <SunMedium className='h-4 w-4' /> : <MoonStar className='h-4 w-4' />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className='inline-flex items-center rounded-full border border-mintGreen/20 bg-mintGreen/10 px-3 py-1 text-xs font-semibold text-mintGreen'>{children}</span>;
}
