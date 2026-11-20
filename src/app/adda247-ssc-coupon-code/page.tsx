import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import FaqAccordion from '@/components/FaqAccordion';
import { ALL_COUPON_OFFERS, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { Users, CheckCircle2, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 SSC Coupon Code November 2026 – SSC CGL, CHSL, GD & Mahapack',
  description:
    'Verified Adda247 SSC coupon code REF_HIE37576 for November 2026. Get deals on SSC Mahapack, SSC CGL, CHSL, GD Constable, and CPO coaching batches.',
  alternates: {
    canonical: 'https://adda247couponcode.com/adda247-ssc-coupon-code/',
  },
  openGraph: {
    title: 'Adda247 SSC Coupon Code November 2026 – SSC CGL, CHSL, GD & Mahapack',
    description:
      'Verified Adda247 SSC coupon code REF_HIE37576 for November 2026. Get deals on SSC Mahapack, SSC CGL, CHSL, GD Constable, and CPO coaching batches.',
    url: 'https://adda247couponcode.com/adda247-ssc-coupon-code/',
  },
};

export default function SscCouponCodePage() {
  const sscOffer = ALL_COUPON_OFFERS.find((o) => o.id === 'ssc-special') || ALL_COUPON_OFFERS[0];

  const sscExams = [
    { title: 'SSC CGL (Tier 1 & Tier 2)', desc: 'Complete mathematical ability, reasoning, English language comprehension & general awareness.' },
    { title: 'SSC CHSL (10+2 Level)', desc: 'Foundation to advanced batches, descriptive writing analysis and typing speed tests.' },
    { title: 'SSC GD Constable', desc: 'Huge vacancy oriented coaching with previous year solved question banks in Hindi & English.' },
    { title: 'SSC MTS & Havaldar', desc: 'Comprehensive syllabus targeting non-technical staff and havaldar posts with targeted test sets.' },
    { title: 'SSC CPO (Central Police Org.)', desc: 'Sub-Inspector in Delhi Police & CAPFs training, physical test guidance and mock exams.' },
    { title: 'SSC Mahapack', desc: 'All SSC courses bundled together including live classes, video series, and 4000+ mock tests.' }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-red-50/40 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'SSC Coupon Code' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-red-600" />
            <span>Staff Selection Commission Aspirants</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Adda247 SSC Coupon Code November 2026
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Use verified referral code <span className="font-mono font-bold text-adda-600">{PRIMARY_COUPON_CODE}</span> to check eligible discounts on SSC CGL, CHSL, GD, and SSC Mahapack.
          </p>
        </div>

        {/* Featured SSC Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <CouponCard offer={sscOffer} highlight={true} />
        </div>

        {/* Exams Grid */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            SSC Exam Batches Supported on Adda247
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sscExams.map((exam, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-red-50/50 border border-red-100">
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{exam.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{exam.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Content */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            Why Aspirants Prefer Adda247 for SSC Examinations
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              With ever-increasing competition in central government vacancies, Adda247 provides rigorous conceptual clarity led by seasoned SSC faculty. From advanced trigonometry and geometry in quantitative aptitude to error detection and reading comprehension in English, each topic is dissected systematically.
            </p>
            <p>
              Before completing your purchase on Adda247, type referral code <strong>{PRIMARY_COUPON_CODE}</strong> into the coupon box and verify the updated net payable amount on your screen.
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
