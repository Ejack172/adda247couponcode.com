import React from 'react';
import { PiggyBank, Share2, Search, CheckSquare, Sparkles } from 'lucide-react';

export default function WhyUseSection() {
  const points = [
    {
      icon: PiggyBank,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      title: 'How Coupon Codes Help Students',
      description: 'Competitive exam preparation requires top-tier video lessons, mock test series, and mentorship. Utilizing an active Adda247 promo code reduces out-of-pocket expenses for Indian candidates, making premium government job coaching accessible on tight student budgets.'
    },
    {
      icon: Share2,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      title: 'How Referral Codes Work',
      description: 'Referral codes such as REF_HIE37576 are official community tokens provided to students. When entered at the cart stage, the Adda247 checkout engine checks if your chosen Mahapack or individual batch qualifies for partner discount tiers.'
    },
    {
      icon: Search,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      title: 'How to Find Applicable Offers',
      description: 'Adda247 regularly runs festive campaigns, month-end clearance offers, and double validity promotions on Mahapacks. We continuously monitor and index active coupon codes so you never miss a real price drop across Banking, SSC, UPSC, and State exams.'
    },
    {
      icon: CheckSquare,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      title: 'Verify the Final Price Before Purchasing',
      description: 'Always review the order summary on the official checkout screen. Ensure the discount is reflected in the net payable balance before submitting UPI, NetBanking, or card details. If a code does not discount your specific batch, check alternate eligible packages.'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-red-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-adda-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Smart Student Savings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            Why Use Adda247 Coupon Code?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Learn how referral codes operate, how to maximize course value, and how to verify legitimate savings for your competitive exam journey.
          </p>
        </div>

        {/* 4 Informative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-red-100 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-4 ${point.color}`}>
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
