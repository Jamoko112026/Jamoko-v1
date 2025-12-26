#!/bin/zsh
# ────────────────────────────────────────────────
#  JaMoKo Quick Launch – Night Mode Edition 🌙
#  Autor: Jan-Moritz Koch ("Mo")
#  Pfad:  ~/Desktop/jamoko-v1-local/jamoko-v1/jamoko_fix_dark.zsh
# ────────────────────────────────────────────────

# Farben
RESET="\033[0m"
GOLD="\033[38;5;220m"
TEAL="\033[38;5;44m"
NAVY="\033[38;5;17m"
GRAY="\033[38;5;240m"

clear
echo ""
echo "${NAVY}──────────────────────────────────────────────${RESET}"
echo "${GOLD}   ✨  JaMoKo – Calm Energy Launch (Night Mode) ✨${RESET}"
echo "${TEAL}        Digitale Ruhe · Spürbare Wirkung${RESET}"
echo "${NAVY}──────────────────────────────────────────────${RESET}"
echo ""

cd "$(dirname "$0")" || exit 1

# 1️⃣  Kurzprüfung Tailwind
if [[ ! -d "node_modules/tailwindcss" ]]; then
  echo "${GOLD}⚠️  Tailwind fehlt – wird installiert …${RESET}"
  npm install -D tailwindcss@3 postcss autoprefixer
else
  echo "${TEAL}✅  Tailwind erkannt.${RESET}"
fi

# 2️⃣  Mini-Build
echo ""
echo "${GRAY}🧪  Kompiliere Tailwind (Mini-Build) …${RESET}"
npx tailwindcss -i ./src/index.css -o ./src/output.css --minify
if [[ $? -eq 0 ]]; then
  echo "${TEAL}✅  Build erfolgreich.${RESET}"
else
  echo "${GOLD}❌  Fehler beim Kompilieren – bitte ./jamoko_build_check.zsh ausführen.${RESET}"
  exit 1
fi

# 3️⃣  Starte Dev-Server
echo ""
echo "${GOLD}💡  Starte lokalen Entwicklungsserver …${RESET}"
npm run dev &
vite_pid=$!

sleep 2
if command -v open &> /dev/null; then
  echo "${TEAL}🌐  Öffne Browser: http://localhost:5173${RESET}"
  open http://localhost:5173
fi

# 4️⃣  Visual Pulse
echo ""
echo "${NAVY}──────────────────────────────────────────────${RESET}"
echo "${GOLD}🌙  Night Mode aktiv – JaMoKo läuft ruhig und klar${RESET}"
echo "${TEAL}🧭  Port 5173 · STRG+C zum Beenden${RESET}"
echo "${NAVY}──────────────────────────────────────────────${RESET}"
echo ""

wait $vite_pid
