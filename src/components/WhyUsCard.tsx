"use client";

import Link from "next/link";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "World's Largest Premium",
    description: "From Bollywood to Hollywood, South Indian to Arabic—an exhaustive collection of sports, news, and classics.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ultra-Fast, Ultra-Smooth",
    description: "Zero buffering with stability you can trust. High-bitrate streaming the way it was meant to be experienced.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Multi-Platform Support",
    description: "Native compatibility for Firestick, Android, iOS, and Smart TVs. Your entertainment, synchronized everywhere.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Real Human Support",
    description: "Our dedicated team is online 24/7. We respond with the speed and precision your home cinema deserves.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function WhyUsCard() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_#d4a57408_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Link href="/" className="inline-block p-3 rounded-2xl bg-white/5 border border-white/10 mb-8 hover:opacity-80 transition-opacity">
            <img 
              src="https://ext.same-assets.com/2445618519/4009277168.png" 
              alt="Logo" 
              className="w-12 h-12 object-contain" 
            />
          </Link>
          <h2 className="heading-large text-white mb-6 tracking-tighter">
            Why Coffee & Donut TV?
          </h2>
          <p className="text-white/40 text-xl font-light max-w-2xl mx-auto italic">
            "Because paying $14.99+ for a single app is a thing of the past."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group flex items-start gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: getStaggerDelay(index, 150) }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#d4a574] group-hover:bg-[#d4a574] group-hover:text-black transition-all duration-500">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#d4a574] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light text-base max-w-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle CTA Section */}
        <div className={`mt-32 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="h-px w-16 bg-[#d4a574]/20 mx-auto mb-12" />
          <h3 className="text-2xl font-bold text-white/90 mb-10 tracking-tighter uppercase tracking-[0.1em]">Ready to redefine your viewing?</h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            {/* Subtle Premium Button */}
            <Link 
              href="/free-trial" 
              className="relative btn-premium px-12 py-5 text-lg overflow-hidden group border border-white/10 hover:border-[#d4a574]/40 transition-all duration-700 rounded-2xl"
              style={{ background: 'linear-gradient(180deg, rgba(212,165,116,0.12) 0%, rgba(212,165,116,0.02) 100%)' }}
            >
              {/* Soft, slow shimmer sweep */}
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[25deg] transition-all duration-[1600ms] ease-in-out group-hover:left-[120%]" />
              
              {/* Internal glow tint */}
              <span className="absolute inset-0 bg-[#d4a574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <span className="relative z-10 font-bold tracking-tight text-white">Start Free Trial</span>
            </Link>

            <a href="https://wa.me/12268943166" className="text-white/30 hover:text-white transition-all duration-500 flex items-center gap-2 group font-light py-2">
              Consult with Support 
              <span className="group-hover:translate-x-1 transition-transform duration-500 text-[#d4a574]/50">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}