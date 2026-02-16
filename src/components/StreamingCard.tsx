"use client";

import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const channelLogos = [
  { name: "HBO", src: "https://ext.same-assets.com/2445618519/94563639.svg" },
  { name: "Sony", src: "https://ext.same-assets.com/2445618519/692668889.png" },
  { name: "TSN", src: "https://ext.same-assets.com/2445618519/109875500.svg" },
  { name: "CN", src: "https://ext.same-assets.com/2445618519/2755205201.svg" },
  { name: "Zee TV", src: "https://ext.same-assets.com/2445618519/985132198.svg" },
  { name: "ESPN", src: "https://ext.same-assets.com/2445618519/156502069.svg" },
  { name: "Discovery", src: "https://ext.same-assets.com/2445618519/1139100259.png" },
];

const features = [
  {
    title: "Live TV",
    description: "Instant access to news, sports, and world-class entertainment.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "On-Demand",
    description: "A massive library of cinema and series, ready when you are.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Omnichannel",
    description: "Seamless viewing on TVs, phones, tablets, and computers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const moviePosters = [
  "https://ext.same-assets.com/2445618519/439296362.jpeg",
  "https://ext.same-assets.com/2445618519/2640006925.jpeg",
  "https://ext.same-assets.com/2445618519/948904875.jpeg",
  "https://ext.same-assets.com/2445618519/3562189087.jpeg",
  "https://ext.same-assets.com/2445618519/2707747745.jpeg",
  "https://ext.same-assets.com/2445618519/2119253642.jpeg",
];

export default function StreamingCard() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* 1. Logo Marquee - Keeping this as the entry point */}
      <div className="w-full mb-32">
        <div className="mask-edges overflow-hidden relative border-y border-white/5 py-8">
          <div className="flex gap-24 animate-marquee items-center">
            {[...channelLogos, ...channelLogos, ...channelLogos].map((channel, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={channel.src}
                  alt={channel.name}
                  className="h-7 md:h-9 w-auto object-contain brightness-90 hover:brightness-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* 2. Headline Section */}
        <div className={`text-center mb-28 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="heading-large text-white mb-6 tracking-tighter">
            Cinema in the Comfort <br className="hidden md:block" /> of Your Home.
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need for ultimate entertainment, <br className="hidden md:block" /> perfectly synced across all your devices.
          </p>
        </div>

        {/* 3. Features Grid - FIXED WITH GLOW EFFECTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: getStaggerDelay(index, 150) }}
            >
              {/* Icon Container: Added hover:scale and gold glow blur */}
              <div className="relative w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-[#d4a574] mb-8 border border-white/10 group-hover:border-[#d4a574]/50 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-black/80">
                
                {/* Internal Glow Effect */}
                <div className="absolute inset-0 bg-[#d4a574]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>

              <div className="space-y-4 max-w-[280px]">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#d4a574] transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light text-base md:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Movie Posters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {moviePosters.map((poster, index) => (
            <div
              key={index}
              className={`relative aspect-[2/3] rounded-2xl overflow-hidden bg-white/5 border border-white/5 transition-all duration-[1200ms] group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: getStaggerDelay(index + 3, 100) }}
            >
              <img
                src={poster}
                alt={`Movie ${index + 1}`}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1000ms] ease-out"
              />
              
              {/* Silk Shimmer sweep */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[25deg] transition-all duration-[1000ms] ease-in-out group-hover:left-[150%] z-20 pointer-events-none" />

              {/* Dynamic Gold Border Glow */}
              <div className="absolute inset-0 border border-[#d4a574]/0 group-hover:border-[#d4a574]/30 transition-colors duration-700 rounded-2xl z-30 pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}