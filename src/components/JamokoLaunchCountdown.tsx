// src/components/JamokoLaunchCountdown.tsx

import { useEffect, useState } from "react";

export default function JamokoLaunchCountdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const launchDate = new Date("2026-01-01T00:00:00");

    function updateCountdown() {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000 * 60 * 60); // jede Stunde aktualisieren

    return () => clearInterval(timer);
  }, []);

  if (daysLeft === null) return null;

  return (
    <div className="text-center mb-6">
      <span className="text-2xl font-semibold text-jamoko-gold">
        Noch {daysLeft} Tage bis Launch 🚀
      </span>
    </div>
  );
}
