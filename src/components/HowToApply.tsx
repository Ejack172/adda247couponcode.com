import React from 'react';
import Link from 'next/link';
import { Target, Monitor, LayoutGrid, Tag, CheckCircle, ArrowRight } from 'lucide-react';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';

export default function HowToApply() {
  const steps = [
    {
      num: 1,
      icon: Monitor,
      title: 'Visit Adda247.com',
      desc: 'Open the website or download the official Adda247 mobile app.'
    },
    {
      num: 2,
      icon: LayoutGrid,
      title: 'Choose Your Course',
      desc: 'Browse Banking, SSC, UPSC, or State Exam batches and add to cart.'
    },
    {
      num: 3,
      icon: Tag,
      title: `Enter Code ${PRIMARY_COUPON_CODE}`,
      desc: 'Paste the coupon code into the "Apply Coupon" input field at checkout.'
    },
    {
      num: 4,
      icon: CheckCircle,
      title: 'Get Instant Discount',
      desc: 'Verify the discounted cart total and complete your enrollment securely.'
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-red-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-card transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-adda-500 flex items-center justify-center">
              <Target className="w-4 h-4 text-adda-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight">
              How to Apply Adda247 Coupon Code?
            </h2>
          </div>

          <Link
            href="/how-to-use-adda247-coupon-code/"
            className="text-xs font-bold text-adda-600 hover:text-adda-700 flex items-center gap-1"
          >
            Detailed Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Steps Visual Flow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex flex-col items-center text-center relative group">
                
                {/* Step Number Badge */}
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-red-600 to-red-500 text-white font-bold text-xs flex items-center justify-center shadow-md mb-2 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>

                {/* Step Icon */}
                <div className="w-12 h-12 rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center text-adda-600 mb-2 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Step Title */}
                <h3 className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                  {step.title}
                </h3>

                {/* Step Subtitle / Description */}
                <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                  {step.desc}
                </p>

                {/* Connector arrow (except for last item) */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-7 -right-3 w-6 text-red-300 pointer-events-none">
                    <span className="text-base font-bold">⇢</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">Ready to start learning?</span>
        <a
          href={OFFICIAL_ADDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-adda-600 hover:text-adda-700 flex items-center gap-1 hover:underline"
        >
          Go to Adda247 Store <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
