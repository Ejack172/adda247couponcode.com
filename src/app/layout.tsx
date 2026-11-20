import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCouponBar from '@/components/StickyCouponBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://adda247couponcode.com'),
  title: {
    default: 'Adda247 Coupon Code November 2026 – Referral Code & Offers',
    template: '%s | Adda247 Coupon Code',
  },
  description:
    'Get the latest Adda247 coupon code and referral code REF_HIE37576 for November 2026. Explore course offers for SSC, Banking, UPSC and other government exams.',
  keywords: [
    'Adda247 Coupon Code',
    'Adda247 Referral Code',
    'Adda247 Discount Code',
    'Adda247 Coupon Code November 2026',
    'Adda247 Offers',
    'Adda247 Promo Code',
    'Adda247 SSC Coupon Code',
    'Adda247 Banking Coupon Code',
    'Adda247 UPSC Coupon Code',
    'Adda247 Course Discount',
    'Adda247 Referral Code REF_HIE37576',
  ],
  authors: [{ name: 'Adda247 Coupon Code Team' }],
  creator: 'Adda247 Coupon Code',
  publisher: 'Adda247 Coupon Code',
  alternates: {
    canonical: 'https://adda247couponcode.com/',
  },
  openGraph: {
    title: 'Adda247 Coupon Code November 2026 – Referral Code & Offers',
    description:
      'Get the latest Adda247 coupon code and referral code REF_HIE37576 for November 2026. Explore course offers for SSC, Banking, UPSC and other government exams.',
    url: 'https://adda247couponcode.com/',
    siteName: 'Adda247 Coupon Code',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://adda247couponcode.com/images/hero-reference.jpg',
        width: 1200,
        height: 630,
        alt: 'Adda247 Coupon Code November 2026 - Referral Code REF_HIE37576',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adda247 Coupon Code November 2026 – Referral Code & Offers',
    description:
      'Get the latest Adda247 coupon code and referral code REF_HIE37576 for November 2026. Explore course offers for SSC, Banking, UPSC and other government exams.',
    images: ['https://adda247couponcode.com/images/hero-reference.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adda247 Coupon Code',
    url: 'https://adda247couponcode.com/',
    logo: 'https://adda247couponcode.com/images/hero-reference.jpg',
    description:
      'Independent portal providing verified Adda247 coupon codes, referral codes, and education course discounts for Indian competitive exams.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adda247 Coupon Code',
    url: 'https://adda247couponcode.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://adda247couponcode.com/coupon-codes/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white selection:bg-red-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCouponBar />
      </body>
    </html>
  );
}
