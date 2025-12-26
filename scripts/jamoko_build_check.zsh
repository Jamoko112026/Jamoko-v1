#!/bin/zsh
# ────────────────────────────────────────────────
#  JaMoKo Build Check & Auto-Fix Script v1.0
#  Autor: Jan-Moritz Koch ("Mo")
#  Pfad:  ~/Desktop/jamoko-v1-local/jamoko-v1/jamoko_build_check.zsh
# ────────────────────────────────────────────────

echo "🌀  Starte JaMoKo Build-Check …"

# 1️⃣  Projektpfad prüfen
cd "$(dirname "$0")" || exit 1
if [[ ! -f "package.json" ]]; then
  echo "❌  Kein package.json gefunden. Bitte im Projektordner ausführen."
  exit 1
fi

# 2️⃣  Node & NPM prüfen
echo "🔍  Node-Version: $(node -v)"
echo "🔍  NPM-Version:  $(npm -v)"

# 3️⃣  Tailwind prüfen
if [[ ! -d "node_modules/tailwindcss" ]]; then
  echo "⚠️  Tailwind fehlt – wird installiert …"
  npm install -D tailwindcss@3 postcss autoprefixer
else
  echo "✅  Tailwind gefunden."
fi

# 4️⃣  PostCSS Config prüfen
if [[ ! -f "postcss.config.js" ]]; then
  echo "⚠️  postcss.config.js fehlt – wird neu angelegt …"
  cat <<EOF > postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF
else
  echo "✅  postcss.config.js vorhanden."
fi

# 5️⃣  Tailwind Config prüfen
if [[ ! -f "tailwind.config.js" ]]; then
  echo "⚠️  tailwind.config.js fehlt – wird erstellt …"
  npx tailwindcss init -p
else
  echo "✅  tailwind.config.js vorhanden."
fi

# 6️⃣  CSS prüfen
if ! grep -q "@tailwind base" src/index.css; then
  echo "⚠️  index.css ohne Tailwind-Direktiven – füge hinzu …"
  cat <<EOF > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "./assets/jamoko_theme.css";
EOF
else
  echo "✅  index.css korrekt konfiguriert."
fi

# 7️⃣  Build-Test
echo "🧪  Teste Tailwind-Build …"
npx tailwindcss -i ./src/index.css -o ./src/output.css --minify
if [[ $? -eq 0 ]]; then
  echo "✅  Tailwind kompiliert erfolgreich."
else
  echo "❌  Tailwind-Build fehlgeschlagen!"
  exit 1
fi

# 8️⃣  Fertigmeldung
echo ""
echo "🌟  JaMoKo Build-Check abgeschlossen!"
echo "   Alles bereit für:"
echo "     npm run dev   → Lokaler Test"
echo "     npm run build → Netlify/Vercel Deploy"
echo ""
