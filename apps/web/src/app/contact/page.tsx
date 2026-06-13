import { Container, SectionEyebrow, SectionTitle } from '@/components/ui';

export default function ContactPage() {
  return (
    <section className='section-shell'>
      <Container className='grid gap-10 lg:grid-cols-[1fr_1fr]'>
        <div>
          <SectionEyebrow>Contact</SectionEyebrow>
          <SectionTitle description='Reach Dentica for consultations, emergencies, and booking support.'>Contact the clinic</SectionTitle>
          <div className='mt-8 space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-premium dark:border-white/10 dark:bg-white/5 dark:text-slate-300'>
            <p>Plot No. A-88, 2nd Floor</p>
            <p>Saheed Nagar</p>
            <p>Bhubaneswar, Odisha - 751007</p>
            <p>Phone: +91 88950 12345</p>
            <p>Email: hello@dentica.in</p>
          </div>
        </div>
        <form className='grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/5'>
          <input className='input' placeholder='Name' />
          <input className='input' placeholder='Mobile number' />
          <input className='input' placeholder='Email address' />
          <textarea className='input' rows={5} placeholder='Your message' />
          <button className='rounded-full bg-dentalBlue px-6 py-3 text-sm font-semibold text-white'>Submit enquiry</button>
        </form>
      </Container>
    </section>
  );
}
