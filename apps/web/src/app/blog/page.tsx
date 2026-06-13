import { Container, SectionEyebrow, SectionTitle } from '@/components/ui';
import { blogPosts } from '@/lib/site';

export default function BlogPage() {
  return (
    <section className='section-shell'>
      <Container>
        <SectionEyebrow>SEO Blog</SectionEyebrow>
        <SectionTitle description='Structured topics that support search visibility for core local dentistry keywords.'>Dental care articles</SectionTitle>
        <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {blogPosts.map((post) => (
            <article key={post} className='rounded-3xl border border-slate-200 bg-white p-6 shadow-premium dark:border-white/10 dark:bg-white/5'>
              <p className='text-lg font-semibold text-navy dark:text-white'>{post}</p>
              <p className='mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300'>A search-friendly article outline ready for publishing with local SEO optimization and schema markup.</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
