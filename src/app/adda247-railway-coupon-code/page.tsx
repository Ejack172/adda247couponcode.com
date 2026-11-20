import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import FaqAccordion from '@/components/FaqAccordion';
import { ALL_COUPON_OFFERS, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { Train, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 Railway Coupon Code November 2026 – RRB NTPC, ALP & Group D',
  description:
    'Verified Adda247 Railway coupon code REF_HIE37576 for November 2026. Save on RRB NTPC CBT 1 & 2, Assistant Loco Pilot (ALP), Group D, and Railway Mahapack.',
  alternates: {
    canonical: 'https://adda247couponcode.com/adda247-railway-coupon-code/',
  },
  openGraph: {
    title: 'Adda247 Railway Coupon Code November 2026 – RRB NTPC, ALP & Group D',
    description:
      'Verified Adda247 Railway coupon code REF_HIE37576 for November 2026. Save on RRB NTPC CBT 1 & 2, Assistant Loco Pilot (ALP), Group D, and Railway Mahapack.',
    url: 'https://adda247couponcode.com/adda247-railway-coupon-code/',
  },
};

export default function RailwayCouponCodePage() {
  const railwayOffer = ALL_COUPON_OFFERS.find((o) => o.id === 'railway-special') || ALL_COUPON_OFFERS[0];

  const railwayExams = [
    { title: 'RRB NTPC (CBT 1 & CBT 2)', desc: 'General awareness, mathematics, and general intelligence & reasoning video courses and mock tests.' },
    { title: 'RRB Assistant Loco Pilot (ALP)', desc: 'Basic science and engineering drawing, technical trade modules, and psycho CBAT test practice.' },
    { title: 'RRB Group D (Level 1)', desc: 'General science, physics, chemistry, biology, math shortcuts, and previous years question papers.' },
    { title: 'RRB Junior Engineer (JE)', desc: 'Technical civil, mechanical, and electrical engineering syllabus combined with Stage 1 non-tech batches.' },
    { title: 'RRB Technician Grade 1 & 3', desc: 'Signal & telecom and trade-specific courses with high-yield revision notes.' },
    { title: 'Railway Mahapack', desc: 'One pass covering all RRB recruitment examinations for 12 or 24 months with all test series.' }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-indigo-50/40 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Railway Coupon Code' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Train className="w-3.5 h-3.5 text-indigo-700" />
            <span>Railway Recruitment Board Aspirants</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Adda247 Railway Coupon Code November 2026
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Use promo code <span className="font-mono font-bold text-adda-600">{PRIMARY_COUPON_CODE}</span> at checkout for discounts on RRB NTPC, ALP, Group D, and Railway Mahapack.
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <CouponCard offer={railwayOffer} highlight={true} />
        </div>

        {/* Breakdown */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            Railway Recruitment Board (RRB) Batches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {railwayExams.map((exam, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{exam.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{exam.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Content */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            Preparing for Railway Exams with Adda247
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              Railway exams attract millions of candidates across the country. Success requires speed, mathematical accuracy, and solid recall in general science. Adda247 provides chapter-wise daily quizzes, test simulation mimicking the TCS iON test interface, and live revision sessions.
            </p>
            <p>
              Remember to enter referral code <strong>{PRIMARY_COUPON_CODE}</strong> at checkout to verify available fee reductions before enrolling.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <FaqAccordion initialLimit={5} />
        </div>
      </div>
    </div>
  );
}
