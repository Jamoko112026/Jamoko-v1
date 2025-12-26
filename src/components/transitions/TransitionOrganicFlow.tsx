// src/components/transitions/TransitionOrganicFlow.tsx

export default function TransitionOrganicFlow() {
  return (
    <div
      className="
        h-32 w-full relative overflow-hidden
      "
    >
      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(ellipse_at_center,
          rgba(229,197,139,0.15),transparent_70%)]
          opacity-40
        "
      />
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b
          from-transparent
          via-[#012533]/50
          to-[#001821]
        "
      />
    </div>
  );
}
