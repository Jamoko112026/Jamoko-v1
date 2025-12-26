import { ReactNode } from "react";

interface CalmEnergyCardProps {
  children: ReactNode;
  className?: string;
}

export default function CalmEnergyCard({ children, className = "" }: CalmEnergyCardProps) {
  return (
    <div
      className={`
        relative rounded-3xl p-10 md:p-12
        bg-[#012633]/50 backdrop-blur-xl
        border border-[#013542]/40
        shadow-[0_0_40px_rgba(0,0,0,0.35)]
        transition-all duration-400
        hover:shadow-[0_0_55px_rgba(26,199,164,0.25)]
        hover:-translate-y-1
        ${className}
      `}
    >
      {/* Glow-Bubble */}
      <div className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(26,199,164,0.10),transparent_70%)]
        opacity-60 rounded-3xl
      " />

      {/* Inhalt */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
