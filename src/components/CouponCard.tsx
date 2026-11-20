'use client';

import React, { useState } from 'react';
import { Tag, Copy, Check, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { CouponOffer, PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { copyToClipboard } from '@/utils/clipboard';

interface CouponCardProps {
  offer: CouponOffer;
  highlight?: boolean;
}

export default function CouponCard({ offer, highlight = false }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(offer.code);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className={`p-5 sm:p-6 rounded-3xl bg-white border transition-all ${
      highlight
        ? 'border-red-300 shadow-md ring-2 ring-red-500/10'
        : 'border-gray-200 shadow-sm hover:border-red-200 hover:shadow-card'
    }`}>
      {/* Top Meta */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-adda-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
          {offer.category}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>{offer.badge}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-black text-gray-900 leading-snug">
        {offer.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {offer.description}
      </p>

      {/* Code Box */}
      <div className="mt-4 p-3 rounded-2xl bg-red-50/50 border-2 border-dashed border-red-200 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold uppercase text-gray-400 block">Referral Code</span>
          <span className="font-mono text-lg font-black text-adda-600 tracking-wider">
            {offer.code}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-xl bg-white border border-red-200 hover:bg-red-50 text-adda-600 font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Instructions & Expiry */}
      <div className="mt-3 text-xs text-gray-500 space-y-1">
        <p>• {offer.instructions}</p>
        <p className="text-gray-400 font-medium">Valid for: {offer.expiryNote}</p>
      </div>

      {/* Apply Button */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <a
          href={offer.applyUrl || OFFICIAL_ADDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow transition"
        >
          <span>Apply Code on Adda247</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
