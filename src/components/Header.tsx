'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, Menu, X, Sparkles, ExternalLink } from 'lucide-react';
import SearchModal from './SearchModal';
import { OFFICIAL_ADDA_URL } from '@/data/coupons';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [examsDropdown, setExamsDropdown] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 flex items-center justify-center shadow-md shadow-red-500/20 text-white font-black text-xl tracking-tighter">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                  <path d="M12 2L2 22h7.5l2.5-5 2.5 5H22L12 2zm0 6.5l3.25 6.5h-6.5L12 8.5z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black tracking-tight text-adda-500">Adda</span>
                  <span className="text-2xl font-black tracking-tight text-adda-dark">247</span>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500 mt-0.5">
                  Coupon Code
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/') ? 'text-adda-500' : 'text-gray-700 hover:text-adda-500'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-adda-500 rounded-full" />
                )}
              </Link>

              <Link
                href="/coupon-codes/"
                className={`px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/coupon-codes/') ? 'text-adda-500' : 'text-gray-700 hover:text-adda-500'
                }`}
              >
                Coupon Codes
              </Link>

              {/* Courses Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCoursesDropdown(true)}
                onMouseLeave={() => setCoursesDropdown(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-adda-500 transition-colors"
                >
                  Courses
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-adda-500" />
                </button>
                {coursesDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/adda247-banking-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      Banking Video Batches
                    </Link>
                    <Link
                      href="/adda247-ssc-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      SSC CGL & CHSL Batches
                    </Link>
                    <Link
                      href="/adda247-upsc-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      UPSC Foundation Courses
                    </Link>
                    <Link
                      href="/adda247-teaching-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      Teaching (CTET & State TET)
                    </Link>
                    <Link
                      href="/adda247-railway-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      Railway NTPC & Group D
                    </Link>
                  </div>
                )}
              </div>

              {/* Exams Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setExamsDropdown(true)}
                onMouseLeave={() => setExamsDropdown(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-adda-500 transition-colors"
                >
                  Exams
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-adda-500" />
                </button>
                {examsDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/adda247-banking-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      Banking (SBI, IBPS, RRB)
                    </Link>
                    <Link
                      href="/adda247-ssc-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      SSC (CGL, CHSL, GD, MTS)
                    </Link>
                    <Link
                      href="/adda247-upsc-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      UPSC (CSE, CDS, NDA)
                    </Link>
                    <Link
                      href="/adda247-teaching-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      Teaching (CTET, PRT, TGT)
                    </Link>
                    <Link
                      href="/adda247-railway-coupon-code/"
                      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50/60 hover:text-adda-600 transition"
                    >
                      Railways (NTPC, ALP, JE)
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/adda247-offers/"
                className={`px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/adda247-offers/') ? 'text-adda-500' : 'text-gray-700 hover:text-adda-500'
                }`}
              >
                Deals
              </Link>

              <Link
                href="/how-to-use-adda247-coupon-code/"
                className={`px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/how-to-use-adda247-coupon-code/') ? 'text-adda-500' : 'text-gray-700 hover:text-adda-500'
                }`}
              >
                How to Apply
              </Link>

              <Link
                href="/#faqs"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-adda-500 transition-colors"
              >
                FAQs
              </Link>
            </nav>

            {/* Right side Actions */}
            <div className="flex items-center gap-3">
              {/* Search button */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-adda-500 hover:bg-red-50/60 transition"
                aria-label="Search Adda247 coupons and exams"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Get Adda247 Discount CTA Button */}
              <a
                href={OFFICIAL_ADDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30 transition-all transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get Adda247 Discount</span>
              </a>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-red-50 hover:text-adda-500"
            >
              Home
            </Link>
            <Link
              href="/coupon-codes/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-red-50 hover:text-adda-500"
            >
              Coupon Codes
            </Link>
            <Link
              href="/adda247-referral-code/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-red-50 hover:text-adda-500"
            >
              Referral Code REF_HIE37576
            </Link>
            <Link
              href="/adda247-offers/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-red-50 hover:text-adda-500"
            >
              Latest Deals & Offers
            </Link>
            <div className="pt-2 pb-1 border-t border-gray-100">
              <span className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Exam Categories</span>
              <div className="grid grid-cols-2 gap-1.5 mt-2">
                <Link
                  href="/adda247-banking-coupon-code/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-adda-600"
                >
                  Banking
                </Link>
                <Link
                  href="/adda247-ssc-coupon-code/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-adda-600"
                >
                  SSC
                </Link>
                <Link
                  href="/adda247-upsc-coupon-code/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-adda-600"
                >
                  UPSC
                </Link>
                <Link
                  href="/adda247-teaching-coupon-code/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-adda-600"
                >
                  Teaching
                </Link>
                <Link
                  href="/adda247-railway-coupon-code/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-adda-600"
                >
                  Railway
                </Link>
                <Link
                  href="/how-to-use-adda247-coupon-code/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-50 hover:text-adda-600"
                >
                  How to Apply
                </Link>
              </div>
            </div>
            <div className="pt-3">
              <a
                href={OFFICIAL_ADDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 rounded-xl shadow-md"
              >
                <span>Visit Adda247 Official</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
