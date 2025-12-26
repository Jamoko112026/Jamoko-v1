// src/components/DailyGoalCheck.tsx

import { useEffect, useState, useRef } from "react";

export default function DailyGoalCheck() {
  const STORAGE_KEY = "jamoko_daily_goal_done";
  const LAST_RESET_KEY = "jamoko_daily_last_reset";

  const [done, setDone] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ⭐ Minimaler ruhiger Klick-Sound
  const clickSound = new Audio(
    "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAZGF0YQAAAAA="
  );
  clickSound.volume = 0.08;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") setDone(true);

    checkAutoReset();
  }, []);

  function checkAutoReset() {
    const lastReset = localStorage.getItem(LAST_RESET_KEY);
    const today = new Date();
    const resetMarker = today.toISOString().split("T")[0]; // YYYY-MM-DD

    // Auto-Reset um 05:00 Uhr morgens
    if (lastReset !== resetMarker) {
      const h = today.getHours();
      if (h >= 5) {
        localStorage.setItem(STORAGE_KEY, "false");
        setDone(false);
        localStorage.setItem(LAST_RESET_KEY, resetMarker);
      }
    }
  }

  function toggle() {
    const newVal = !done;
    setDone(newVal);
    localStorage.setItem(STORAGE_KEY, newVal.toString());

    // 🪶 Ruhiger Sound
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  }

  // ⭐ Energielevel (0% oder 100%)
  const energyPercent = done ? 100 : 30;

  return (
    <div className="relative max-w-xl mx-auto">

      {/* -------- GLOW AURA BACKLAYER -------- */}
      <div
        className={`
          absolute inset-0 blur-3xl rounded-3xl transition-all duration-700
          ${done ? "bg-jamoko-teal/30" : "bg-jamoko-gold/25"}
        `}
      />

      {/* -------- PREMIUM CARD -------- */}
      <div
        onClick={toggle}
        className={`
          relative cursor-pointer select-none 
          px-8 py-7 rounded-3xl border backdrop-blur-2xl
          transition-all duration-500 overflow-hidden shadow-xl
          ${
            done
              ? "border-jamoko-teal/70 bg-[#0a3130]/30 shadow-[0_0_35px_#1AC7A480]"
              : "border-jamoko-gold/55 bg-[#40321d]/20 shadow-[0_0_28px_#E5C58B60]"
          }
        `}
      >

        {/* LIGHT SWEEP */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-br 
            ${done ? "from-jamoko-teal/20 to-transparent" : "from-jamoko-gold/25 to-transparent"}
            opacity-40 pointer-events-none transition-all duration-700
          `}
        />

        {/* KRAKEN MICRO PATTERN */}
        <div
          className="absolute inset-0 opacity-[0.09] pointer-events-none"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTSAwIDIwIEMgMTUgMTUgMjUgMjUgNDAgMjAnIHN0cm9rZT0nI0U1QzU4Qicgc3Ryb2tlLXdpZHRoPScwLjcnIGZpbGw9J25vbmUnIG9wYWNpdHk9JzAuNScvPjwvc3ZnPg=='",
          }}
        />

        {/* CARD CONTENT */}
        <div className="relative flex items-center justify-between">
          <span className="text-lg font-light text-jamoko-text tracking-wide">
            {done
              ? "✔ Tagesziel erfüllt — klare, ruhige Energie."
              : "Tagesziel noch offen — Fokus, Mo."}
          </span>

          <div
            className={`
              w-9 h-9 rounded-xl border transition-all duration-500
              ${
                done
                  ? "bg-jamoko-teal border-jamoko-teal shadow-[0_0_14px_#1AC7A4]"
                  : "border-jamoko-gold bg-transparent"
              }
            `}
          ></div>
        </div>

        {/* ENERGY BAR */}
        <div className="relative mt-5 h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className={`
              h-full rounded-full transition-all duration-700
              ${
                done
                  ? "bg-gradient-to-r from-jamoko-teal to-jamoko-gold"
                  : "bg-gradient-to-r from-jamoko-gold/60 to-jamoko-text-dim/30"
              }
            `}
            style={{ width: `${energyPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
