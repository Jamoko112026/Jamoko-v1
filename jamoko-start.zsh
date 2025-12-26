#!/bin/zsh
# =========================================================
# 🌀 JaMoKo Auto-Structure Check
# =========================================================

echo "🧭  Prüfe JaMoKo-Projektstruktur..."

# Standardpfade
mkdir -p scripts public/icons src/{sections,pages,components,assets}

# Falls Skripte lose im Root liegen → verschieben
if ls jamoko_*.zsh >/dev/null 2>&1; then
  echo "🔧 Verschiebe Hilfsskripte nach /scripts..."
  mv -vn jamoko_*.zsh scripts/
fi

# Icons aus dist in public/icons synchronisieren
if [ -d "dist" ]; then
  echo "🌀 Sync Icons aus dist → public/icons..."
  find dist -type f -name "Jamoko_AppIcon_v2_*.png" -exec cp -vn {} public/icons/ \;
fi

echo "✅ Struktur aktuell."
echo ""

echo "\n🌀  Jamoko Startsystem aktiviert..."

# Farben
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'

# Prüfen, ob wir im richtigen Verzeichnis sind
if [ ! -f "package.json" ]; then
  echo "${RED}Fehler:${NC} Nicht im Projektordner. Bitte zuerst cd in jamoko-v1."
  exit 1
fi

# Prüfen auf esbuild-Probleme
if grep -q "esbuild" package-lock.json 2>/dev/null; then
  echo "${YELLOW}⚙️  Bereinige esbuild Cache...${NC}"
  rm -rf node_modules/.vite node_modules/esbuild* 2>/dev/null
fi

# Optionaler Hard Reset bei Fehler
if [ "$1" = "--reset" ]; then
  echo "${YELLOW}♻️  Führe vollständigen Reset durch...${NC}"
  rm -rf node_modules package-lock.json dist .vite 2>/dev/null
  npm install --legacy-peer-deps
fi

# Framer Motion prüfen
if ! grep -q "framer-motion" package.json; then
  echo "${YELLOW}📦 Installiere framer-motion@11...${NC}"
  npm install framer-motion@11 --legacy-peer-deps
fi

# Dev Server starten
echo "${GREEN}🚀 Starte Vite-Entwicklungsserver...${NC}"
npm run dev --if-present
