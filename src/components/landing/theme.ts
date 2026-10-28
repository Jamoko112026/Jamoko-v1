export type ThemePreference = "system" | "light" | "dark";
export const themeStorageKey = "jamoko-theme";
export function parseTheme(value: string | null): ThemePreference {
  return value === "light" || value === "dark" ? value : "system";
}

// Runs before paint. Storage may be blocked; device preference still works.
export const themeInitScript = `(function(){var t='system';try{var v=localStorage.getItem('${themeStorageKey}');if(v==='light'||v==='dark')t=v;}catch(e){}if(t!=='system')document.documentElement.dataset.theme=t;})();`;
