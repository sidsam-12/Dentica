import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { Footer, FloatingWhatsApp, Header } from '@/components/layout';
import { clinic } from '@/lib/site';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dentica.in'),
  title: {
    default: `${clinic.name} | ${clinic.tagline}`,
    template: `%s | ${clinic.name}`
  },
  description: 'Dentica is a premium dental clinic in Saheed Nagar, Bhubaneswar for root canals, braces, aligners, cosmetic dentistry, implants, and family oral care.',
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={jakarta.className}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: clinic.name,
              url: 'https://dentica.in',
              telephone: clinic.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: clinic.address[0],
                addressLocality: 'Saheed Nagar',
                addressRegion: 'Odisha',
                postalCode: '751007',
                addressCountry: 'IN'
              },
              sameAs: ['https://wa.me/918895012345']
            })
          }}
        />
      </body>
    </html>
  );
}
