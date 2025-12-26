// src/sections/services/MiniSite/MiniSiteHero.tsx
import HeroImg from "../../../assets/minisite/Jamoko_MiniSite_Hero_v1.png";

export default function MiniSiteHero() {
  return (
    <section
      id="minisite-hero"
      className="
        relative w-full pt-40 pb-32 px-6 text-center overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(ellipse_at_center,rgba(229,197,139,0.18),transparent_70%)]
          opacity-70
          pointer-events-none
        "
      />

      {/* Hero Image */}
      <img
        src={HeroImg}
        alt="Mini-Site Hero"
        className="
          relative mx-auto w-full max-w-5xl
          rounded-3xl shadow-[0_0_45px_rgba(0,0,0,0.45)]
        "
      />

      {/* Text Block */}
      <div className="relative mt-14 max-w-3xl mx-auto">
        <h1
          className="
            text-4xl md:text-5xl font-semibold 
            text-jamoko-gold tracking-tight mb-4
          "
        >
          Mini-Site in 7 Tagen
        </h1>

        <p
          className="
            text-lg md:text-xl text-jamoko-text-dim
            leading-relaxed max-w-2xl mx-auto
          "
        >
          Der klarste, ruhigste und schnellste Weg  
          zu einer professionellen Web-Präsenz für lokale Unternehmen.
        </p>

        {/* CTA */}
        <button
          onClick={() => {
            const section = document.getElementById("minisite-offer");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            mt-10 px-8 py-4 rounded-full
            bg-jamoko-gold/20 border border-jamoko-gold/40
            text-jamoko-gold font-medium
            hover:bg-jamoko-gold/30
            transition backdrop-blur-lg
          "
        >
          Zum Angebot
        </button>
      </div>
    </section>
  );
}
