import { BookingForm } from '../../components/booking-form';
import { Container, SectionEyebrow, SectionTitle } from '../../components/ui';

export default function BookPage() {
  return (
    <section className='section-shell'>
      <Container className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr]'>
        <div>
          <SectionEyebrow>Appointment Booking</SectionEyebrow>
          <SectionTitle description='Select a doctor, treatment, date, and available time slot. The form also supports notes and prescription uploads.'>Book your consultation</SectionTitle>
          <div className='mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300'>
            Confirmation flows are wired for email, WhatsApp, and admin notifications through the API layer.
          </div>
        </div>
        <BookingForm />
      </Container>
    </section>
  );
}
