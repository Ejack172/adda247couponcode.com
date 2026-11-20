import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import FaqAccordion from '@/components/FaqAccordion';
import { ALL_COUPON_OFFERS, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { Sparkles, ShieldCheck, Tag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 Coupon Codes November 2026 – Verified Promo & Discount Codes',
  description:
    'Discover active Adda247 coupon codes for November 2026. Use referral code REF_HIE37576 to get discounts on Bank, SSC, UPSC, Teaching and Railway courses.',
  alternates: {
    canonical: 'https://adda247couponcode.com/coupon-codes/',
  },
  openGraph: {
    title: 'Adda247 Coupon Codes November 2026 – Verified Promo & Discount Codes',
    description:
      'Discover active Adda247 coupon codes for November 2026. Use referral code REF_HIE37576 to get discounts on Bank, SSC, UPSC, Teaching and Railway courses.',
    url: 'https://adda247couponcode.com/coupon-codes/',
  },
};

export default function CouponCodesPage() {
  return (
    <div className="pb-16 bg-gradient-to-b from-red-50/30 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Coupon Codes' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-adda-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Updated November 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Adda247 Coupon Codes &amp; Discount Offers
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Browse verified coupon codes and referral vouchers for live classes, Mahapacks, and test series across all major Indian exams.
          </p>
        </div>

        {/* Featured Code Callout */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-600 to-red-500 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Universal Referral Code • November 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Primary Coupon Code: <span className="underline decoration-amber-300">{PRIMARY_COUPON_CODE}</span>
            </h2>
            <p className="text-red-100 text-sm max-w-xl">
              Apply this code at checkout to check applicable savings across Bank, SSC, UPSC, Teaching, Defence &amp; State exam subscriptions.
            </p>
          </div>
          <a
            href={OFFICIAL_ADDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white text-adda-600 hover:bg-red-50 font-black text-base shadow-lg transition transform active:scale-95 whitespace-nowrap"
          >
            Redeem on Adda247 Store →
          </a>
        </div>

        {/* Coupon Offers Grid */}
        <div className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span>Active Course Discount Codes</span>
            <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
              {ALL_COUPON_OFFERS.length} Offers Available
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_COUPON_OFFERS.map((offer) => (
              <CouponCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>

        {/* Informative Guidance Section */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            How to Choose the Right Adda247 Coupon Code
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-gray-600 leading-relaxed space-y-3">
            <p>
              When preparing for government competitive examinations in India, selecting the right study material is critical. Adda247 offers specialized Mahapacks—such as Bank Mahapack, SSC Mahapack, and Teaching Mahapack—which bundle live lectures, recorded archives, doubt resolution, and mock test papers for 12 to 24 months.
            </p>
            <p>
              Using the referral code <strong>{PRIMARY_COUPON_CODE}</strong> allows you to verify current concession tiers. Always verify your cart total before entering payment credentials. In case a promotional banner indicates a flash sale, the referral code can often be paired with in-app coin balances for supplementary savings.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <FaqAccordion initialLimit={6} />
        </div>
      </div>
    </div>
  );
}
