import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="kontakt"
      className="relative overflow-hidden px-6 py-24 text-center sm:px-8 md:py-32"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-80 w-2/3 -translate-x-1/2 rounded-full bg-[#1AC7A4]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#E5C58B]/30 bg-[#E5C58B] px-7 py-14 text-[#001821] sm:px-12 md:py-20 lg:px-20">
        <div
          className="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full border border-[#001821]/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-8 -top-20 h-72 w-72 rounded-full border border-[#001821]/15"
          aria-hidden="true"
        />

        <div className="relative grid gap-10 text-left lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#001821]/55">
              Unverbindlich starten
            </p>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Lass uns herausfinden, was deine Website wirklich braucht.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-[#001821]/65">
              In 15 Minuten klären wir dein Ziel, den passenden Umfang und ob
              Jamoko zu deinem Projekt passt. Persönlich und ohne Verkaufsdruck.
            </p>
          </div>

          <motion.a
            href="mailto:moin@jamoko.de"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#001821] px-7 py-4 text-sm font-medium text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Gespräch anfragen
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </div>

        <div className="relative mt-10 flex flex-col gap-4 border-t border-[#001821]/15 pt-7 text-sm text-[#001821]/60 sm:flex-row sm:items-center sm:gap-8">
          <a
            href="https://wa.me/4917682032127"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#001821]"
          >
            WhatsApp schreiben
          </a>
          <a
            href="tel:017682032127"
            className="flex items-center gap-2 transition hover:text-[#001821]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            0176 8203 2127
          </a>
          <span className="sm:ml-auto">
            Antwort meist innerhalb von 24 Stunden
          </span>
        </div>
      </div>
    </motion.section>
  );
}
