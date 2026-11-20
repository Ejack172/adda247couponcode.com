import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import HowToApply from '@/components/HowToApply';
import FaqAccordion from '@/components/FaqAccordion';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { HelpCircle, CheckCircle2, AlertTriangle, ArrowRight, Smartphone, Monitor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Use Adda247 Coupon Code – Step-by-Step Checkout Guide (Nov 2026)',
  description:
    'Learn how to apply Adda247 coupon code REF_HIE37576 at checkout. Detailed visual tutorial for both the Adda247 website and mobile app to claim your course discount.',
  alternates: {
    canonical: 'https://adda247couponcode.com/how-to-use-adda247-coupon-code/',
  },
  openGraph: {
    title: 'How to Use Adda247 Coupon Code – Step-by-Step Checkout Guide (Nov 2026)',
    description:
      'Learn how to apply Adda247 coupon code REF_HIE37576 at checkout. Detailed visual tutorial for both the Adda247 website and mobile app to claim your course discount.',
    url: 'https://adda247couponcode.com/how-to-use-adda247-coupon-code/',
  },
};

export default function HowToUsePage() {
  const troubleshootingTips = [
    {
      issue: 'Coupon code not recognized',
      solution: `Double-check the exact spelling of ${PRIMARY_COUPON_CODE}. Codes are case-sensitive. Ensure there are no leading or trailing whitespace characters.`
    },
    {
      issue: 'Discount not reflected in cart total',
      solution: 'Certain flash-deal packages or standalone test packages may have preset minimum pricing where coupon codes are restricted by institutional policy.'
    },
    {
      issue: 'Combining with App Coins',
      solution: 'On the Adda247 mobile app, you can tick the "Use Coins" checkbox alongside the referral code to get an extra marginal discount.'
    },
    {
      issue: 'Multiple codes entered',
      solution: 'Adda247 supports one coupon code per transaction. If you enter a new code, it overrides the previously entered code.'
    }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-red-50/30 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'How to Apply' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-adda-600 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Step-by-Step Tutorial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            How to Apply Adda247 Coupon Code
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Follow this clear 4-step process to apply referral code <span className="font-mono font-bold text-adda-600">{PRIMARY_COUPON_CODE}</span> during checkout on the Adda247 website or app.
          </p>
        </div>

        {/* Visual 4-Step Card */}
        <div className="mb-14">
          <HowToApply />
        </div>

        {/* Detailed Tutorial Steps */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-8">
          <h2 className="text-2xl font-black text-gray-900">
            Detailed Walkthrough for November 2026
          </h2>

          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="font-bold text-base text-gray-900">Navigate to Adda247 Official Portal</h3>
              </div>
              <p className="text-sm text-gray-600 pl-10 leading-relaxed">
                Open <a href={OFFICIAL_ADDA_URL} target="_blank" rel="noopener noreferrer" className="text-adda-600 font-bold hover:underline">adda247.com</a> on your desktop browser or open the Adda247 application on your Android or iOS device. Ensure you are logged into your student account.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                <h3 className="font-bold text-base text-gray-900">Select Your Target Exam &amp; Course Batch</h3>
              </div>
              <p className="text-sm text-gray-600 pl-10 leading-relaxed">
                Navigate to your chosen exam category (e.g. Banking Mahapack, SSC CGL Foundation, UPSC CSE, or CTET). Click &quot;Buy Now&quot; to proceed to the order summary and checkout page.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="font-bold text-base text-gray-900">Locate &quot;Have a Coupon Code?&quot; and Enter REF_HIE37576</h3>
              </div>
              <p className="text-sm text-gray-600 pl-10 leading-relaxed">
                On the order overview, you will find an input box labeled &quot;Enter Coupon Code / Referral Code&quot;. Type or paste <strong className="text-adda-600 font-mono">{PRIMARY_COUPON_CODE}</strong> into this field and tap the &quot;Apply&quot; button.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">4</span>
                <h3 className="font-bold text-base text-gray-900">Review Price Reduction &amp; Complete Secure Payment</h3>
              </div>
              <p className="text-sm text-gray-600 pl-10 leading-relaxed">
                Verify that the total payable amount has been updated with your coupon discount. Select your payment method (UPI, Google Pay, PhonePe, Paytm, Debit/Credit Card, or NetBanking) to complete your order safely.
              </p>
            </div>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <span>Troubleshooting Coupon Issues</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {troubleshootingTips.map((tip, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70">
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">{tip.issue}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{tip.solution}</p>
              </div>
            ))}
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
