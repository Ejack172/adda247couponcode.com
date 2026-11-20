'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, Tag, ArrowRight } from 'lucide-react';
import { EXAM_CATEGORIES } from '@/data/categories';
import { PRIMARY_COUPON_CODE } from '@/data/coupons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCategories = EXAM_CATEGORIES.filter((cat) =>
    cat.name.toLowerCase().includes(query.toLowerCase()) ||
    cat.exams.toLowerCase().includes(query.toLowerCase()) ||
    cat.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search exam categories (e.g. Banking, SSC CGL, UPSC, CTET)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-2 text-base text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
            autoFocus
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {/* Quick Active Code Callout */}
          <div className="p-3.5 bg-red-50/70 border border-red-100 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-red-500 text-white rounded-lg">
                <Tag className="w-4 h-4" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase text-red-600">Active Coupon Code</span>
                <p className="font-mono font-bold text-gray-900 text-sm tracking-wide">{PRIMARY_COUPON_CODE}</p>
              </div>
            </div>
            <Link
              href="/coupon-codes/"
              onClick={onClose}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              View Offers <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2 mb-2">
              Exam Categories & Study Materials
            </h4>
            <div className="space-y-1.5">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.slug}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-gray-900">{cat.name}</div>
                        <div className="text-xs text-gray-500">{cat.exams}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-red-600">
                      View Coupons →
                    </span>
                  </Link>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No categories found matching &quot;{query}&quot;.
                </div>
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 px-2">
            <span>Press ESC to exit</span>
            <Link href="/how-to-use-adda247-coupon-code/" onClick={onClose} className="hover:text-adda-500">
              Need help applying code?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
