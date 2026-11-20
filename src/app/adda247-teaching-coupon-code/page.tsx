import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import FaqAccordion from '@/components/FaqAccordion';
import { ALL_COUPON_OFFERS, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { GraduationCap, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 Teaching Coupon Code November 2026 – CTET, DSSSB, KVS & TET',
  description:
    'Use Adda247 Teaching coupon code REF_HIE37576 for November 2026. Explore discounts on CTET Paper 1 & 2, Teaching Mahapack, KVS, DSSSB, and Super TET courses.',
  alternates: {
    canonical: 'https://adda247couponcode.com/adda247-teaching-coupon-code/',
  },
  openGraph: {
    title: 'Adda247 Teaching Coupon Code November 2026 – CTET, DSSSB, KVS & TET',
    description:
      'Use Adda247 Teaching coupon code REF_HIE37576 for November 2026. Explore discounts on CTET Paper 1 & 2, Teaching Mahapack, KVS, DSSSB, and Super TET courses.',
    url: 'https://adda247couponcode.com/adda247-teaching-coupon-code/',
  },
};

export default function TeachingCouponCodePage() {
  const teachingOffer = ALL_COUPON_OFFERS.find((o) => o.id === 'teaching-special') || ALL_COUPON_OFFERS[0];

  const teachingExams = [
    { title: 'CTET (Central Teacher Eligibility Test)', desc: 'Child Development & Pedagogy (CDP), Mathematics, EVS, Social Science & languages for Paper 1 and 2.' },
    { title: 'Teaching Mahapack', desc: 'All national and state-level teaching exam courses in one comprehensive bundle with test series.' },
    { title: 'DSSSB PRT / TGT / PGT', desc: 'Delhi Subordinate Services Selection Board special educator and general teacher recruitment batches.' },
    { title: 'KVS & NVS Recruitment', desc: 'Kendriya Vidyalaya & Navodaya Vidyalaya written exam preparation with demo interview sessions.' },
    { title: 'UP Super TET & UPTET', desc: 'Uttar Pradesh assistant teacher recruitment syllabus with dedicated subject masterclasses.' },
    { title: 'Bihar Teacher (BPSC TRE)', desc: 'BPSC Teacher Recruitment Examination special batches for primary, middle, and secondary levels.' }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-emerald-50/40 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Teaching Coupon Code' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Teaching &amp; Pedagogy Aspirants</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Adda247 Teaching Coupon Code November 2026
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Apply code <span className="font-mono font-bold text-adda-600">{PRIMARY_COUPON_CODE}</span> at checkout for applicable discounts on Teaching Mahapack and CTET batches.
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <CouponCard offer={teachingOffer} highlight={true} />
        </div>

        {/* Teaching Exams Breakdown */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            Teaching Eligibility &amp; Recruitment Exams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teachingExams.map((exam, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{exam.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{exam.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Guidance */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            How Adda247 Supports Teaching Aspirants
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              Teaching exams demand deep understanding of child psychology, pedagogical theories, and subject-specific teaching methodologies. Adda247&apos;s Teachers Adda wing brings expert educators who conduct chapter-wise revisions, NCERT summaries, and simulation mock tests.
            </p>
            <p>
              Use referral code <strong>{PRIMARY_COUPON_CODE}</strong> during payment on Adda247 to verify any ongoing fee concessions before completing your transaction.
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
