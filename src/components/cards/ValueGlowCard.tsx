// src/components/cards/ValueGlowCard.tsx

interface ValueGlowCardProps {
  title?: string;
  icon?: React.ReactNode;   // <-- ICON IST JETZT REACTNODE
  children: React.ReactNode;
  borderStrength?: string;  // falls du das nutzen möchtest
}

export default function ValueGlowCard({
  title,
  icon,
  borderStrength = "15",     // ✅ Default
  children,
}: ValueGlowCardProps) {
  return (
    <div
      className={`
        group p-10 rounded-3xl
        bg-[#01212d]/70
        backdrop-blur-md
        border border-jamoko-gold/${borderStrength}
        shadow-[0_0_25px_rgba(229,197,139,0.07)]
        transition-all duration-300
        hover:shadow-[0_0_45px_rgba(229,197,139,0.18)]
        hover:border-jamoko-gold/30
      `}
    >
      {/* ICON */}
      {icon && (
        <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 transition">
          {icon}
        </div>
      )}

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-jamoko-gold mb-4">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-jamoko-text-dim leading-relaxed">
        {children}
      </p>
    </div>
  );
}
