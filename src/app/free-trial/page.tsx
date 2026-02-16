"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FreeTrialPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    device: "Firestick",
    country: "USA",
    referral: "Instagram",
  });
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

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
            {message && (
              <div className={`mb-6 p-4 rounded-2xl border ${
                message.type === "success" 
                  ? "bg-green-500/10 border-green-500/30 text-green-400" 
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}>
                {message.text}
              </div>
            )}
            <form 
              className="space-y-8" 
              onSubmit={async (e) => { 
                e.preventDefault(); 
                setLoading(true);
                setMessage(null);

                try {
                  const response = await fetch("/api/submit-trial", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                  });

                  const data = await response.json();

                  if (response.ok) {
                    setMessage({
                      type: "success",
                      text: data.message || "Your trial request has been submitted successfully! We'll send your login credentials shortly.",
                    });
                    // Reset form
                    setFormData({
                      email: "",
                      device: "Firestick",
                      country: "USA",
                      referral: "Instagram",
                    });
                  } else {
                    setMessage({
                      type: "error",
                      text: data.error || "Something went wrong. Please try again.",
                    });
                  }
                } catch (error) {
                  setMessage({
                    type: "error",
                    text: "Failed to submit your request. Please try again later.",
                  });
                } finally {
                  setLoading(false);
                }
              }}
            >
              
              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">Delivery Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="where should we send your login?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] transition-all placeholder:text-white/20 text-white"
                />
              </div>

              {/* Device Selection */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">Select your device</label>
                <select 
                  value={formData.device}
                  onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#d4a574] appearance-none cursor-pointer transition-all text-white"
                >
                  <option value="Firestick" className="bg-[#0a0a0a]">Firestick</option>
                  <option value="Smart TV (Samsung/LG)" className="bg-[#0a0a0a]">Smart TV (Samsung/LG)</option>
                  <option value="Android Phone / Tablet" className="bg-[#0a0a0a]">Android Phone / Tablet</option>
                  <option value="Android Box (Nvidia Shield/Buzz)" className="bg-[#0a0a0a]">Android Box (Nvidia Shield/Buzz)</option>
                  <option value="iPhone / iPad" className="bg-[#0a0a0a]">iPhone / iPad</option>
                  <option value="PC / Mac (Browser)" className="bg-[#0a0a0a]">PC / Mac (Browser)</option>
                  <option value="Other" className="bg-[#0a0a0a]">Other</option>
                </select>
              </div>

              {/* Multi-Grid for Country & Referral */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">Your Country</label>
                  <select 
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#d4a574] appearance-none cursor-pointer transition-all text-sm text-white"
                  >
                    <option value="USA" className="bg-[#0a0a0a]">USA</option>
                    <option value="Canada" className="bg-[#0a0a0a]">Canada</option>
                    <option value="UK" className="bg-[#0a0a0a]">UK</option>
                    <option value="Australia" className="bg-[#0a0a0a]">Australia</option>
                    <option value="Middle East" className="bg-[#0a0a0a]">Middle East</option>
                    <option value="Europe" className="bg-[#0a0a0a]">Europe</option>
                    <option value="Other" className="bg-[#0a0a0a]">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-[#d4a574] font-bold">How did you find us?</label>
                  <select 
                    value={formData.referral}
                    onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#d4a574] appearance-none cursor-pointer transition-all text-sm text-white"
                  >
                    <option value="Instagram" className="bg-[#0a0a0a]">Instagram</option>
                    <option value="TikTok" className="bg-[#0a0a0a]">TikTok</option>
                    <option value="Google Search" className="bg-[#0a0a0a]">Google Search</option>
                    <option value="Friend Referral" className="bg-[#0a0a0a]">Friend Referral</option>
                    <option value="Other" className="bg-[#0a0a0a]">Other</option>
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