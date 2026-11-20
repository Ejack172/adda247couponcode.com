import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import FaqAccordion from '@/components/FaqAccordion';
import { ALL_COUPON_OFFERS, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { Building2, CheckCircle2, BookOpen, Users, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 Banking Coupon Code November 2026 – SBI PO, IBPS & Bank Mahapack',
  description:
    'Get the latest Adda247 Banking coupon code REF_HIE37576 for November 2026. Save on Bank Mahapack, SBI PO, IBPS Clerk, RRB PO, and RBI Grade B batches.',
  alternates: {
    canonical: 'https://adda247couponcode.com/adda247-banking-coupon-code/',
  },
  openGraph: {
    title: 'Adda247 Banking Coupon Code November 2026 – SBI PO, IBPS & Bank Mahapack',
    description:
      'Get the latest Adda247 Banking coupon code REF_HIE37576 for November 2026. Save on Bank Mahapack, SBI PO, IBPS Clerk, RRB PO, and RBI Grade B batches.',
    url: 'https://adda247couponcode.com/adda247-banking-coupon-code/',
  },
};

export default function BankingCouponCodePage() {
  const bankingOffer = ALL_COUPON_OFFERS.find((o) => o.id === 'banking-special') || ALL_COUPON_OFFERS[0];

  const examsCovered = [
    { title: 'SBI PO & SBI Clerk', desc: 'Prelims + Mains comprehensive coverage, group discussion and interview guidance.' },
    { title: 'IBPS PO & IBPS Clerk', desc: 'Quantitative aptitude, reasoning, English, and banking awareness modules.' },
    { title: 'IBPS RRB Officer & Assistant', desc: 'State rural bank test series, regional language support, computer awareness.' },
    { title: 'RBI Grade B & RBI Assistant', desc: 'Economic and social issues (ESI), finance and management (F&M) master classes.' },
    { title: 'Bank Mahapack / Mahapack Plus', desc: 'All banking and regulatory body courses in one continuous subscription pass.' }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-blue-50/40 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Banking Coupon Code' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Banking Aspirants Special</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Adda247 Banking Coupon Code November 2026
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Apply referral code <span className="font-mono font-bold text-adda-600">{PRIMARY_COUPON_CODE}</span> for discounts on SBI, IBPS, RRB, and RBI online courses and Bank Mahapacks.
          </p>
        </div>

        {/* Featured Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <CouponCard offer={bankingOffer} highlight={true} />
        </div>

        {/* Exams Covered Breakdown */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            Supported Banking Examinations on Adda247
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {examsCovered.map((exam, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                <h3 className="font-extrabold text-sm text-gray-900 mb-1">{exam.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{exam.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Content */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            Why Use Adda247 for Banking Exam Preparation?
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              Adda247 is widely regarded as India&apos;s pioneering destination for banking exam preparation. Featuring educators like Shantanu Shukla, Saurav Singh, and Kinshuk Srivastava, the platform provides daily live quizzes, high-difficulty puzzle sessions, and bilingual question banks aligned with the latest IBPS and SBI exam patterns.
            </p>
            <p>
              By applying referral code <strong>{PRIMARY_COUPON_CODE}</strong> on the Bank Mahapack, aspirants can access thousands of hours of targeted training without buying individual courses for every separate recruitment notification.
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
