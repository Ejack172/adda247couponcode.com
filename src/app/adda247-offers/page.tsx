import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CouponCard from '@/components/CouponCard';
import FaqAccordion from '@/components/FaqAccordion';
import { ALL_COUPON_OFFERS, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { Flame, Clock, Sparkles, Gift, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adda247 Offers November 2026 – Deals, Mahapack Discounts & Promo Codes',
  description:
    'Explore the latest Adda247 offers and promotional discounts for November 2026. Use code REF_HIE37576 for major savings on Mahapacks, live batches, and test series.',
  alternates: {
    canonical: 'https://adda247couponcode.com/adda247-offers/',
  },
  openGraph: {
    title: 'Adda247 Offers November 2026 – Deals, Mahapack Discounts & Promo Codes',
    description:
      'Explore the latest Adda247 offers and promotional discounts for November 2026. Use code REF_HIE37576 for major savings on Mahapacks, live batches, and test series.',
    url: 'https://adda247couponcode.com/adda247-offers/',
  },
};

export default function Adda247OffersPage() {
  const deals = [
    {
      title: 'Adda247 Mahapack Special Offer',
      badge: 'Best Value Deal',
      desc: 'Mahapacks include unlimited live classes, test series, e-books, and video courses for all exams under a category (Bank, SSC, Teaching, or State Exams).',
      code: PRIMARY_COUPON_CODE,
      highlight: true
    },
    {
      title: 'Double Validity Promotion',
      badge: 'Limited Period',
      desc: 'Selected Adda247 batches and Mahapacks receive double validity (e.g., 12 months + 12 months free). Apply referral code REF_HIE37576 to verify eligibility.',
      code: PRIMARY_COUPON_CODE,
      highlight: false
    },
    {
      title: 'Adda247 Prime Test Series Pass',
      badge: 'Aspirant Favorite',
      desc: 'Over 10,000+ bilingual mock tests with All-India ranking, detailed analytics, and detailed video solutions across government exams.',
      code: PRIMARY_COUPON_CODE,
      highlight: false
    }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-red-50/30 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Adda247 Offers' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-adda-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-red-500" />
            <span>Trending November 2026 Offers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Latest Adda247 Offers &amp; Promotions
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Find current promotions, seasonal offers, and coupon codes for banking, SSC, and state civil exams.
          </p>
        </div>

        {/* Featured Deals Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-white border flex flex-col justify-between transition-all ${
                deal.highlight
                  ? 'border-red-400 shadow-md ring-2 ring-red-500/10'
                  : 'border-gray-200 shadow-sm hover:border-red-200'
              }`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-adda-600 bg-red-50 px-2.5 py-1 rounded-full">
                  {deal.badge}
                </span>
                <h3 className="text-xl font-black text-gray-900 mt-3 mb-2 leading-tight">
                  {deal.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {deal.desc}
                </p>
              </div>

              <div>
                <div className="p-3 bg-red-50/60 rounded-xl border border-red-200 text-center mb-4">
                  <span className="text-[11px] font-bold text-gray-500 uppercase block">Apply Code at Checkout</span>
                  <span className="font-mono text-base font-black text-adda-600">{deal.code}</span>
                </div>
                <a
                  href={OFFICIAL_ADDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Check Offer on Adda247</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Available Course Cards */}
        <div className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            Category-Specific Coupon Codes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_COUPON_OFFERS.map((offer) => (
              <CouponCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <FaqAccordion initialLimit={5} />
        </div>
      </div>
    </div>
  );
}
