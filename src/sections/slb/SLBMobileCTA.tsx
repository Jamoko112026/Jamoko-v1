export default function SLBMobileCTA() {
  return (
    <div
      className="
        fixed bottom-0 left-0 w-full z-50
        md:hidden
        px-4 py-3
        bg-[#1E261C]/95 backdrop-blur-lg
        border-t border-white/10
        shadow-[0_-6px_20px_rgba(0,0,0,0.4)]
      "
    >
      <div className="max-w-md mx-auto flex gap-3">

        {/* Primary Action */}
        <a
          href="#kontakt"
          className="
            flex-1
            sl-btn
            text-center
            py-3
            rounded-lg
            text-sm
            font-semibold
          "
        >
          Projekt anfragen
        </a>

        {/* Secondary Action */}
        <a
          href="tel:04050091310"
          className="
            px-4
            py-3
            rounded-lg
            bg-white/10
            text-white
            text-sm
            font-medium
            flex items-center justify-center
            border border-white/10
          "
        >
          Anrufen
        </a>

      </div>
    </div>
  );
}
