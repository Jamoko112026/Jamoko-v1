// src/components/cards/ValueGlowCard.tsx

interface ValueGlowCardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  borderStrength?: string;
}

export default function ValueGlowCard({
  title,
  icon,
  borderStrength = "15",
  children,
}: ValueGlowCardProps) {
  return (
    <div
      className={`
        group
        rounded-3xl
        p-8 md:p-9
        bg-[#01212d]/70
        backdrop-blur-md
        border border-jamoko-gold/${borderStrength}
        shadow-[0_0_25px_rgba(229,197,139,0.07)]
        transition-all duration-300
        hover:shadow-[0_0_45px_rgba(229,197,139,0.18)]
        hover:border-jamoko-gold/30

        /* ===== STABILITY FIX ===== */
        flex flex-col
        justify-start
        h-full
        overflow-hidden
      `}
    >
      {/* ICON */}
      {icon && (
        <div className="text-4xl mb-5 opacity-80 group-hover:opacity-100 transition">
          {icon}
        </div>
      )}

      {/* TITLE */}
      {title && (
        <h3 className="text-xl md:text-2xl leading-snug text-jamoko-gold mb-3 break-words">
          {title}
        </h3>
      )}

      {/* DESCRIPTION */}
      <div className="text-jamoko-text-dim leading-relaxed space-y-2 break-words">
        {children}
      </div>
    </div>
  );
}