import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../../components/sections/contact/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contakt"
      className="relative py-40 px-6 text-center overflow-hidden bg-[#001821]"
    >
      {/* Hintergrund-Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,197,139,0.15),transparent_70%)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-semibold text-jamoko-gold mb-6">
          Bereit für deine Mini-Site?
        </h2>

        <p className="text-jamoko-text-dim text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Lass uns gemeinsam starten — ruhig, klar und professionell.
          Schreib mir kurz dein Anliegen und wir klären alles in wenigen Minuten.
        </p>

        {/* Primärer Kontakt */}
        <div className="mb-16">
          <a
            href="mailto:moin@jamoko.de"
            className="
              inline-flex items-center gap-3 
              bg-jamoko-gold text-[#001821]
              font-semibold px-10 py-4 rounded-full
              shadow-[0_0_30px_rgba(229,197,139,0.25)]
              hover:shadow-[0_0_40px_rgba(229,197,139,0.35)]
              transition-all
            "
          >
            <Mail className="w-6 h-6" />
            moin@jamoko.de
          </a>
        </div>

        {/* Alternative Kontaktwege */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">

          <ContactItem
            icon={<Phone className="w-7 h-7 text-jamoko-gold" />}
            label="Telefon"
            text="0176 8203 2127"
            href="tel:017682032127"
          />

          <ContactItem
            icon={<MessageCircle className="w-7 h-7 text-jamoko-gold" />}
            label="WhatsApp"
            text="Direkt schreiben"
            href="https://wa.me/4917682032127"
          />

        </div>

        {/* Formular */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>

        {/* Hinweis */}
        <p className="text-sm text-jamoko-text-dim mt-10">
          Deine Anfrage wird vertraulich behandelt. Antwortzeit: meist unter 1 Stunde.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/* Contact Item */
/* -------------------------------------- */

function ContactItem({
  icon,
  label,
  text,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        group
        flex items-center gap-4
        bg-[#01212d]/70 backdrop-blur-xl 
        border border-jamoko-gold/15 rounded-3xl
        px-8 py-5 w-full md:w-auto
        shadow-[0_0_20px_rgba(229,197,139,0.06)]
        hover:shadow-[0_0_30px_rgba(229,197,139,0.14)]
        transition-all
      "
    >
      {icon}
      <div className="text-left">
        <p className="text-jamoko-gold text-sm tracking-widest">{label}</p>
        <p className="text-jamoko-text font-medium flex items-center gap-2">
          {text}
          <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
        </p>
      </div>
    </motion.a>
  );
}
