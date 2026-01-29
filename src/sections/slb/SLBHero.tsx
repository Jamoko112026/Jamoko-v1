import HeroImage from "@/assets/slb/hero/SLB_Hero_Main_v2.jpg";

export default function SLBHero() {
  return (
    <section
      className="
        relative
        min-h-[60vh] md:min-h-[72vh]
        flex items-center justify-center
        pt-28 md:pt-32
        px-4
        bg-cover bg-[center_35%]
      "
      style={{ backgroundImage: `url(${HeroImage})` }}
    >

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[rgba(8,14,22,0.35)]
          to-[rgba(6,10,18,0.78)]
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-3xl px-4 md:px-6">

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-wide">
          SL BauTec GmbH
        </h1>

        <p className="text-base md:text-lg text-white/80 mb-7 leading-relaxed">
          Straßenbau · Tiefbau · Glasfasertechnik<br />
          Infrastrukturprojekte für Hamburg & Schleswig-Holstein
        </p>

        <a
          href="#contact"
          className="
            inline-block
            px-8 md:px-10
            py-3
            rounded-md
            font-semibold
            text-[#111]
            bg-gradient-to-b from-[#FFD08A] to-[#F28C28]
            shadow-[0_12px_30px_rgba(0,0,0,0.45)]
            hover:-translate-y-[2px]
            hover:shadow-[0_18px_40px_rgba(0,0,0,0.6)]
            transition-all duration-200
          "
        >
          Projekt anfragen
        </a>

      </div>

    </section>
  );
}
