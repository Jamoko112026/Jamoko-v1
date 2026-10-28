"use client";

import { useEffect, useRef, useState } from "react";
import { SunMoon } from "lucide-react";
import { parseTheme, themeStorageKey, type ThemePreference } from "./theme";

export function ThemeControl() {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const root = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function restore() {
      let value: ThemePreference = "system";
      try { value = parseTheme(localStorage.getItem(themeStorageKey)); } catch { /* Device fallback. */ }
      setPreference(value);
      if (value === "system") delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = value;
    }
    restore();
    function sync(event: StorageEvent) {
      if (event.key === themeStorageKey || event.key === null) restore();
    }
    function dismiss(event: PointerEvent) {
      if (root.current && !root.current.contains(event.target as Node)) root.current.open = false;
    }
    window.addEventListener("storage", sync);
    document.addEventListener("pointerdown", dismiss);
    return () => {
      window.removeEventListener("storage", sync);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, []);

  function choose(value: ThemePreference) {
    setPreference(value);
    if (value === "system") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = value;
    try {
      if (value === "system") localStorage.removeItem(themeStorageKey);
      else localStorage.setItem(themeStorageKey, value);
    } catch { /* The current selection works even without persistent storage. */ }
  }

  return <details ref={root} className="theme-control" onKeyDown={event => {
    if (event.key === "Escape") {
      event.stopPropagation();
      if (root.current) root.current.open = false;
      root.current?.querySelector("summary")?.focus();
    }
  }}>
    <summary aria-label="Farbdarstellung wählen" title="Tag- und Nachtdesign"><SunMoon size={21} aria-hidden="true" /></summary>
    <fieldset>
      <legend>Darstellung</legend>
      {([["system", "Wie dein Gerät"], ["light", "Tag · Hell"], ["dark", "Nacht · Dunkel"]] as const).map(([value, label]) =>
        <label key={value}><input type="radio" name="theme" value={value} checked={preference === value} onChange={() => choose(value)} />{label}</label>
      )}
    </fieldset>
  </details>;
}
