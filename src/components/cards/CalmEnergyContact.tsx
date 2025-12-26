// src/components/cards/CalmEnergyContact.tsx
import { useState } from "react";

export default function CalmEnergyContact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="
      max-w-3xl mx-auto
      bg-[rgba(255,255,255,0.04)]
      rounded-3xl
      backdrop-blur-xl
      p-12
      shadow-[0_0_40px_rgba(229,197,139,0.15)]
      border border-[rgba(255,255,255,0.08)]
      transition-all duration-300
      hover:shadow-[0_0_55px_rgba(26,199,164,0.25)]
    ">
      
      <h2 className="text-3xl md:text-4xl font-semibold text-jamoko-gold mb-6">
        Calm-Energy Kontakt
      </h2>

      <p className="text-jamoko-text-dim mb-10 leading-relaxed">
        Eine ruhige Verbindung: Schreib mir einfach eine kurze Nachricht.  
        Klar, gelassen und ohne Druck.
      </p>

      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Nachricht gesendet ✨");
        }}
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Dein Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            w-full p-4
            rounded-xl
            bg-[rgba(255,255,255,0.06)]
            border border-[rgba(255,255,255,0.12)]
            text-jamoko-text
            placeholder-jamoko-text-dim
            focus:outline-none focus:ring-2 focus:ring-jamoko-teal
          "
        />

        {/* Nachricht */}
        <textarea
          placeholder="Deine Nachricht"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="
            w-full p-4
            rounded-xl
            bg-[rgba(255,255,255,0.06)]
            border border-[rgba(255,255,255,0.12)]
            text-jamoko-text
            placeholder-jamoko-text-dim
            focus:outline-none focus:ring-2 focus:ring-jamoko-teal
          "
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="
            self-start
            px-8 py-3
            mt-2
            rounded-xl
            bg-gradient-to-r from-jamoko-gold to-jamoko-teal
            text-[#001821]
            font-semibold
            shadow-[0_0_20px_rgba(229,197,139,0.25)]
            hover:shadow-[0_0_40px_rgba(26,199,164,0.35)]
            transition-all duration-300
          "
        >
          Senden →
        </button>
      </form>

    </div>
  );
}
