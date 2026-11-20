import React from 'react';
import Link from 'next/link';
import { Layers, Building2, Users, Landmark, GraduationCap, MapPin, Train, Shield, ArrowRight } from 'lucide-react';
import { EXAM_CATEGORIES } from '@/data/categories';

export default function ExamCategories() {
  // Map icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'banking':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'ssc':
        return <Users className="w-6 h-6 text-red-600" />;
      case 'upsc':
        return <Landmark className="w-6 h-6 text-amber-700" />;
      case 'teaching':
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'state-exams':
        return <MapPin className="w-6 h-6 text-purple-600" />;
      case 'railway':
        return <Train className="w-6 h-6 text-indigo-600" />;
      case 'defence':
        return <Shield className="w-6 h-6 text-orange-600" />;
      default:
        return <Layers className="w-6 h-6 text-rose-600" />;
    }
  };

  // 5 primary featured categories from the reference screenshot
  const topFive = EXAM_CATEGORIES.slice(0, 5);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-red-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-card transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-adda-500 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight">
              Popular Exam Categories
            </h2>
          </div>

          <Link
            href="/coupon-codes/"
            className="text-xs font-bold text-adda-600 hover:text-adda-700 flex items-center gap-1"
          >
            All Categories <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5 Category Cards Grid (Matching reference image) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {topFive.map((cat) => (
            <Link
              key={cat.id}
              href={cat.slug}
              className={`p-3.5 rounded-2xl ${cat.colorBg} border ${cat.colorBorder} hover:scale-105 hover:shadow-md transition-all flex flex-col items-center text-center group`}
            >
              <div className="w-11 h-11 rounded-xl bg-white/90 shadow-sm flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                {getIcon(cat.id)}
              </div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900 leading-tight">
                {cat.shortName}
              </h3>
              <p className="text-[11px] text-gray-500 font-medium mt-1 line-clamp-1">
                ({cat.exams.split(', ').slice(0, 3).join(', ')})
              </p>
            </Link>
          ))}
        </div>

        {/* Additional Category Links Bar */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500">
          <span>More categories:</span>
          <div className="flex items-center gap-3">
            <Link href="/adda247-railway-coupon-code/" className="font-semibold text-gray-700 hover:text-adda-600">
              Railway Exams
            </Link>
            <span>•</span>
            <Link href="/adda247-offers/" className="font-semibold text-gray-700 hover:text-adda-600">
              Defence Exams
            </Link>
            <span>•</span>
            <Link href="/coupon-codes/" className="font-semibold text-gray-700 hover:text-adda-600">
              Engineering &amp; Law
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
