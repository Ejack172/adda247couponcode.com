'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Gift, Copy, Check, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Smartphone, Award } from 'lucide-react';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';
import { copyToClipboard } from '@/utils/clipboard';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(PRIMARY_COUPON_CODE);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-gradient-to-b from-[#FFF5F6] via-[#FFF9FA] to-white border-b border-red-50">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag: Latest & Verified */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/70 text-adda-600 text-xs sm:text-sm font-bold shadow-sm">
              <Gift className="w-4 h-4 text-adda-500 animate-pulse" />
              <span>Latest &amp; Verified</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black text-adda-dark tracking-tight leading-[1.15]">
              Adda247 Coupon Codes &amp; Discount Codes{' '}
              <span className="text-adda-500 underline decoration-red-200 decoration-wavy decoration-2">
                November 2026
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Get the latest Adda247 coupon code and referral code to save on your exam preparation courses.
              Explore discounts for Banking, SSC, UPSC, Teaching, State Government Exams and more.
            </p>

            {/* Hero Coupon Bar Card */}
            <div className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-soft border border-red-100 max-w-xl">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <span className="text-sm font-bold text-gray-700 whitespace-nowrap pl-2">
                  Coupon Code:
                </span>
                
                {/* Dashed Code Box */}
                <div 
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border-2 border-dashed border-red-400 bg-red-50/50 hover:bg-red-50 cursor-pointer transition group"
                  title="Click to copy coupon code"
                >
                  <span className="font-mono text-base sm:text-lg font-black tracking-wider text-adda-600 selection:bg-red-200">
                    {PRIMARY_COUPON_CODE}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy();
                    }}
                    className="p-1.5 rounded-lg text-adda-600 group-hover:scale-110 hover:bg-red-100 transition"
                    aria-label="Copy coupon code"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-emerald-600 stroke-[2.5]" />
                    ) : (
                      <Copy className="w-5 h-5 stroke-[2.2]" />
                    )}
                  </button>
                </div>

                {/* Apply Button */}
                <a
                  href={OFFICIAL_ADDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm sm:text-base shadow-md shadow-red-500/25 transition-all transform active:scale-95"
                >
                  <span>Apply &amp; Get Discount</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Copied feedback inline message */}
              {copied && (
                <div className="mt-2 text-xs font-semibold text-emerald-600 flex items-center gap-1.5 pl-2 animate-in fade-in slide-in-from-top-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Code copied! Paste it in the coupon box on the Adda247 checkout page.</span>
                </div>
              )}
            </div>

            {/* Verification Features Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-1 text-xs sm:text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>Verified &amp; Working</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>Maximum Discount</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>Applicable on All Courses</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual (5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Soft Pink Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-300/40 via-pink-200/50 to-red-100/30 rounded-[2.5rem] transform rotate-1 scale-95 blur-xl -z-10" />

              {/* Mobile App Mockup Card & Illustration */}
              <div className="relative bg-gradient-to-b from-white to-red-50/40 p-4 sm:p-6 rounded-3xl border border-red-100/80 shadow-xl overflow-hidden">
                
                {/* Floating Badge: Active 2026 */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-red-100 shadow-sm text-xs font-bold text-adda-600">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>November 2026 Edition</span>
                </div>

                {/* Smartphone Mockup */}
                <div className="relative mx-auto w-full max-w-[280px] bg-white rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
                  
                  {/* Phone Speaker & Camera Notch */}
                  <div className="bg-gray-800 h-5 w-full flex items-center justify-center">
                    <div className="w-16 h-3 bg-gray-900 rounded-b-lg flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-gray-700 rounded-full" />
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className="p-4 space-y-3 bg-gradient-to-b from-white to-gray-50 text-left">
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded bg-red-600 text-white flex items-center justify-center text-[10px] font-black">A</span>
                        <span className="font-extrabold text-sm text-gray-900">Adda247</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span className="text-[10px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-bold">App</span>
                      </div>
                    </div>

                    {/* App Title */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">
                        Prepare for Your Dream Exam
                      </h4>
                      <p className="text-[10px] text-gray-500">Live Classes • Tests • Mahapacks</p>
                    </div>

                    {/* Category List Items (Matching Reference Screenshot) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-blue-50/70 border border-blue-100/60 text-xs font-semibold text-blue-900 hover:bg-blue-100/60 transition cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🏦</span>
                          <span>Banking Exams</span>
                        </div>
                        <span className="text-blue-500 font-bold">›</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-red-50/70 border border-red-100/60 text-xs font-semibold text-red-900 hover:bg-red-100/60 transition cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-base">👥</span>
                          <span>SSC Exams</span>
                        </div>
                        <span className="text-red-500 font-bold">›</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/70 border border-amber-100/60 text-xs font-semibold text-amber-900 hover:bg-amber-100/60 transition cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🏛️</span>
                          <span>UPSC Exams</span>
                        </div>
                        <span className="text-amber-600 font-bold">›</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-purple-50/70 border border-purple-100/60 text-xs font-semibold text-purple-900 hover:bg-purple-100/60 transition cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-base">📍</span>
                          <span>State Exams</span>
                        </div>
                        <span className="text-purple-500 font-bold">›</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/70 border border-emerald-100/60 text-xs font-semibold text-emerald-900 hover:bg-emerald-100/60 transition cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🎓</span>
                          <span>Teaching Exams</span>
                        </div>
                        <span className="text-emerald-500 font-bold">›</span>
                      </div>
                    </div>

                    {/* Promo Mini Card */}
                    <div className="p-2 rounded-xl bg-red-500 text-white text-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-red-100">Checkout Referral Code</span>
                      <div className="font-mono text-xs font-black tracking-wider">{PRIMARY_COUPON_CODE}</div>
                    </div>

                  </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-gray-600">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Trusted by Indian Aspirants Nationwide</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
