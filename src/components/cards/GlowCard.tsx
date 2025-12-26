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
      className={`
        p-8 md:p-10 rounded-2xl
        bg-[#00202b]/70 backdrop-blur-xl border border-[#013542]/40
        shadow-[0_0_40px_${glowColors[tone]}${glowStrength[glow]}]
        hover:shadow-[0_0_70px_${glowColors[tone]}0.4]
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
