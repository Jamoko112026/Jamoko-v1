import { motion } from "framer-motion"
import workspaceImage from "@/assets/jamoko/hero/jamoko_hero_workspace_v1.jpeg";

export default function UweHaberstroh() {
  return (
    <main className="w-full bg-[#001821] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* IMAGE (ersetzen) */}
        <img
          src={workspaceImage}
          alt="Ruhiger Arbeitsplatz als Motiv für das Beratungskonzept"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#001821]/70" />

        {/* GOLD GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,197,139,0.25),transparent_60%)]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light mb-6 leading-tight"
          >
            Veränderung begleiten. <br />
            Klar. Menschlich. Wirksam.
          </motion.h1>

          <p className="text-lg md:text-xl text-white/70 mb-10">
            Ich begleite Menschen und Organisationen in Übergängen.
          </p>

          <a
            href="#kontakt"
            className="px-8 py-3 rounded-xl bg-[#E5C58B] text-black font-medium hover:opacity-90 transition"
          >
            Kontakt aufnehmen
          </a>

        </div>
      </section>


      {/* ================= ÜBER UWE ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-light mb-6">
          Über mich
        </h2>

        <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
          Seit vielen Jahren begleite ich Menschen und Organisationen in anspruchsvollen Situationen.
          Dabei geht es nicht um schnelle Lösungen, sondern um Klarheit, Orientierung und tragfähige Veränderungen.
        </p>

      </section>


      {/* ================= ARBEITSWEISE ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        <div>
          <h3 className="text-xl mb-4 font-light">Zuhören</h3>
          <p className="text-white/60">
            Raum geben, verstehen, wahrnehmen.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-4 font-light">Klären</h3>
          <p className="text-white/60">
            Gedanken ordnen und Perspektiven entwickeln.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-4 font-light">Begleiten</h3>
          <p className="text-white/60">
            Veränderungen ruhig und verlässlich gestalten.
          </p>
        </div>

      </section>


      {/* ================= LEISTUNGEN ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-light mb-10">
          Leistungen
        </h2>

        <div className="space-y-6 text-white/70">

          <p>Beratung für Organisationen im sozialen Bereich</p>
          <p>Supervision und Begleitung von Teams</p>
          <p>Unterstützung in Veränderungsprozessen</p>

        </div>

      </section>


      {/* ================= RUHE BLOCK ================= */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.15),transparent_70%)]" />

        <p className="relative z-10 text-2xl md:text-3xl font-light text-white/80">
          Veränderung braucht Raum.
        </p>

      </section>


      {/* ================= KONTAKT ================= */}
      <section id="kontakt" className="py-24 px-6 text-center">

        <h2 className="text-3xl font-light mb-6">
          Kontakt
        </h2>

        <p className="text-white/70 mb-4">
          Melden Sie sich gerne für ein erstes Gespräch.
        </p>

        <div className="text-white/80 space-y-2">
          <p>Telefon: XXX</p>
          <p>E-Mail: XXX</p>
        </div>

      </section>

    </main>
  )
}
