// src/sections/services/MiniSite/FAQ.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function MiniSiteFAQ() {
  const items = [
    {
      q: "Wie funktioniert der 7-Tage-Prozess genau?",
      a: "Jeder Tag hat ein klares Ziel: Struktur → Design → Texte → Technik → Feinschliff → Tests → Launch. Du bleibst jederzeit im Überblick und bekommst täglich eine kurze Rückmeldung zum Fortschritt."
    },
    {
      q: "Brauche ich dafür technische Kenntnisse?",
      a: "Nein. Ich übernehme Design, Struktur, Technik und Launch. Du musst nichts installieren oder einrichten – du bekommst am Ende eine fertige, moderne Mini-Site."
    },
    {
      q: "Was passiert, wenn ich an einem Tag nicht erreichbar bin?",
      a: "Kein Problem. Der Prozess ist flexibel genug, um leichte Verzögerungen aufzufangen. Wir halten immer die Übersicht und bleiben im Zeitplan."
    },
    {
      q: "Kann ich später Inhalte selbst ändern?",
      a: "Ja. Du bekommst auf Wunsch einen kleinen Guide, wie du Texte/Bilder selbst austauschen kannst. Alternativ übernehme ich das für dich – ruhig, klar und unkompliziert."
    },
    {
      q: "Was ist, wenn ich noch keine Bilder oder Texte habe?",
      a: "Kein Stress. Ich unterstütze dich bei klaren Texten und helfe dir, passende Bilder auszuwählen oder zu erstellen. Die Mini-Site wird immer hochwertig wirken."
    }
  ];

  return (
    <section className="relative py-32 px-6" id="faq">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,197,139,0.12),transparent_70%)]"
      />

      {/* Headline */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold text-jamoko-gold mb-6">
          Häufige Fragen
        </h2>
        <p className="text-jamoko-text-dim text-lg leading-relaxed">
          Damit alles klar ist, bevor wir starten.  
          Ruhe + Übersicht = gute Entscheidungen.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {items.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------- */
/* FAQ Item */
/* -------------------------------------- */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        bg-[#01212d]/70 backdrop-blur-xl
        border border-jamoko-gold/15
        rounded-2xl p-6 md:p-7
        shadow-[0_0_25px_rgba(229,197,139,0.06)]
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-jamoko-gold text-lg font-semibold">{q}</h3>
        <ChevronDown
          className={`
            w-6 h-6 text-jamoko-gold transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-4 text-jamoko-text-dim leading-relaxed"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
