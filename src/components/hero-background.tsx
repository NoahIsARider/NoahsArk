'use client';

import { useEffect, useState } from 'react';

export function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: 'url(/hero-bg.jpeg)',
          filter: 'contrast(1.05) brightness(0.92)',
        }}
      />

      {/* Deep space gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/45 via-[#0a0a0a]/20 to-[#0a0a0a]/65" />

      {/* Diagonal crimson accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#e63946]/20 to-transparent"
        style={{
          transform: 'rotate(-15deg) translateX(30vw)',
          transformOrigin: 'top center',
        }}
      />

      {/* Texture overlay for grain effect */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: 'url(/texture-overlay.jpeg)',
          backgroundSize: 'cover',
        }}
      />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="w-full h-px bg-[#f5f0e8]"
          style={{
            animation: 'scanline 8s linear infinite',
          }}
        />
      </div>

      {/* Corner geometric decorations */}
      <svg className="absolute top-8 left-8 w-16 h-16 text-[#e63946]/20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M0 0 L24 0 M0 0 L0 24" />
        <rect x="4" y="4" width="4" height="4" fill="currentColor" stroke="none" />
      </svg>

      <svg className="absolute bottom-8 right-8 w-16 h-16 text-[#e63946]/20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M64 64 L40 64 M64 64 L64 40" />
        <rect x="56" y="56" width="4" height="4" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
