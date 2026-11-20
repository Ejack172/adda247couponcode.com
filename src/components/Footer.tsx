import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Mail, MapPin, Heart, ExternalLink } from 'lucide-react';
import { PRIMARY_COUPON_CODE, OFFICIAL_ADDA_URL } from '@/data/coupons';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & About (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center text-white font-black text-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M12 2L2 22h7.5l2.5-5 2.5 5H22L12 2zm0 6.5l3.25 6.5h-6.5L12 8.5z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-white">
                  Adda<span className="text-red-500">247</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                  Coupon Code
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your independent guide for verified Adda247 coupon codes, referral links, and educational offers in November 2026. Empowering Indian aspirants to achieve their dream government careers affordably.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 max-w-sm">
              <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-1">
                Primary Referral Code
              </span>
              <div className="flex items-center justify-between">
                <span className="font-mono text-base font-bold text-red-400">{PRIMARY_COUPON_CODE}</span>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-medium">November 2026</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/coupon-codes/" className="hover:text-white transition">All Coupon Codes</Link>
              </li>
              <li>
                <Link href="/adda247-referral-code/" className="hover:text-white transition">Referral Code REF_HIE37576</Link>
              </li>
              <li>
                <Link href="/adda247-offers/" className="hover:text-white transition">Latest Deals &amp; Offers</Link>
              </li>
              <li>
                <Link href="/how-to-use-adda247-coupon-code/" className="hover:text-white transition">How to Apply Code</Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-white transition">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Exam Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Exam Categories
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/adda247-banking-coupon-code/" className="hover:text-white transition">Banking (SBI, IBPS, RRB)</Link>
              </li>
              <li>
                <Link href="/adda247-ssc-coupon-code/" className="hover:text-white transition">SSC (CGL, CHSL, GD)</Link>
              </li>
              <li>
                <Link href="/adda247-upsc-coupon-code/" className="hover:text-white transition">UPSC &amp; Civil Services</Link>
              </li>
              <li>
                <Link href="/adda247-teaching-coupon-code/" className="hover:text-white transition">Teaching (CTET &amp; TET)</Link>
              </li>
              <li>
                <Link href="/adda247-railway-coupon-code/" className="hover:text-white transition">Railway (RRB NTPC, ALP)</Link>
              </li>
              <li>
                <a href={OFFICIAL_ADDA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition inline-flex items-center gap-1">
                  Official Adda247 Store <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Legal &amp; Trust
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about-us/" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-white transition">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions/" className="hover:text-white transition">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="hover:text-white transition">Disclaimer &amp; Disclosure</Link>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-500">
              <p>Target Market: India 🇮🇳</p>
              <p>Platform: adda247couponcode.com</p>
            </div>
          </div>

        </div>

        {/* Mandatory Transparency & Legal Disclosure (Section 9) */}
        <div className="my-8 p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-200 block mb-1">Independent Information Disclosure:</span>
            <p>
              This website is an independent coupon and referral information website. It is not officially affiliated with, endorsed by, or operated by Adda247. All trademarks belong to their respective owners. Coupon eligibility and promotional terms are subject to the official provider&apos;s conditions.
            </p>
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Adda247 Coupon Code (adda247couponcode.com). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with care for Indian exam aspirants
          </p>
        </div>

      </div>
    </footer>
  );
}
