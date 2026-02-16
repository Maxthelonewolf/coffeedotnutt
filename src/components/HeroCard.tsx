"use client";

import { useEffect, useRef, useState } from "react";

type Point3D = { x: number; y: number; z: number; color: string; isCup: boolean };
type SteamPoint = { x: number; y: number; z: number; opacity: number; speed: number; sway: number };

function PixelDonut() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number | null>(null);

  const pointsRef = useRef<Point3D[]>([]);
  const steamRef = useRef<SteamPoint[]>([]);
  const rotationRef = useRef({ x: 0.2, y: 0 }); 

  useEffect(() => {
    const updateSize = () => {
      // Adjusted size to be taller to allow steam to travel
      const size = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.8, 800);
      setDimensions({ width: size, height: size });

      const pts: Point3D[] = [];
      const cTan = "34, 44%, 80%";
      const cBrown = "25, 30%, 35%";
      const cIcing = "30, 60%, 90%";

      const addRing = (y: number, radius: number, count: number, color: string, isCup: boolean) => {
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          pts.push({ x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius, color, isCup });
        }
      };

      // 1. GENERATE CUP - Slightly reduced density for a "cleaner" look
      for (let y = 0.6; y >= -0.6; y -= 0.04) {
        const t = (0.6 - y) / 1.2;
        let radius = 0.35 + t * 0.18;
        const isSleeve = y < 0.2 && y > -0.2;
        const color = isSleeve ? cBrown : cTan;
        if (isSleeve) radius *= 1.06;
        addRing(y, radius, Math.floor(radius * 140), color, true);
      }
      for (let y = -0.6; y >= -0.68; y -= 0.02) {
        addRing(y, 0.56, 100, cBrown, true);
      }

      // 2. DONUT
      const dX = 0.42; const dY = 0.45; const dZ = 0.25;
      const majorR = 0.26; const minorR = 0.12;
      for (let p = 0; p < Math.PI * 2; p += 0.1) {
        for (let t = 0; t < Math.PI * 2; t += 0.2) {
          const tx = (majorR + minorR * Math.cos(t)) * Math.cos(p);
          const tz = (majorR + minorR * Math.cos(t)) * Math.sin(p);
          const ty = minorR * Math.sin(t);
          const color = ty < -0.02 ? cIcing : cTan;
          pts.push({ x: tx + dX, y: tz + dY, z: ty + dZ, color, isCup: false });
        }
      }
      pointsRef.current = pts;

      // 3. INITIALIZE STEAM - Higher reset point for longer travel
      const steam = [];
      for(let i = 0; i < 180; i++) { // Increased particle count
        steam.push({
          x: (Math.random() - 0.5) * 0.35,
          y: -0.7 - Math.random() * 1.2, // Spread them out vertically
          z: (Math.random() - 0.5) * 0.35,
          opacity: Math.random() * 0.5,
          speed: 0.003 + Math.random() * 0.005, 
          sway: Math.random() * 10
        });
      }
      steamRef.current = steam;
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      const centerX = dimensions.width / 2;
      
      // SHIFTED DOWN: Moved the centerY from /2 to *0.65 to lower the cup
      const centerY = dimensions.height * 0.65; 
      
      const globalScale = dimensions.width * 0.42;
      const perspective = 800;

      rotationRef.current.y += 0.005;

      const cx = Math.cos(rotationRef.current.x);
      const sx = Math.sin(rotationRef.current.x);
      const cy = Math.cos(rotationRef.current.y);
      const sy = Math.sin(rotationRef.current.y);

      // --- Draw Cup ---
      pointsRef.current.forEach(p => {
        let x, y, zFinal;
        if (p.isCup) {
          const rx = p.x * cy - p.z * sy;
          const rz = p.x * sy + p.z * cy;
          y = p.y * cx - rz * sx;
          zFinal = p.y * sx + rz * cx;
          x = rx;
        } else {
          y = p.y * cx - p.z * sx;
          zFinal = p.y * sx + p.z * cx;
          x = p.x;
        }

        const scale = perspective / (perspective + zFinal * globalScale);
        const screenX = centerX + x * globalScale * scale;
        const screenY = centerY + y * globalScale * scale;

        if (scale > 0) {
          const opacity = Math.max(0.1, (zFinal + 1.2) / 2.8);
          ctx.fillStyle = `hsla(${p.color}, ${opacity})`;
          ctx.beginPath();
          // Slightly smaller points (1.2 instead of 1.8) for a sharper "design" look
          ctx.arc(screenX, screenY, scale * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // --- Draw & Update Steam ---
      ctx.fillStyle = "rgba(255, 255, 255, 1)"; 
      steamRef.current.forEach(s => {
        s.y -= s.speed;
        s.opacity -= 0.002; // Fades slower so it rises higher

        const swayX = Math.sin(s.y * 3 + s.sway) * 0.04;

        // Reset logic: Steam now rises much higher before resetting
        if (s.opacity <= 0 || s.y < -2.5) {
          s.y = -0.7;
          s.opacity = 0.4 + Math.random() * 0.4;
          s.x = (Math.random() - 0.5) * 0.35;
        }

        const sy_rot = s.y * cx - s.z * sx;
        const sz_rot = s.y * sx + s.z * cx;
        const sScale = perspective / (perspective + sz_rot * globalScale);
        const sX = centerX + (s.x + swayX) * globalScale * sScale;
        const sY = centerY + sy_rot * globalScale * sScale;

        ctx.beginPath();
        ctx.globalAlpha = Math.max(0, s.opacity * 0.25);
        // Fluffier, softer steam
        ctx.arc(sX, sY, sScale * 8.0, 0, Math.PI * 2); 
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [dimensions]);

  return (
    <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} className="opacity-80" />
  );
}

export default function HeroCard() {
  return (
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col justify-between items-center">
      <div className="h-24 flex items-end">
         <div className="text-[9px] uppercase tracking-[0.8em] text-white/30 font-medium">
            scroll to explore
         </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full overflow-visible">
        <PixelDonut />
      </div>

      <div className="w-full px-6 pb-12 text-center relative z-20">
        {/* Changed Text to Coffee & Donut TV and refined the sizing */}
        <h1 className="text-[8vw] lg:text-[7vw] font-bold text-white tracking-tighter leading-none uppercase select-none flex items-baseline justify-center">
          Coffee <span className="text-[#d4a574] mx-4">&</span> Donut
          <span className="ml-4">TV</span>
        </h1>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-[#d4a574]/5 blur-[140px] rounded-full pointer-events-none" />
    </section>
  );
}