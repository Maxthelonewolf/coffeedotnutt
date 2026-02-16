"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FreeTrialPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#d4a574] selection:text-black">
      <Header />

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4a574]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#d4a574]/5 blur-[120px] rounded-full" />
      </div>

      <section className="relative z-10 pt-44 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-6">
              Start Your <br />
              <span className="text-[#d4a574]">24-Hour Free Trial</span>
            </h1>
            <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
              No personal info needed — only your email to deliver your instant login credentials.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setLoading(true); }}>
              
              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">Delivery Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="where should we send your login?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] transition-all placeholder:text-white/20"
                />
              </div>

              {/* Device Selection */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">Select your device</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#d4a574] appearance-none cursor-pointer transition-all">
                  <option className="bg-[#0a0a0a]">Firestick</option>
                  <option className="bg-[#0a0a0a]">Smart TV (Samsung/LG)</option>
                  <option className="bg-[#0a0a0a]">Android Phone / Tablet</option>
                  <option className="bg-[#0a0a0a]">Android Box (Nvidia Shield/Buzz)</option>
                  <option className="bg-[#0a0a0a]">iPhone / iPad</option>
                  <option className="bg-[#0a0a0a]">PC / Mac (Browser)</option>
                  <option className="bg-[#0a0a0a]">Other</option>
                </select>
              </div>

              {/* Multi-Grid for Country & Referral */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">Your Country</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#d4a574] appearance-none cursor-pointer transition-all text-sm">
                    <option className="bg-[#0a0a0a]">USA</option>
                    <option className="bg-[#0a0a0a]">Canada</option>
                    <option className="bg-[#0a0a0a]">UK</option>
                    <option className="bg-[#0a0a0a]">Australia</option>
                    <option className="bg-[#0a0a0a]">Middle East</option>
                    <option className="bg-[#0a0a0a]">Europe</option>
                    <option className="bg-[#0a0a0a]">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">How did you find us?</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#d4a574] appearance-none cursor-pointer transition-all text-sm">
                    <option className="bg-[#0a0a0a]">Instagram</option>
                    <option className="bg-[#0a0a0a]">TikTok</option>
                    <option className="bg-[#0a0a0a]">Google Search</option>
                    <option className="bg-[#0a0a0a]">Friend Referral</option>
                    <option className="bg-[#0a0a0a]">Other</option>
                  </select>
                </div>
              </div>

              {/* Agreement */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <input type="checkbox" required className="w-5 h-5 accent-[#d4a574] cursor-pointer" />
                <p className="text-xs text-white/40 leading-relaxed">
                  I understand this trial is valid for 24 hours and login details will be sent to the email provided above.
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={loading}
                className="group relative w-full bg-[#d4a574] text-black font-black py-6 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? "BREWING YOUR TRIAL..." : "GET MY FREE TRIAL"}
                  {!loading && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                </div>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex flex-col items-center gap-4 opacity-30">
            <div className="flex gap-8 italic font-medium text-sm">
              <span>9,500+ Channels</span>
              <span>•</span>
              <span>4K Support</span>
              <span>•</span>
              <span>Instant Setup</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}