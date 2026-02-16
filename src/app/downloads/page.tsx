"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const mobileFeatures = [
  "Built for touchscreens",
  "Smooth, fast navigation",
  "Clean layout for daily watching",
  "Perfect for mobile & casual viewing",
];

const tvFeatures = [
  "Designed for large screens",
  "Remote-friendly navigation",
  "Advanced EPG & channel management",
  "Favorites, categories, full control",
];

const chooseIf = [
  { condition: "Watching on your phone", app: "Mobile App" },
  { condition: "Watching on your TV", app: "TV App" },
  { condition: "Using a remote", app: "TV App" },
  { condition: "Using touch", app: "Mobile App" },
];

export default function DownloadsPage() {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: chooseRef, isVisible: chooseVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<"mobile" | "tv" | null>(null);

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      <Header />

      {/* Hero Section - REFINED TYPOGRAPHY */}
      <section className="relative pt-44 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#d4a574]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
             <img 
               src="https://ext.same-assets.com/2445618519/4009277168.png" 
               className="w-16 h-16 object-contain drop-shadow-2xl" 
               alt="Logo" 
             />
          </div>
          
          {/* Fixed: Removed the massive overflow text for a premium, italicized look */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter italic uppercase leading-tight">
            Download <span className="text-[#d4a574]">the App</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Choose your experience. Optimized for your device. <br className="hidden md:block" /> 
            Brewed for comfort.
          </p>

          <div className="mt-12 flex flex-col items-center gap-3 opacity-40">
            <div className="w-px h-16 bg-gradient-to-b from-[#d4a574] to-transparent" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4a574]">Select Your Device</p>
          </div>
        </div>
      </section>

      {/* App Cards Section - PERFECT ALIGNMENT */}
      <section className="relative pb-32">
        <div 
          ref={cardsRef}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
        >
          {/* MOBILE CARD */}
          <div
            className={`group relative flex flex-col rounded-[2.5rem] p-px bg-gradient-to-b from-white/20 to-transparent transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            onMouseEnter={() => setHoveredCard("mobile")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex-1 bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-12 flex flex-col items-center text-center border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#d4a574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 mb-10">
                <p className="text-[#d4a574] text-[10px] font-black tracking-[0.4em] uppercase mb-2 opacity-60">Powered by XCIPTV</p>
                <h3 className="text-3xl font-bold text-white tracking-tight">Mobile & Touch</h3>
              </div>

              <div className="relative w-full aspect-video mb-12 flex items-center justify-center">
                <div className="absolute w-4/5 h-4/5 bg-[#d4a574]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="https://ext.same-assets.com/1630699721/2275043001.png"
                  alt="Mobile Interface"
                  className="relative z-10 h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* FEATURES - FLEX-1 ensures the Downloader box stays at the bottom */}
              <div className="flex-1 w-full text-left space-y-4 mb-12">
                <p className="text-white/20 text-xs italic mb-6 text-center italic">"Perfect for phones and tablets"</p>
                {mobileFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/50 text-sm">
                    <span className="text-[#d4a574]">✓</span> {f}
                  </div>
                ))}
              </div>

              {/* DOWNLOADER BOX */}
              <div className="w-full bg-black/50 border border-white/5 rounded-2xl p-6 mb-8 group/box hover:border-[#d4a574]/40 transition-colors duration-500">
                <p className="text-white/20 text-[10px] uppercase tracking-widest mb-2">Install via Downloader</p>
                <div className="text-4xl font-black text-white tracking-[0.2em] group-hover/box:text-[#d4a574] transition-colors">8138590</div>
              </div>

              <a 
                href="https://drive.google.com/file/d/13F3ohJWfzIhg0JnL6lEogDo4sgA9TKTf/view?usp=drivesdk"
                target="_blank"
                className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all text-center"
              >
                Install Mobile App
              </a>
            </div>
          </div>

          {/* TV CARD */}
          <div
            className={`group relative flex flex-col rounded-[2.5rem] p-px bg-gradient-to-b from-[#d4a574]/40 to-transparent transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: '200ms' }}
            onMouseEnter={() => setHoveredCard("tv")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4a574] text-black text-[10px] font-black px-5 py-1.5 rounded-full tracking-[0.2em] uppercase z-20 shadow-xl">
              TV Edition
            </div>

            <div className="flex-1 bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-12 flex flex-col items-center text-center border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#d4a574]/10 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 mb-10">
                <p className="text-[#d4a574] text-[10px] font-black tracking-[0.4em] uppercase mb-2">Powered by TiviMate</p>
                <h3 className="text-3xl font-bold text-white tracking-tight">TV Edition</h3>
              </div>

              <div className="relative w-full aspect-video mb-12 flex items-center justify-center">
                <div className="absolute w-4/5 h-4/5 bg-[#d4a574]/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="https://ext.same-assets.com/1630699721/3569676639.png"
                  alt="TV Interface"
                  className="relative z-10 h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </div>

              <div className="flex-1 w-full text-left space-y-4 mb-12">
                <p className="text-white/20 text-xs italic mb-6 text-center italic">"The ultimate cinema experience"</p>
                {tvFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/50 text-sm">
                    <span className="text-[#d4a574]">✓</span> {f}
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#d4a574]/5 border border-[#d4a574]/20 rounded-2xl p-6 mb-8 group/box hover:border-[#d4a574]/60 transition-colors duration-500">
                <p className="text-[#d4a574]/40 text-[10px] uppercase tracking-widest mb-2">Install via Downloader</p>
                <div className="text-4xl font-black text-white tracking-[0.2em]">3374467</div>
              </div>

              <a 
                href="https://drive.google.com/file/d/1ALzIIq6ffe-gK2XhiHWg4jJF1824HZLG/view?usp=drivesdk"
                target="_blank"
                className="w-full py-5 rounded-2xl bg-[#d4a574] text-black font-black hover:bg-[#c39463] transition-all text-center shadow-[0_0_30px_rgba(212,165,116,0.2)]"
              >
                Install TV App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div ref={chooseRef} className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${chooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-3xl font-bold text-white text-center mb-16 tracking-tight">Which one should I use?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chooseIf.map((item, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all">
                <span className="text-white/40 text-sm">{item.condition}</span>
                <span className="text-[#d4a574] font-bold text-sm group-hover:translate-x-1 transition-transform">{item.app} →</span>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <a href="/free-trial" className="inline-block px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-[#d4a574] transition-colors uppercase tracking-widest text-sm">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}