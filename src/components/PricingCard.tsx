"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// MATHEMATICALLY CORRECT FLAT-RATE
type Duration = 1 | 3 | 6 | 12;

type PricingInfo = {
  standard: string;
  premium: string;
  label: string;
  tag?: string;
};

const pricingData: Record<Duration, PricingInfo> = {
  1: { standard: "$6", premium: "$8", label: "1 Month" },
  3: { standard: "$18", premium: "$24", label: "3 Months" },
  6: { standard: "$36", premium: "$48", label: "6 Months", tag: "Most Popular" },
  12: { standard: "$72", premium: "$96", label: "12 Months", tag: "Best Value" },
};

export default function PricingCard() {
  const [selectedDuration, setSelectedDuration] = useState<Duration>(1);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  
  const words = ["Subscription.", "Experience.", "Platform.", "TV Solution."];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev: number) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentPricing: PricingInfo = pricingData[selectedDuration as Duration];
  
  const getWhatsAppLink = (tier: string, price: string) => {
    const message = encodeURIComponent(`Hi! I want to try the ${tier} ${currentPricing.label} plan for ${price}.`);
    return `https://wa.me/12268943166?text=${message}`;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#050505] min-h-screen flex flex-col items-center justify-start overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-6 w-full relative">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4a574]/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* --- 1. HEADER (Matched to Image) --- */}
        <div className="mb-10 text-center relative z-10 flex flex-col items-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.6em] text-[#d4a574] mb-4">
            Select Your Plan
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 flex flex-col md:flex-row items-center justify-center gap-3">
            <span>One Simple</span>
            <span key={wordIndex} className="text-white/40 animate-in fade-in slide-in-from-bottom-2 duration-700">
              {words[wordIndex]}
            </span>
          </h2>
          <div className="border-b border-white/5 pb-2">
            <p className="text-[#888] text-lg md:text-xl font-medium tracking-tight">
              Try It Free — No Credit Card Needed
            </p>
          </div>
        </div>

        {/* --- 2. TOP TOGGLE --- */}
        <div className="flex justify-center mb-12 relative z-20">
          <div className="bg-[#111] border border-white/10 p-1 rounded-full flex gap-1 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {([1, 3, 6, 12] as Duration[]).map((m) => (
              <button
                key={m}
                onClick={() => setSelectedDuration(m)}
                className={`px-5 md:px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300
                  ${selectedDuration === m 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                {m === 1 ? '1 Month' : `${m} Months`}
              </button>
            ))}
          </div>
        </div>

        {/* --- 3. PRICING CARDS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch relative z-10">
          
          {/* STANDARD CARD */}
          <div className={`group flex flex-col p-8 md:p-12 rounded-[40px] border border-white/5 bg-[#0a0a0a] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="mb-8">
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-2 text-white/30">Entry Level</h3>
              <h4 className="text-3xl font-bold text-white uppercase tracking-tight">Standard</h4>
            </div>
            
            <div className="mb-10 pb-8 border-b border-white/5 h-[90px] flex items-baseline">
              <div key={selectedDuration} className="animate-in fade-in zoom-in-95 duration-500">
                <span className="text-7xl font-black text-white tracking-tighter">
                  {currentPricing.standard}
                </span>
                <span className="text-[10px] uppercase text-white/20 ml-3 tracking-widest font-bold">
                  / {currentPricing.label}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-white/60 font-medium text-sm italic">✦ Standard Server</li>
              <li className="flex items-center gap-3 text-white/90 font-medium text-sm">✦ 34,261+ Live Channels</li>
              <li className="flex items-center gap-3 text-white/90 font-medium text-sm">✦ 123,499+ Movies</li>
              <li className="flex items-center gap-3 text-white/90 font-medium text-sm">✦ 30,481+ Series</li>
              <li className="flex items-center gap-3 text-white/50 text-xs">✦ Full HD Quality</li>
              <li className="flex items-center gap-3 text-white/50 text-xs">✦ 1 Connection</li>
              <li className="flex items-center gap-3 text-white/50 text-xs">✦ 24/7 Support</li>
            </ul>

            <a 
              href={getWhatsAppLink("Standard", currentPricing.standard)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 text-center rounded-2xl bg-white/10 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* ULTRA ELITE CARD */}
          <div className={`relative flex flex-col p-8 md:p-12 rounded-[40px] border-2 border-[#d4a574]/30 bg-gradient-to-b from-[#1a130d] to-[#0d0c0b] shadow-[0_0_60px_-15px_rgba(212,165,116,0.2)] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#d4a574]">Recommended</h3>
                {currentPricing.tag && (
                  <span className="text-[8px] bg-[#d4a574] text-black px-3 py-1 rounded-full font-black uppercase tracking-tighter">
                    {currentPricing.tag}
                  </span>
                )}
              </div>
              <h4 className="text-3xl font-bold text-white uppercase tracking-tight">Ultra Elite</h4>
            </div>
            
            <div className="mb-10 pb-8 border-b border-white/5 h-[90px] flex items-baseline">
              <div key={`premium-${selectedDuration}`} className="animate-in fade-in zoom-in-95 duration-500">
                <span className="text-7xl font-black text-[#d4a574] tracking-tighter">
                  {currentPricing.premium}
                </span>
                <span className="text-[10px] uppercase text-white/20 ml-3 tracking-widest font-bold">
                  / {currentPricing.label}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-[#d4a574] font-black text-sm uppercase tracking-tight">✦ VIP Anti-Freeze Server</li>
              <li className="flex items-center gap-3 text-white font-bold text-sm">✦ 34,261+ Live Channels</li>
              <li className="flex items-center gap-3 text-white font-bold text-sm">✦ 123,499+ Movies</li>
              <li className="flex items-center gap-3 text-white font-bold text-sm">✦ 30,481+ Series</li>
              <li className="flex items-center gap-3 text-white text-xs font-bold text-[#d4a574]">✦ Full HD & 4K Quality</li>
              <li className="flex items-center gap-3 text-white text-xs font-bold">✦ 1 Connection</li>
              <li className="flex items-center gap-3 text-white text-xs font-bold">✦ 7-day Catch-up Included</li>
              <li className="flex items-center gap-3 text-white text-xs font-bold">✦ 24/7 Support</li>
            </ul>

            <a 
              href={getWhatsAppLink("Premium", currentPricing.premium)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 text-center rounded-2xl bg-[#d4a574] text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(212,165,116,0.3)] active:scale-95"
            >
              Get Premium Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}