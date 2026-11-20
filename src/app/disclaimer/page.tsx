import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';

export const metadata: Metadata = {
  title: 'Disclaimer & Transparency Disclosure – Adda247 Coupon Code',
  description:
    'Read our complete Disclaimer and Disclosure statement. adda247couponcode.com is an independent informational and referral portal not affiliated with Adda247.',
  alternates: {
    canonical: 'https://adda247couponcode.com/disclaimer/',
  },
  openGraph: {
    title: 'Disclaimer & Transparency Disclosure – Adda247 Coupon Code',
    description:
      'Read our complete Disclaimer and Disclosure statement. adda247couponcode.com is an independent informational and referral portal not affiliated with Adda247.',
    url: 'https://adda247couponcode.com/disclaimer/',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="pb-16 bg-gradient-to-b from-gray-50/50 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparency Statement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Disclaimer &amp; Disclosure
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Effective Date: November 20, 2026
          </p>
        </div>

        {/* Primary Alert Box */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-red-50/70 border-2 border-red-200 text-red-950 space-y-3">
          <div className="flex items-center gap-2 text-adda-600 font-black text-base uppercase tracking-wider">
            <AlertCircle className="w-5 h-5" />
            <span>Mandatory Independent Disclosure</span>
          </div>
          <p className="text-sm sm:text-base font-semibold leading-relaxed">
            This website is an independent coupon and referral information website. It is not officially affiliated with, endorsed by, or operated by Adda247. All trademarks belong to their respective owners. Coupon eligibility and promotional terms are subject to the official provider&apos;s conditions.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm prose prose-slate max-w-none text-sm text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900">1. Trademark and Copyright Notice</h2>
            <p>
              &quot;Adda247&quot;, &quot;Adda 247&quot;, the Adda247 logo, and course titles (such as Bank Mahapack, SSC Mahapack) are registered trademarks and property of their respective owners (Metis Eduventures Pvt. Ltd.). Any use of these brand names, product references, or exam trademarks on this website is purely for descriptive, illustrative, and nominative fair-use purposes to help students find relevant discounts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">2. Referral Program Disclosure</h2>
            <p>
              Certain links on this website and coupon codes such as <strong>{PRIMARY_COUPON_CODE}</strong> are referral or affiliate identifiers. When a student applies this code or clicks through to purchase on adda247.com, we may receive a small referral credit or commission from the merchant at zero additional cost to the student. This helps support the maintenance of our independent free service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">3. No Guarantee of Discount or Pricing</h2>
            <p>
              Course pricing, promotional validity, percentage reductions, and referral token acceptance are determined solely by Adda247 at the time of transaction. While we test and verify codes regularly, we cannot guarantee that any code will work for every single course or user account. Users are advised to verify the discounted total on the official Adda247 checkout page before paying.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">4. Educational Advice Disclaimer</h2>
            <p>
              The content provided on this website is for informational purposes only and does not constitute formal educational counseling, career advice, or official testing agency announcements. For official recruitment notifications and exam dates, always consult the respective bodies (IBPS, SSC, UPSC, NTA, RRB).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
