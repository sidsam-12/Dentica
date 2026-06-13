import Link from 'next/link';
import { ArrowRight, CalendarDays, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { Badge, Container, PrimaryButton, SecondaryButton, SectionEyebrow, SectionTitle } from '../components/ui';
import { MotionStrip } from '../components/motion-strip';
import { blogPosts, clinic, doctors, faqs, features, services, testimonials } from '../lib/site';

export default function HomePage() {
  return (
    <div>
      <section className='relative overflow-hidden bg-hero-gradient'>
        <Container className='section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='space-y-8'>
            <Badge>Advanced Oral Care Centre</Badge>
            <div className='space-y-5'>
              <h1 className='max-w-3xl text-5xl font-semibold tracking-tight text-navy dark:text-white sm:text-6xl'>{clinic.headline}</h1>
              <p className='max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300'>{clinic.subheading}</p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <PrimaryButton href='/book'>Book Appointment</PrimaryButton>
              <SecondaryButton href='https://wa.me/918895012345?text=Hello%20Dentica%2C%20I%20would%20like%20to%20book%20an%20appointment.'>WhatsApp Us</SecondaryButton>
            </div>
            <div className='flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300'>
              <div className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5'><ShieldCheck className='h-4 w-4 text-mintGreen' /> Hygienic care</div>
              <div className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5'><Star className='h-4 w-4 text-mintGreen' /> Specialist-led</div>
              <div className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5'><CalendarDays className='h-4 w-4 text-mintGreen' /> Easy scheduling</div>
            </div>
            <MotionStrip />
          </div>

          <div className='relative'>
            <div className='absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-dentalBlue/15 via-transparent to-mintGreen/15 blur-2xl' />
            <div className='relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-premium dark:border-white/10 dark:bg-slate-900'>
              <div className='aspect-[4/5] bg-[radial-gradient(circle_at_top_left,_rgba(14,93,184,0.22),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(37,194,122,0.18),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,1),_rgba(247,251,255,1))] p-8 dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,93,184,0.28),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(37,194,122,0.18),_transparent_34%),linear-gradient(180deg,_rgba(15,23,42,1),_rgba(2,6,23,1))]'>
                <div className='grid h-full place-items-center rounded-[1.5rem] border border-dashed border-dentalBlue/20 bg-white/70 p-8 text-center backdrop-blur dark:border-white/10 dark:bg-white/5'>
                  <div>
                    <div className='mx-auto mb-4 grid h-20 w-20 place-items-center rounded-3xl bg-dentalBlue text-2xl font-bold text-white shadow-premium'>D</div>
                    <p className='text-sm font-semibold uppercase tracking-[0.3em] text-dentalBlue/70 dark:text-cyan-200'>Hero Image Slot</p>
                    <p className='mt-3 text-xl font-semibold text-navy dark:text-white'>Modern smiling family with dental care theme</p>
                    <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300'>Replace this shell with the uploaded clinic hero image or a branded photo for production.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='section-shell bg-white dark:bg-slate-950'>
        <Container>
          <SectionEyebrow>Services</SectionEyebrow>
          <SectionTitle description='Specialized treatments designed for comfort, predictability, and long-term oral health.'>Comprehensive dental services</SectionTitle>
          <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            {services.map((service) => (
              <div key={service} className='rounded-3xl border border-slate-200 bg-mist p-5 shadow-sm dark:border-white/10 dark:bg-white/5'>
                <CheckCircle2 className='h-5 w-5 text-mintGreen' />
                <p className='mt-3 text-sm font-semibold text-navy dark:text-white'>{service}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className='section-shell'>
        <Container>
          <SectionEyebrow>Why Choose Dentica</SectionEyebrow>
          <SectionTitle description='A premium patient journey with thoughtful scheduling, digital support, and specialist consultation.'>Built around trust and comfort</SectionTitle>
          <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {features.map((feature) => (
              <div key={feature} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/5'>
                <p className='text-base font-semibold text-navy dark:text-white'>{feature}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className='section-shell bg-white dark:bg-slate-950'>
        <Container>
          <SectionEyebrow>Doctors</SectionEyebrow>
          <SectionTitle description='Experienced specialists delivering modern treatment plans and clear guidance for every visit.'>Doctor profiles</SectionTitle>
          <div className='mt-10 grid gap-6 lg:grid-cols-2'>
            {doctors.map((doctor) => (
              <article key={doctor.name} className='rounded-[2rem] border border-slate-200 bg-mist p-8 shadow-premium dark:border-white/10 dark:bg-white/5'>
                <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-dentalBlue text-xl font-bold text-white'>D</div>
                <h3 className='mt-6 text-2xl font-semibold text-navy dark:text-white'>{doctor.name}</h3>
                <p className='mt-2 text-sm font-medium text-dentalBlue'>{doctor.degree}</p>
                <ul className='mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300'>
                  {doctor.specialties.map((specialty) => (
                    <li key={specialty} className='flex items-center gap-2'><ArrowRight className='h-4 w-4 text-mintGreen' /> {specialty}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className='section-shell'>
        <Container>
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <SectionTitle description='A calm, reassuring patient experience is central to the clinic design.'>Patient reviews slider</SectionTitle>
          <div className='mt-10 grid gap-4 lg:grid-cols-3'>
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/5'>
                <p className='text-sm leading-7 text-slate-600 dark:text-slate-300'>“{testimonial.quote}”</p>
                <footer className='mt-5 text-sm font-semibold text-navy dark:text-white'>{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className='section-shell bg-white dark:bg-slate-950'>
        <Container>
          <SectionEyebrow>Google Reviews</SectionEyebrow>
          <SectionTitle description='Connect the public review feed or Google Places API in production.'>Dynamic review integration ready</SectionTitle>
          <div className='mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-mist p-8 text-sm leading-7 text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300'>
            The UI is prepared for live Google Reviews. Plug in a Google Places or Business Profile API source and map the rating cards into this section.
          </div>
        </Container>
      </section>

      <section className='section-shell'>
        <Container>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <SectionTitle description='Helpful answers for first-time patients and returning families.'>Common dental questions</SectionTitle>
          <div className='mt-10 grid gap-4 lg:grid-cols-2'>
            {faqs.map((faq) => (
              <details key={faq.question} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5'>
                <summary className='cursor-pointer text-base font-semibold text-navy dark:text-white'>{faq.question}</summary>
                <p className='mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300'>{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className='section-shell bg-white dark:bg-slate-950'>
        <Container>
          <SectionEyebrow>Blog</SectionEyebrow>
          <SectionTitle description='SEO-ready articles to support clinic visibility and patient education.'>Articles and guides</SectionTitle>
          <div className='mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5'>
            {blogPosts.map((post) => (
              <Link key={post} href='/blog' className='rounded-3xl border border-slate-200 bg-mist p-5 font-medium text-navy transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/5 dark:text-white'>
                {post}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id='gallery' className='section-shell'>
        <Container>
          <SectionEyebrow>Gallery</SectionEyebrow>
          <SectionTitle description='Before and after cases, clinic photos, equipment views, and patient stories belong here.'>Clinic highlights</SectionTitle>
          <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {['Before & After Case', 'Clinic Interior', 'Advanced Equipment', 'Patient Success Story'].map((item) => (
              <div key={item} className='min-h-56 rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,rgba(14,93,184,0.1),rgba(37,194,122,0.12))] p-6 shadow-premium dark:border-white/10'>
                <div className='flex h-full items-end'>
                  <div>
                    <div className='text-xs font-semibold uppercase tracking-[0.3em] text-dentalBlue/70 dark:text-cyan-200'>Gallery Slot</div>
                    <div className='mt-2 text-lg font-semibold text-navy dark:text-white'>{item}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id='location' className='section-shell bg-white dark:bg-slate-950'>
        <Container>
          <SectionEyebrow>Location</SectionEyebrow>
          <SectionTitle description='Visitors can review the exact clinic location, get directions, and call directly from mobile.'>Find Dentica in Saheed Nagar</SectionTitle>
          <div className='mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]'>
            <div className='rounded-[2rem] border border-slate-200 bg-mist p-8 shadow-premium dark:border-white/10 dark:bg-white/5'>
              <div className='space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300'>
                {clinic.address.map((line) => <p key={line}>{line}</p>)}
              </div>
              <div className='mt-6 flex flex-wrap gap-3'>
                <PrimaryButton href='https://www.google.com/maps?q=Dentica+Saheed+Nagar+Bhubaneswar'>Directions</PrimaryButton>
                <SecondaryButton href='tel:+918895012345'>Call Now</SecondaryButton>
              </div>
            </div>
            <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-premium dark:border-white/10 dark:bg-white/5'>
              <iframe
                title='Dentica location map'
                src='https://www.google.com/maps?q=Saheed%20Nagar%20Bhubaneswar&output=embed'
                className='h-96 w-full'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </Container>
      </section>

      <section className='section-shell'>
        <Container>
          <SectionEyebrow>Contact & Newsletter</SectionEyebrow>
          <SectionTitle description='Simple contact and newsletter capture for consultations, campaigns, and patient education.'>Stay connected</SectionTitle>
          <div className='mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]'>
            <form className='grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/5'>
              <input className='input' placeholder='Full name' />
              <input className='input' placeholder='Mobile number' />
              <input className='input' placeholder='Email address' />
              <textarea className='input' rows={4} placeholder='How can we help you?' />
              <button className='rounded-full bg-dentalBlue px-6 py-3 text-sm font-semibold text-white'>Send enquiry</button>
            </form>
            <div className='grid gap-4'>
              <div className='rounded-[2rem] border border-slate-200 bg-mist p-6 shadow-sm dark:border-white/10 dark:bg-white/5'>
                <div className='text-sm font-semibold text-navy dark:text-white'>Newsletter subscription</div>
                <p className='mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300'>Monthly oral health tips, offers, and updates for patients in Bhubaneswar.</p>
                <div className='mt-4 flex gap-3'>
                  <input className='input' placeholder='Email address' />
                  <button className='rounded-full bg-mintGreen px-5 py-3 text-sm font-semibold text-white'>Join</button>
                </div>
              </div>
              <div className='rounded-[2rem] border border-slate-200 bg-mist p-6 shadow-sm dark:border-white/10 dark:bg-white/5'>
                <div className='text-sm font-semibold text-navy dark:text-white'>Patient feedback system</div>
                <p className='mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300'>Collect post-visit ratings, comments, and follow-up satisfaction scores from the dashboard.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
