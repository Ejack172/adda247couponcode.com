import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Target, Users, BookOpen, Heart, Award } from 'lucide-react';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';

export const metadata: Metadata = {
  title: 'About Us – Adda247 Coupon Code & Student Savings Portal',
  description:
    'Learn about Adda247 Coupon Code (adda247couponcode.com), an independent student savings platform dedicated to helping Indian competitive exam aspirants find verified discounts.',
  alternates: {
    canonical: 'https://adda247couponcode.com/about-us/',
  },
  openGraph: {
    title: 'About Us – Adda247 Coupon Code & Student Savings Portal',
    description:
      'Learn about Adda247 Coupon Code (adda247couponcode.com), an independent student savings platform dedicated to helping Indian competitive exam aspirants find verified discounts.',
    url: 'https://adda247couponcode.com/about-us/',
  },
};

export default function AboutUsPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Integrity & Transparency',
      desc: 'We never publish misleading discounts or fabricate verification timestamps. We provide actual codes and test their eligibility.'
    },
    {
      icon: Target,
      title: 'Aspirant-Centric Mission',
      desc: 'Our sole mission is helping students from every corner of India access quality exam coaching at reasonable fees.'
    },
    {
      icon: Users,
      title: 'Community Referral Sharing',
      desc: 'By sharing community referral tokens like REF_HIE37576, we bridge the gap between aspirants and official course discounts.'
    }
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-red-50/30 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-adda-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-red-500" />
            <span>Our Mission &amp; Purpose</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            About Adda247 Coupon Code
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Empowering millions of Indian government job aspirants with verified promotional savings and referral codes.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-6 mb-12 text-sm sm:text-base text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-black text-gray-900">
            Who We Are
          </h2>
          <p>
            <strong>adda247couponcode.com</strong> is an independent digital resource created to help students across India identify genuine fee concessions, referral offers, and coupon codes for test preparation on Adda247.
          </p>
          <p>
            Whether you are preparing for Banking (SBI PO, IBPS Clerk), Staff Selection Commission (SSC CGL, CHSL), Civil Services (UPSC CSE), Central Teacher Eligibility Test (CTET), Railways, or State Public Service Commissions, accessing quality educators should not be constrained by exorbitant coaching fees.
          </p>
          <p>
            We curate, test, and publish active referral codes such as <strong>{PRIMARY_COUPON_CODE}</strong>, providing step-by-step instructions so that candidates can apply them transparently at checkout.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-card transition">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-adda-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="font-black text-base text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Independent Status Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 space-y-2 text-xs sm:text-sm">
          <h3 className="font-bold text-white text-base">Important Disclosure</h3>
          <p className="leading-relaxed">
            This website is an independent coupon and referral information website. It is not officially affiliated with, endorsed by, or operated by Adda247. All trademarks, service marks, trade names, and logos belong to their respective owners. Coupon eligibility and promotional terms are subject to the official provider&apos;s conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
