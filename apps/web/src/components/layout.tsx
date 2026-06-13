'use client';

import Link from 'next/link';
import { Menu, PhoneCall, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Container, ThemeToggle } from './ui';
import { clinic } from '@/lib/site';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#location', label: 'Location' },
  { href: '/book', label: 'Book' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
  { href: '/admin/login', label: 'CRM' }
]

export function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'or'>('en');

  return (
    <button
      type='button'
      onClick={() => setLanguage(language === 'en' ? 'or' : 'en')}
      className='inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-dentalBlue/30 dark:border-white/10 dark:bg-white/5 dark:text-white'
      aria-label='Toggle language'
    >
      {language === 'en' ? 'EN' : 'ଓଡ଼ିଆ'}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-slate-950/80'>
      <Container className='flex h-20 items-center justify-between gap-4'>
        <Link href='/' className='flex items-center gap-3'>
          <div className='grid h-12 w-12 place-items-center rounded-2xl bg-dentalBlue text-sm font-bold text-white shadow-premium'>
            D
          </div>
          <div>
            <div className='font-semibold text-navy dark:text-white'>{clinic.name}</div>
            <div className='text-xs text-slate-500 dark:text-slate-400'>{clinic.tagline}</div>
          </div>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className='text-sm font-medium text-slate-600 transition hover:text-dentalBlue dark:text-slate-300'>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          <LanguageToggle />
          <ThemeToggle />
          <Link href='https://wa.me/918895012345?text=Hello%20Dentica%2C%20I%20would%20like%20to%20book%20an%20appointment.' className='inline-flex items-center gap-2 rounded-full bg-mintGreen px-4 py-2 text-sm font-semibold text-white transition hover:bg-mintGreen/90'>
            <MessageCircle className='h-4 w-4' /> WhatsApp
          </Link>
        </div>

        <button className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white' onClick={() => setOpen(!open)} aria-label='Open menu'>
          <Menu className='h-5 w-5' />
        </button>
      </Container>

      {open ? (
        <div className='border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-slate-950'>
          <Container className='space-y-3'>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className='block rounded-2xl px-4 py-3 text-sm font-medium text-navy dark:text-white'>
                {item.label}
              </Link>
            ))}
            <LanguageToggle />
            <ThemeToggle />
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950'>
      <Container className='grid gap-8 md:grid-cols-3'>
        <div>
          <div className='text-lg font-semibold text-navy dark:text-white'>{clinic.name}</div>
          <p className='mt-3 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400'>
            Premium oral care with a calm, modern patient experience for Bhubaneswar and Saheed Nagar.
          </p>
        </div>
        <div>
          <div className='text-sm font-semibold text-navy dark:text-white'>Contact</div>
          <div className='mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400'>
            <div className='flex items-center gap-2'><PhoneCall className='h-4 w-4 text-dentalBlue' /> {clinic.phone}</div>
            <div>{clinic.email}</div>
          </div>
        </div>
        <div>
          <div className='text-sm font-semibold text-navy dark:text-white'>Location</div>
          <div className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400'>{clinic.address.join(', ')}</div>
        </div>
      </Container>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <Link href='https://wa.me/918895012345?text=Hello%20Dentica%2C%20I%20would%20like%20to%20book%20an%20appointment.' className='fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-mintGreen px-5 py-3 text-sm font-semibold text-white shadow-premium transition hover:scale-[1.02]'>
      <MessageCircle className='h-4 w-4' /> WhatsApp Us
    </Link>
  );
}
