import { useEffect, useState } from "react";

type Theme = "jamoko" | "sl";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("jamoko");

  useEffect(() => {
    const saved = localStorage.getItem("jamoko-theme") as Theme;
    if (saved) {
      applyTheme(saved);
    } else {
      applyTheme("jamoko");
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    document.body.classList.remove("theme-jamoko", "theme-sl");
    document.body.classList.add(`theme-${newTheme}`);

    localStorage.setItem("jamoko-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 rounded-xl bg-black/40 p-2 backdrop-blur shadow-lg">

      <button
        onClick={() => applyTheme("jamoko")}
        className={`px-3 py-1 rounded-lg text-sm transition ${
          theme === "jamoko"
            ? "bg-jamoko-gold text-black"
            : "bg-white/10 text-white/70 hover:bg-white/20"
        }`}
      >
        JaMoKo
      </button>

      <button
        onClick={() => applyTheme("sl")}
        className={`px-3 py-1 rounded-lg text-sm transition ${
          theme === "sl"
            ? "bg-sl-orangeMuted text-black"
            : "bg-white/10 text-white/70 hover:bg-white/20"
        }`}
      >
        SL BauTec
      </button>

    </div>
  );
}
