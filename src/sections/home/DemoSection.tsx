import { Link } from "react-router-dom";

export default function DemoSection() {
  return (
    <section id="beispiele" className="py-28 px-6 bg-[#001821] text-center">

      <div className="max-w-5xl mx-auto">

        {/* HEADLINE */}
        <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
          So kann sich Ihre Website anfühlen
        </h2>

        <p className="text-white/60 mb-20 max-w-2xl mx-auto leading-relaxed">
          Klarheit statt Überforderung. Ruhe statt Lautstärke.  
          Websites, die nicht erklären müssen – sondern sofort wirken.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* PHYSIO */}
          <Link
            to="/demos/physio"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#001821] transition duration-300 hover:border-[#E5C58B]/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden">

              <img
                src="/physio/physio_hero.jpg"
                alt="Physiotherapie Website"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001821]/30 to-[#001821]/90" />

            </div>

            <div className="p-6 text-left">

              <h3 className="text-white text-lg mb-2">
                Physiotherapie
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Vertrauen beginnt im ersten Moment.  
                Klar geführt. Ruhig aufgebaut.
              </p>

              <p className="mt-5 text-[#E5C58B] opacity-70 group-hover:opacity-100 transition">
                ansehen →
              </p>

            </div>
          </Link>

          {/* ULI GLASER */}
          <Link
            to="/demos/uli-glaser"
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#001821] transition duration-300 hover:border-[#E5C58B]/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden">

              <img
                src="/feine-handwerkskunst/uli_hero_watch.jpg"
                alt="Feine Handwerkskunst Website"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001821]/30 to-[#001821]/90" />

              {/* subtiler Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.10),transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-500" />

            </div>

            <div className="p-6 text-left">

              <h3 className="text-white text-lg mb-2">
                Feine Handwerkskunst
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Wert sichtbar machen.  
                Qualität spürbar zeigen.
              </p>

              <p className="mt-5 text-[#E5C58B] opacity-70 group-hover:opacity-100 transition">
                ansehen →
              </p>

            </div>
          </Link>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-20 text-white/30 text-sm">
          Weitere Beispiele entstehen aktuell
        </p>

      </div>
    </section>
  );
}