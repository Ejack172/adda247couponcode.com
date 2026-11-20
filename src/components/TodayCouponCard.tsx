'use client';

import React, { useState } from 'react';
import { Tag, Copy, Check, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { copyToClipboard } from '@/utils/clipboard';

export default function TodayCouponCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(PRIMARY_COUPON_CODE);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-red-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-card transition-all flex flex-col justify-between h-full">
      <div>
        {/* Card Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-red-50 text-adda-500 flex items-center justify-center">
            <Tag className="w-4 h-4 fill-red-500" />
          </div>
          <h2 className="text-xl font-black text-gray-900 tracking-tight">
            Today&apos;s Adda247 Coupon Code
          </h2>
        </div>

        {/* Promo Box with Dashed Border */}
        <div 
          onClick={handleCopy}
          className="relative p-4 sm:p-5 rounded-2xl bg-red-50/60 border-2 border-dashed border-red-300 hover:border-red-400 transition cursor-pointer group"
          title="Click to copy code"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-black text-adda-600 tracking-wider">
                {PRIMARY_COUPON_CODE}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                className="p-1.5 rounded-lg text-gray-500 hover:text-adda-600 hover:bg-white transition"
                aria-label="Copy today's coupon code"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-emerald-600 stroke-[2.5]" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs tracking-wide shadow-sm">
              Best Offer
            </span>
          </div>

          {copied && (
            <p className="mt-2 text-xs font-bold text-emerald-700 animate-in fade-in">
              ✓ Copied to clipboard! Ready to apply.
            </p>
          )}
        </div>

        {/* Green Notification Callout */}
        <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 fill-emerald-100" />
          <p className="text-xs sm:text-sm font-semibold text-emerald-900 leading-snug">
            Use this code at checkout to get an exclusive discount on Adda247 courses.
          </p>
        </div>

        {/* Short Instructions */}
        <div className="mt-4 text-xs text-gray-500 leading-relaxed space-y-1">
          <p>• Valid for live classes, test series, books &amp; comprehensive Mahapacks.</p>
          <p>• Enter the code during checkout and check the applicable terms before payment.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="w-full sm:flex-1 py-3 px-4 rounded-xl border-2 border-red-500 text-adda-600 hover:bg-red-50 font-bold text-sm flex items-center justify-center gap-2 transition"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Code Copied!' : 'Copy Code'}</span>
        </button>

        <a
          href={OFFICIAL_ADDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-red-500/20 transition transform active:scale-95"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
