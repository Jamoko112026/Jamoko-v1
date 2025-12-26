// src/components/transitions/TransitionJellyFlow.tsx

export default function TransitionJellyFlow() {
  return (
    <div className="h-44 w-full relative overflow-hidden">

      {/* Jelly Glow Main */}
      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(circle_at_40%_20%,
          rgba(229,197,139,0.35) 0%,
          rgba(26,199,164,0.25) 35%,
          transparent 70%)]
          opacity-60
        "
      />

      {/* Soft Navy base */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-[#012533]/60
          to-[#001821]
        "
      />

      {/* Tentacle-like wisps */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_bottom_left,
          rgba(26,199,164,0.18),transparent_60%)]
          opacity-40
        "
      />
    </div>
  );
}
