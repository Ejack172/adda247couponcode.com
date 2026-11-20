import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import FaqAccordion from '@/components/FaqAccordion';
import { ALL_COUPON_OFFERS, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { Landmark, CheckCircle2, ShieldCheck, BookOpen, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 UPSC Coupon Code November 2026 – IAS, Civil Services & State PSC',
  description:
    'Active Adda247 UPSC coupon code REF_HIE37576 for November 2026. Save on UPSC IAS Prelims & Mains Foundation batches, CSAT, EPFO, and State PCS Mahapacks.',
  alternates: {
    canonical: 'https://adda247couponcode.com/adda247-upsc-coupon-code/',
  },
  openGraph: {
    title: 'Adda247 UPSC Coupon Code November 2026 – IAS, Civil Services & State PSC',
    description:
      'Active Adda247 UPSC coupon code REF_HIE37576 for November 2026. Save on UPSC IAS Prelims & Mains Foundation batches, CSAT, EPFO, and State PCS Mahapacks.',
    url: 'https://adda247couponcode.com/adda247-upsc-coupon-code/',
  },
};

export default function UpscCouponCodePage() {
  const upscOffer = ALL_COUPON_OFFERS.find((o) => o.id === 'upsc-special') || ALL_COUPON_OFFERS[0];

  const upscCourses = [
    { title: 'UPSC CSE Prelims + Mains Foundation', desc: 'Integrated General Studies GS 1-4 coverage, answer writing mentorship, and essay modules.' },
    { title: 'CSAT (Civil Services Aptitude Test)', desc: 'Logical reasoning, quantitative aptitude, data interpretation, and comprehension workshops.' },
    { title: 'UPSC EPFO (EO/AO & APFC)', desc: 'Industrial relations, labor laws, general accounting principles, and Indian social security.' },
    { title: 'State PCS Foundation Batches', desc: 'UPPSC, BPSC, MPPSC, RAS, and WBPSC state-specific history, geography, and current affairs.' },
    { title: 'UPSC Mahapack', desc: 'Unlimited access to all UPSC live batches, test series, current affairs roundups, and e-books.' }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-amber-50/40 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'UPSC Coupon Code' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5 text-amber-700" />
            <span>Civil Services &amp; State PSC</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Adda247 UPSC Coupon Code November 2026
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Apply referral code <span className="font-mono font-bold text-adda-600">{PRIMARY_COUPON_CODE}</span> to check available discounts on UPSC IAS foundation courses and test series.
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <CouponCard offer={upscOffer} highlight={true} />
        </div>

        {/* Breakdown */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            UPSC &amp; PSC Programs on Adda247
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upscCourses.map((course, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{course.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Content */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            About UPSC IAS Coaching on Adda247
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              Adda247 IAS delivers structured civil services exam guidance tailored to both English and Hindi medium aspirants. The pedagogical structure emphasizes conceptual depth in NCERT foundations followed by advanced standard textbooks, daily editorial discussions, and continuous answer-evaluation loops.
            </p>
            <p>
              Students can enter coupon code <strong>{PRIMARY_COUPON_CODE}</strong> at checkout to verify active promotional rates across UPSC live batches and comprehensive mentorship programs.
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
