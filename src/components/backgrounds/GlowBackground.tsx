// src/components/backgrounds/GlowBackground.tsx

import { ReactNode } from "react";

export default function GlowBackground({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        relative w-full min-h-screen overflow-hidden 
        bg-jamoko-navy text-jamoko-text
        ${className}
      `}
    >
      {/* --- GOLD → TEAL DIAGONAL LIGHT SWEEP --- */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-br 
          from-jamoko-gold/15 
          via-transparent 
          to-jamoko-teal/20 
          pointer-events-none 
          mix-blend-screen
        "
      />

      {/* --- SOFT NAVY BASE GLOW --- */}
      <div
        className="
          absolute inset-0 
          bg-jamoko-navy 
          opacity-60 
          blur-3xl 
          pointer-events-none
        "
      />

      {/* --- MICRO KRAKEN PATTERN (sehr subtil) --- */}
      <div
        className="
          absolute inset-0 opacity-[0.035] pointer-events-none
          bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTSAwIDIwIEMgMTUgMTUgMjUgMjUgNDAgMjAnIHN0cm9rZT0nI0U1QzU4Qicgc3Ryb2tlLXdpZHRoPScwLjcnIGZpbGw9J25vbmUnIG9wYWNpdHk9JzAuNScvPjwvc3ZnPg==')]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
