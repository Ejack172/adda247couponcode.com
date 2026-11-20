import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Shield, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy – Adda247 Coupon Code',
  description:
    'Read the Privacy Policy of Adda247 Coupon Code (adda247couponcode.com). Information regarding cookie usage, data protection, and user rights.',
  alternates: {
    canonical: 'https://adda247couponcode.com/privacy-policy/',
  },
  openGraph: {
    title: 'Privacy Policy – Adda247 Coupon Code',
    description:
      'Read the Privacy Policy of Adda247 Coupon Code (adda247couponcode.com). Information regarding cookie usage, data protection, and user rights.',
    url: 'https://adda247couponcode.com/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-16 bg-gradient-to-b from-gray-50/50 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: November 20, 2026
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm prose prose-slate max-w-none text-sm text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900">1. Overview</h2>
            <p>
              At Adda247 Coupon Code (&quot;adda247couponcode.com&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we respect your personal privacy. This Privacy Policy outlines what information is collected, how it is handled, and your rights when using our independent coupon publication portal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">2. Information We Do Not Collect</h2>
            <p>
              We do not process course enrollment payments, credit card numbers, bank account numbers, or Aadhaar / PAN identity credentials. All financial transactions take place exclusively on the official checkout portal of Adda247 (adda247.com).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">3. Log Files &amp; Analytics</h2>
            <p>
              Like most websites, we may utilize standard web server logs and privacy-centric analytics to monitor traffic trends, browser types, operating systems, and page visit metrics. This data is strictly aggregated and non-personally identifiable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">4. Cookies &amp; Web Beacons</h2>
            <p>
              We may utilize lightweight session cookies to maintain your user preferences (such as copy-to-clipboard status and search preferences). Third-party vendors or referral tracking networks may use cookies when you click outgoing links to official learning portals.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">5. External Links</h2>
            <p>
              Our website provides links to external websites, primarily adda247.com. We do not control and are not responsible for the privacy practices or content of third-party platforms. We encourage you to read the privacy statements of each external site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900">6. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please reach out to us at: <a href="mailto:privacy@adda247couponcode.com" className="text-adda-600 font-bold hover:underline">privacy@adda247couponcode.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
