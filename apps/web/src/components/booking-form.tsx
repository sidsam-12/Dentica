'use client';

import { useMemo, useState } from 'react';
import { doctors, services } from '../lib/site';

const initialState = {
  name: '',
  mobileNumber: '',
  email: '',
  age: '',
  gender: '',
  preferredDoctor: doctors[0].name,
  preferredTreatment: services[0],
  preferredDate: '',
  preferredTime: '',
  message: '',
  remarks: ''
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const availableTimes = useMemo(() => ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'], []);

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submitForm} className='grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-premium dark:border-white/10 dark:bg-white/5 md:p-8'>
      <div className='grid gap-4 md:grid-cols-2'>
        <input required placeholder='Name' className='input' value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <input required placeholder='Mobile Number' className='input' value={form.mobileNumber} onChange={(event) => setForm({ ...form, mobileNumber: event.target.value })} />
        <input placeholder='Email' type='email' className='input' value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <input placeholder='Age' className='input' value={form.age} onChange={(event) => setForm({ ...form, age: event.target.value })} />
        <select className='input' value={form.gender} onChange={(event) => setForm({ ...form, gender: event.target.value })}>
          <option value=''>Gender</option>
          <option value='Female'>Female</option>
          <option value='Male'>Male</option>
          <option value='Prefer not to say'>Prefer not to say</option>
        </select>
        <select className='input' value={form.preferredDoctor} onChange={(event) => setForm({ ...form, preferredDoctor: event.target.value })}>
          {doctors.map((doctor) => (
            <option key={doctor.name}>{doctor.name}</option>
          ))}
        </select>
        <select className='input' value={form.preferredTreatment} onChange={(event) => setForm({ ...form, preferredTreatment: event.target.value })}>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
        <input type='date' className='input' value={form.preferredDate} onChange={(event) => setForm({ ...form, preferredDate: event.target.value })} />
        <select className='input' value={form.preferredTime} onChange={(event) => setForm({ ...form, preferredTime: event.target.value })}>
          <option value=''>Available Time Slot</option>
          {availableTimes.map((slot) => (
            <option key={slot}>{slot}</option>
          ))}
        </select>
      </div>

      <textarea placeholder='Message / Remarks' rows={4} className='input' value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
      <textarea placeholder='Additional Remarks' rows={3} className='input' value={form.remarks} onChange={(event) => setForm({ ...form, remarks: event.target.value })} />

      <label className='flex items-center gap-3 rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600 dark:border-white/15 dark:text-slate-300'>
        <input type='file' className='text-sm' />
        Upload Prescription (optional)
      </label>

      <button type='submit' disabled={status === 'sending'} className='rounded-full bg-dentalBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-dentalBlue/90 disabled:opacity-70'>
        {status === 'sending' ? 'Submitting...' : 'Book Appointment'}
      </button>
      {status === 'success' ? <p className='text-sm text-mintGreen'>Request submitted. Confirmation will follow by email and WhatsApp.</p> : null}
      {status === 'error' ? <p className='text-sm text-red-500'>Unable to submit right now. Please try again or use WhatsApp.</p> : null}
    </form>
  );
}
