'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { HOMEPAGE_FAQS, FaqItem } from '@/data/faqs';

interface FaqAccordionProps {
  initialLimit?: number;
  showAllInitially?: boolean;
}

export default function FaqAccordion({ initialLimit = 4, showAllInitially = false }: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true // First FAQ open by default for immediate answers
  });
  const [showAll, setShowAll] = useState(showAllInitially);

  const toggle = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const displayedFaqs = showAll ? HOMEPAGE_FAQS : HOMEPAGE_FAQS.slice(0, initialLimit);

  // FAQ Schema JSON-LD for rich snippets and AI Overviews
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div id="faqs" className="bg-white rounded-3xl p-6 sm:p-7 border border-red-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-card transition-all flex flex-col justify-between h-full">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-adda-500 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <span className="text-xs font-semibold text-gray-400">
            {HOMEPAGE_FAQS.length} Questions
          </span>
        </div>

        {/* Accordion list */}
        <div className="space-y-2.5">
          {displayedFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="border border-gray-100 rounded-xl overflow-hidden transition-colors hover:border-red-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-3.5 text-left bg-gray-50/50 hover:bg-red-50/40 transition gap-3"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full text-gray-400 group-hover:text-adda-600 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-adda-600" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-3.5 bg-white text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Toggle View More */}
      {!showAllInitially && HOMEPAGE_FAQS.length > initialLimit && (
        <div className="mt-4 pt-3 border-t border-gray-100 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-bold text-adda-600 hover:text-adda-700 hover:underline"
          >
            {showAll ? 'Show Fewer FAQs' : `View All ${HOMEPAGE_FAQS.length} Questions & Answers →`}
          </button>
        </div>
      )}
    </div>
  );
}
