import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import TodayCouponCard from '@/components/TodayCouponCard';
import HowToApply from '@/components/HowToApply';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { Sparkles, CheckCircle2, ShieldCheck, Share2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 Referral Code REF_HIE37576 November 2026 – Apply for Discount',
  description:
    'Use Adda247 referral code REF_HIE37576 during checkout for November 2026. Discover how referral discounts work on Banking, SSC, UPSC, and State Exam batches.',
  alternates: {
    canonical: 'https://adda247couponcode.com/adda247-referral-code/',
  },
  openGraph: {
    title: 'Adda247 Referral Code REF_HIE37576 November 2026 – Apply for Discount',
    description:
      'Use Adda247 referral code REF_HIE37576 during checkout for November 2026. Discover how referral discounts work on Banking, SSC, UPSC, and State Exam batches.',
    url: 'https://adda247couponcode.com/adda247-referral-code/',
  },
};

export default function Adda247ReferralCodePage() {
  return (
    <div className="pb-16 bg-gradient-to-b from-red-50/30 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Adda247 Referral Code' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-adda-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Share2 className="w-3.5 h-3.5" />
            <span>Official Referral Partner Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Adda247 Referral Code: <span className="text-adda-500">{PRIMARY_COUPON_CODE}</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            A comprehensive guide on applying the Adda247 referral code for November 2026 to maximize course affordability.
          </p>
        </div>

        {/* 2-Column Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-stretch">
          <div className="lg:col-span-5">
            <TodayCouponCard />
          </div>
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                What is the Adda247 Referral Code?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The Adda247 referral code <strong>{PRIMARY_COUPON_CODE}</strong> is an invitation identifier designed for students enrolling in new live classes, Mahapacks, and test series. When submitted in the checkout portal, the system validates the code against active discount tiers.
              </p>
              <h3 className="text-base font-bold text-gray-900 mb-2">Key Advantages of Using a Referral Code:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Wide Compatibility:</strong> Applicable on Banking, SSC, UPSC, Teaching, Defence &amp; State government exam courses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Stackable with App Coins:</strong> Often combinable with Adda247 app reward coins earned through daily practice quizzes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Zero Risk:</strong> Entering the code is 100% free and takes place directly on the official Adda247 website or app.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Valid through November 2026</span>
              <a
                href={OFFICIAL_ADDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-adda-600 hover:text-adda-700 flex items-center gap-1"
              >
                Open Adda247 Store <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Step Guide */}
        <div className="mb-14">
          <HowToApply />
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <FaqAccordion initialLimit={6} />
        </div>
      </div>
    </div>
  );
}
