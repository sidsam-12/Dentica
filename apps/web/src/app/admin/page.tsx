import { Container, SectionEyebrow, SectionTitle } from '@/components/ui';

const panels = [
  'Patient Management',
  'Appointment Management',
  'Treatment Management',
  'Doctor Management',
  'Reports',
  'Lead Management',
  'Follow-up Tracking'
];

export default function AdminDashboardPage() {
  return (
    <section className='section-shell'>
      <Container>
        <SectionEyebrow>CRM Dashboard</SectionEyebrow>
        <SectionTitle description='The dashboard shell is ready for JWT session handling, filtered views, and role-based permissions.'>Admin workspace</SectionTitle>
        <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {panels.map((panel) => (
            <div key={panel} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/5'>
              <p className='text-base font-semibold text-navy dark:text-white'>{panel}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
