'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, ArrowRight, Tag } from 'lucide-react';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { copyToClipboard } from '@/utils/clipboard';

export default function StickyCouponBar() {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the hero (e.g. 300px)
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = async () => {
    const ok = await copyToClipboard(PRIMARY_COUPON_CODE);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-red-200/80 shadow-[0_-4px_25px_rgba(227,27,43,0.12)] p-2.5 sm:p-3 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-2 sm:px-4">
        
        {/* Left: Code Box */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xs:flex w-9 h-9 rounded-xl bg-red-50 text-adda-600 items-center justify-center">
            <Tag className="w-4 h-4 fill-current" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
              November 2026 Code
            </div>
            <div className="font-mono text-sm sm:text-base font-black text-adda-600 tracking-wide">
              {PRIMARY_COUPON_CODE}
            </div>
          </div>
        </div>

        {/* Center / Right: Copy & Apply Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl border border-red-400 bg-red-50 hover:bg-red-100 text-adda-600 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition active:scale-95"
            aria-label="Copy coupon code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Code'}</span>
            <span className="sm:hidden">{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <a
            href={OFFICIAL_ADDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-red-500/25 transition active:scale-95"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
