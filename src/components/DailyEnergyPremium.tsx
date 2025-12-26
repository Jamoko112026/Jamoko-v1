// src/components/DailyEnergyPremium.tsx

import { useEffect, useState } from "react";

interface Goal {
  key: string;
  label: string;
}

const GOALS: Goal[] = [
  { key: "focus", label: "Fokus" },
  { key: "order", label: "Ordnung" },
  { key: "express", label: "Ausdruck" },
];

export default function DailyEnergyPremium() {
  const STORAGE_PREFIX = "jamoko_energy_";
  const DAY_TRACK_KEY = "jamoko_week_progress";

  const [goals, setGoals] = useState<Record<string, boolean>>({
    focus: false,
    order: false,
    express: false,
  });

  const [week, setWeek] = useState<boolean[]>(new Array(7).fill(false));
  const [reward, setReward] = useState(false);

  // Load data
  useEffect(() => {
    const saved = { ...goals };
    GOALS.forEach((g) => {
      const v = localStorage.getItem(STORAGE_PREFIX + g.key);
      saved[g.key] = v === "true";
    });
    setGoals(saved);

    const weekSaved = localStorage.getItem(DAY_TRACK_KEY);
    if (weekSaved) setWeek(JSON.parse(weekSaved));
  }, []);

  // Save updated goals + weekly tracking
  useEffect(() => {
    GOALS.forEach((g) => {
      localStorage.setItem(STORAGE_PREFIX + g.key, goals[g.key].toString());
    });

    const allDone = GOALS.every((g) => goals[g.key]);
    if (allDone) {
      const dayIndex = new Date().getDay(); // 0 = So, 1 = Mo…
      const updated = [...week];
      updated[dayIndex] = true;
      setWeek(updated);
      localStorage.setItem(DAY_TRACK_KEY, JSON.stringify(updated));

      // Micro Reward
      const trueDays = updated.filter((d) => d).length;
      if (trueDays >= 3) setReward(true);
    }
  }, [goals]);

  function toggle(key: string) {
    setGoals({
      ...goals,
      [key]: !goals[key],
    });
  }

  return (
    <div className="relative max-w-xl mx-auto px-8 py-8 rounded-3xl border backdrop-blur-2xl 
      border-jamoko-gold/50 bg-jamoko-navy/40 shadow-[0_0_40px_#E5C58B40] overflow-hidden">

      {/* LIGHT SWEEP */}
      <div className="absolute inset-0 bg-gradient-to-br from-jamoko-gold/20 to-transparent opacity-40 pointer-events-none" />

      {/* PARTICLE SPARKLE (DONE) */}
      {GOALS.every((g) => goals[g.key]) && (
        <div className="absolute inset-0 animate-[pulse_5s_ease-in-out_infinite] opacity-10 pointer-events-none">
          <div className="w-full h-full bg-jamoko-teal blur-3xl"></div>
        </div>
      )}

      {/* TITLE */}
      <h2 className="text-2xl font-light text-jamoko-gold mb-6 text-center tracking-wide">
        Daily Energy – Premium
      </h2>

      {/* GOALS */}
      <div className="space-y-4 mb-8">
        {GOALS.map((g) => (
          <div
            key={g.key}
            onClick={() => toggle(g.key)}
            className={`flex items-center justify-between px-6 py-4 rounded-2xl 
            cursor-pointer transition-all duration-500 border backdrop-blur-xl
            ${
              goals[g.key]
                ? "border-jamoko-teal/70 bg-jamoko-teal/10 shadow-[0_0_20px_#1AC7A450]"
                : "border-jamoko-gold/50 bg-jamoko-gold/5"
            }`}
          >
            <span className="text-jamoko-text text-lg">{g.label}</span>

            <div
              className={`w-8 h-8 rounded-xl border transition-all duration-500 
              ${
                goals[g.key]
                  ? "bg-jamoko-teal border-jamoko-teal shadow-[0_0_12px_#1AC7A4]"
                  : "border-jamoko-gold"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* WEEKLY PROGRESS */}
      <div className="mb-6">
        <p className="text-jamoko-text-dim mb-3 text-sm">Wochen-Energie</p>

        <div className="grid grid-cols-7 gap-2">
          {["S", "M", "D", "M", "D", "F", "S"].map((d, i) => (
            <div
              key={i}
              className={`h-3 rounded-full transition-all duration-700 
              ${
                week[i]
                  ? "bg-gradient-to-r from-jamoko-teal to-jamoko-gold shadow-[0_0_10px_#1AC7A4]"
                  : "bg-white/10"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* REWARD */}
      {reward && (
        <div className="mt-8 text-center text-jamoko-teal text-lg animate-[pulse_3s_ease-in-out_infinite]">
          Calm Achieved — starke Woche, Mo.
        </div>
      )}
    </div>
  );
}
