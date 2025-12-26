import { motion } from "framer-motion";

export default function BrandSocial() {
  return (
    <section id="brand" className="container py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-4 bg-gradient-to-r from-[#E5C58B] to-[#1AC7A4] bg-clip-text text-transparent"
      >
        Social & Brand Setup
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-300 leading-relaxed"
      >
        Aufbau einer konsistenten Markenidentität auf Instagram und Meta –
        visuell, tonal und strategisch abgestimmt auf deine Zielgruppe.
      </motion.p>
    </section>
  );
}

