'use client';

import { useState } from 'react';
import { Container, SectionEyebrow, SectionTitle } from '@/components/ui';

export default function AdminLoginPage() {
  const [role, setRole] = useState('Super Admin');
  return (
    <section className='section-shell'>
      <Container className='max-w-xl'>
        <SectionEyebrow>CRM Login</SectionEyebrow>
        <SectionTitle description='Admin login for the dashboard. Role-based permissions are enforced by the backend token.'>Secure dashboard access</SectionTitle>
        <form className='mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/5'>
          <input className='input' placeholder='Email' />
          <input className='input' placeholder='Password' type='password' />
          <select className='input' value={role} onChange={(event) => setRole(event.target.value)}>
            <option>Super Admin</option>
            <option>Receptionist</option>
            <option>Doctor</option>
          </select>
          <button type='submit' className='rounded-full bg-dentalBlue px-6 py-3 text-sm font-semibold text-white'>Sign in as {role}</button>
        </form>
      </Container>
    </section>
  );
}
