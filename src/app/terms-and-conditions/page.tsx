import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions – Adda247 Coupon Code',
  description:
    'Review the Terms and Conditions for using adda247couponcode.com. Information on user responsibilities, coupon availability, and intellectual property.',
  alternates: {
    canonical: 'https://adda247couponcode.com/terms-and-conditions/',
  },
  openGraph: {
    title: 'Terms and Conditions – Adda247 Coupon Code',
    description:
      'Review the Terms and Conditions for using adda247couponcode.com. Information on user responsibilities, coupon availability, and intellectual property.',
    url: 'https://adda247couponcode.com/terms-and-conditions/',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pb-16 bg-gradient-to-b from-gray-50/50 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>User Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: November 20, 2026
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm prose prose-slate max-w-none text-sm text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>adda247couponcode.com</strong>, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree, please discontinue using this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">2. Informational Purpose &amp; No Warranty</h2>
            <p>
              The content, coupon codes, and promotional details published on this website are provided strictly for general informational purposes. While we endeavor to ensure coupon accuracy, coupon codes are subject to alteration, suspension, or cancellation by the merchant (Adda247) without prior notice. We do not guarantee that any code will function for your specific selected batch or subscription tier.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">3. Non-Affiliation &amp; Intellectual Property</h2>
            <p>
              &quot;Adda247&quot;, &quot;Adda 247&quot;, and related brand marks are the registered trademarks of Metis Eduventures Private Limited or their respective owners. This website is an independent informational and referral hub and is not officially affiliated with, sponsored by, or operated by Adda247.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">4. User Responsibilities</h2>
            <p>
              Users are responsible for confirming all order terms, refund policies, course validity durations, and final billing totals directly on adda247.com prior to executing payments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">5. Limitation of Liability</h2>
            <p>
              In no event shall the authors, operators, or contributors of adda247couponcode.com be liable for any direct, indirect, consequential, or incidental losses or damages arising out of your use or inability to use the codes and information provided on this platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">6. Amendments to Terms</h2>
            <p>
              We reserve the right to revise these terms at any time. Continued usage of our website following any posted modifications indicates acceptance of the amended terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
