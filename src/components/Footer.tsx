"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Aesthetic Background Polish */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(circle_at_center,_#d4a57405_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Pillar */}
          <div className="lg:col-span-5 space-y-8">
            <a href="/" className="flex items-center gap-5 group cursor-pointer">
              <div className="relative">
                <img
                  src="https://ext.same-assets.com/2445618519/4009277168.png"
                  alt="Coffee & Donut TV"
                  className="w-16 h-16 object-contain grayscale brightness-125 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#d4a574]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tighter text-white uppercase">
                  Coffee & Donut TV
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4a574] font-bold">
                  Premium Streaming Service
                </p>
              </div>
            </a>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-md italic">
              "A cozy cup of entertainment—brewed daily. 9,500+ channels and 125,000+ cinematic experiences at your fingertips."
            </p>
          </div>

          {/* Navigation Pillar */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-10">
              Navigation
            </h4>
            <nav className="grid grid-cols-1 gap-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Free Trial", href: "/free-trial" },
                { name: "Downloads", href: "/downloads" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/40 hover:text-[#d4a574] hover:translate-x-2 transition-all duration-300 text-base font-light flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-[#d4a574] group-hover:w-4 transition-all" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Pillar */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-10">
              Let&apos;s Talk
            </h4>
            <a
              href="https://wa.me/12268943166"
              className="text-3xl md:text-4xl font-bold text-white hover:text-[#d4a574] transition-all duration-500 mb-8 tracking-tighter"
            >
              +1 (226) 894-3166
            </a>
            <div className="flex gap-4">
              {[
                { name: "TikTok", href: "https://tiktok.com/@coffee.donut.tv", icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" },
                { name: "Instagram", href: "https://www.instagram.com/coffeedonuttv", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-14 h-14 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/20 hover:bg-[#d4a574] hover:text-black hover:scale-110 transition-all duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest text-white/20 font-bold">
            <span className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              Worldwide System Active
            </span>
            <span className="text-white/40">{time}</span>
          </div>

          <div className="text-[11px] uppercase tracking-[0.4em] text-white/10 font-black">
            Coffee & Donut TV &copy; 2014-{year}
          </div>
        </div>
      </div>
    </footer>
  );
}