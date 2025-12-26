// src/components/sections/GlowSection.tsx

import { ReactNode } from "react";

export default function GlowSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`
        relative py-32 px-6
        bg-gradient-to-b from-[#012b36] via-[#012027] to-[#001821]
        text-jamoko-text
        overflow-hidden
        ${className}
      `}
    >
      {/* Innerer Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(229,197,139,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
