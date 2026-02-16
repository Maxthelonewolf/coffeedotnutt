"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const plans = [
  {
    label: "Essential",
    name: "1 Month Pass",
    price: "$6",
    period: "/ mo",
    description: "Experience the full power of CoffeeDonutTV with no commitment.",
    features: ["Full Library Access", "Live TV + Movies", "Cancel Anytime"],
    popular: false,
  },
  {
    label: "Recommended",
    name: "3 Month Pass",
    price: "$18",
    period: "/ 3mo",
    description: "Our most balanced value plan for consistent viewers.",
    features: ["Priority Support", "Same Full Library", "Best Price Balance"],
    popular: true,
  },
  {
    label: "Standard",
    name: "6 Month Pass",
    price: "$36",
    period: "/ 6mo",
    description: "Set it and forget it. Seamless streaming for half a year.",
    features: ["Works on All Devices", "24/7 Support", "Stress-free Setup"],
    popular: false,
  },
  {
    label: "Premium",
    name: "12 Month Pass",
    price: "$72",
    period: "/ yr",
    description: "Maximum value. Minimum cost. The ultimate entertainment choice.",
    features: ["Everything Included", "Full EPG Guide", "Unlimited Access"],
    popular: false,
  },
];

export default function PricingCard() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#050505] overflow-hidden min-h-screen flex items-center">
      {/* Background Polish - Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#d4a5740a_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <span className="text-xs uppercase tracking-[0.6em] text-[#d4a574] font-bold block">
            Select Your Plan
          </span>
          <h2 className="heading-large text-white tracking-tighter">
            One Simple Subscription.
          </h2>
          <div className="pt-4">
            <Link href="/free-trial" className="text-white/40 hover:text-[#d4a574] transition-all duration-300 text-lg border-b border-white/5 hover:border-[#d4a574] pb-1">
              Try It Free — No Credit Card Needed
            </Link>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col p-10 rounded-[40px] transition-all duration-700 border
                ${plan.popular 
                  ? 'bg-[#0c0b0a] border-[#d4a574]/30 shadow-2xl shadow-[#d4a574]/5' 
                  : 'bg-[#0a0a0a] border-white/5 hover:border-white/10 hover:bg-[#0c0c0c]'
                }
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
              `}
              style={{ transitionDelay: getStaggerDelay(index, 100) }}
            >
              {/* Popular Badge */}
              <div className="mb-8">
                <p className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-4 ${plan.popular ? 'text-[#d4a574]' : 'text-white/20'}`}>
                  {plan.label}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                  <span className="text-white/30 text-sm font-light">{plan.period}</span>
                </div>
              </div>

              {/* Description - Fixed height for perfect button alignment */}
              <p className="text-sm text-white/40 leading-relaxed mb-8 min-h-[60px]">
                {plan.description}
              </p>

              {/* Features - Flex Grow pushes CTA to bottom */}
              <div className="flex-grow">
                <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/80 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-[#d4a574]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <a
                href="https://wa.me/12268943166"
                className={`block w-full py-4 text-center rounded-2xl font-bold transition-all duration-500
                  ${plan.popular 
                    ? 'bg-[#d4a574] text-black hover:bg-white hover:scale-[1.02]' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#d4a574]/50'
                  }
                `}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}