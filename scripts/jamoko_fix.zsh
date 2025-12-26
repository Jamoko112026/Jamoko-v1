#!/bin/zsh
# ────────────────────────────────────────────────
#  JaMoKo Quick Launch Script (v1.0)
#  Autor: Jan-Moritz Koch ("Mo")
#  Pfad:  ~/Desktop/jamoko-v1-local/jamoko-v1/jamoko_fix.zsh
# ────────────────────────────────────────────────

echo ""
echo "🚀  JaMoKo – Quick Launch gestartet …"
cd "$(dirname "$0")" || exit 1

# 1️⃣  Kurzprüfung auf Tailwind
if [[ ! -d "node_modules/tailwindcss" ]]; then
  echo "⚠️  Tailwind nicht gefunden. Installiere automatisch …"
  npm install -D tailwindcss@3 postcss autoprefixer
else
  echo "✅  Tailwind installiert."
fi

# 2️⃣  Schnell-Check der CSS-Direktiven
if ! grep -q "@tailwind base" src/index.css; then
  echo "⚠️  index.css unvollständig – ergänze Direktiven."
  cat <<EOF > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "./assets/jamoko_theme.css";
EOF
fi

# 3️⃣  Kurz-Build
echo ""
echo "🧪  Führe Mini-Build-Test durch …"
npx tailwindcss -i ./src/index.css -o ./src/output.css --minify
if [[ $? -eq 0 ]]; then
  echo "✅  Tailwind kompiliert erfolgreich."
else
  echo "❌  Tailwind-Fehler – bitte ./jamoko_build_check.zsh ausführen."
  exit 1
fi

# 4️⃣  Dev-Server starten
echo ""
echo "💡  Starte lokalen Entwicklungsserver (Vite) …"
npm run dev &
vite_pid=$!

# 5️⃣  Browser öffnen
sleep 2
if command -v open &> /dev/null; then
  echo "🌐  Öffne Browser: http://localhost:5173"
  open http://localhost:5173
fi

# 6️⃣  Log-Anzeige
echo ""
echo "🧭  Server läuft … (Drücke STRG+C zum Beenden)"
wait $vite_pid
