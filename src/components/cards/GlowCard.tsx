import { ReactNode } from "react";

type GlowLevel = "soft" | "medium" | "strong";
type GlowTone = "teal" | "gold" | "mixed";

export default function GlowCard({
  children,
  className = "",
  glow = "medium",
  tone = "mixed",
}: {
  children: ReactNode;
  className?: string;
  glow?: GlowLevel;
  tone?: GlowTone;
}) {
  const glowColors: Record<GlowTone, string> = {
    teal: "rgba(26,199,164,",
    gold: "rgba(229,197,139,",
    mixed: "rgba(26,199,164,",
  };

  const glowStrength: Record<GlowLevel, number> = {
    soft: 0.12,
    medium: 0.22,
    strong: 0.34,
  };

  return (
    <div
      style={{
        boxShadow: `0 0 40px ${glowColors[tone]}${glowStrength[glow]})`,
      }}
      className={`
        p-8 md:p-10 rounded-2xl
        bg-[#00202b]/70
        backdrop-blur-xl
        border border-[#013542]/40
        hover:shadow-2xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}