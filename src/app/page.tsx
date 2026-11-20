import React from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import TodayCouponCard from '@/components/TodayCouponCard';
import ExamCategories from '@/components/ExamCategories';
import WhyUseSection from '@/components/WhyUseSection';
import HowToApply from '@/components/HowToApply';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Adda247 Coupon Code November 2026 – Referral Code & Offers',
    url: 'https://adda247couponcode.com/',
    description:
      'Get the latest Adda247 coupon code and referral code REF_HIE37576 for November 2026. Explore course offers for SSC, Banking, UPSC and other government exams.',
    datePublished: '2026-11-01',
    dateModified: '2026-11-20',
    inLanguage: 'en-IN',
  };

  return (
    <div className="space-y-8 pb-16">
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Benefits Section */}
      <BenefitsSection />

      {/* Two Column Grid: Today's Coupon Code + Popular Exam Categories (Matching Reference Screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5">
            <TodayCouponCard />
          </div>
          <div className="lg:col-span-7">
            <ExamCategories />
          </div>
        </div>
      </section>

      {/* Two Column Grid: How to Apply + Frequently Asked Questions (Matching Reference Screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6">
            <HowToApply />
          </div>
          <div className="lg:col-span-6">
            <FaqAccordion initialLimit={4} />
          </div>
        </div>
      </section>

      {/* Why Use Adda247 Coupon Code Section */}
      <WhyUseSection />
    </div>
  );
}
