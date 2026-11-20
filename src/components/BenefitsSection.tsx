import React from 'react';
import { Zap, Layers, Trophy, ShieldCheck } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      iconColor: 'text-amber-500 bg-amber-50',
      title: 'Extra Discount with Referral Code',
      desc: 'Apply REF_HIE37576 at checkout to unlock available concession pricing on eligible course packages.'
    },
    {
      icon: Layers,
      iconColor: 'text-red-500 bg-red-50',
      title: 'All Major Exams in One Platform',
      desc: 'Access Banking, SSC, UPSC, Teaching, Defence, and State PSC materials in a single ecosystem.'
    },
    {
      icon: Trophy,
      iconColor: 'text-amber-600 bg-amber-50',
      title: 'Trusted by Millions of Learners',
      desc: 'Join millions of ambitious students across India preparing for government and competitive exams.'
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-600 bg-emerald-50',
      title: '100% Safe & Verified Offers',
      desc: 'Direct checkout referral code with no hidden third-party gateways or payment risks.'
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-card hover:border-red-100 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${b.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-adda-600 transition-colors leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                    {b.desc}
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
