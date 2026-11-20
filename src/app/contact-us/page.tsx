'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Coupon Code Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pb-16 bg-gradient-to-b from-red-50/30 via-white to-white min-h-screen">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-adda-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Support &amp; Feedback</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Have a question about Adda247 coupon codes, report an expired offer, or need assistance? Reach out to our community team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Details Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
              <h2 className="text-xl font-black text-gray-900">Get in Touch</h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                We review user submissions and update our coupon directory daily to ensure maximum validity for Indian exam aspirants.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-adda-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Email Address</span>
                    <span className="font-semibold text-gray-900">support@adda247couponcode.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-adda-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Target Region</span>
                    <span className="font-semibold text-gray-900">New Delhi &amp; Pan-India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold block mb-1">Official Support Note:</span>
              For questions regarding existing course purchases, refunds, account access, or technical app issues on Adda247, please contact Adda247 directly via their official website (adda247.com).
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-gray-900">Message Received!</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you for contacting us. Our team will review your inquiry and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-black text-gray-900 mb-2">Send Us a Message</h2>
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500 text-sm"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500 text-sm"
                    placeholder="e.g. rahul@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500 text-sm bg-white"
                  >
                    <option>Coupon Code Inquiry</option>
                    <option>Report Expired Code</option>
                    <option>Suggest New Offer</option>
                    <option>General Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-500 text-sm"
                    placeholder="How can we assist you with Adda247 coupon codes?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-red-500/20 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
