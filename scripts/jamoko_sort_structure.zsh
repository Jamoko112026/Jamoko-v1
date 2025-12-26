#!/bin/zsh
# =========================================================
#  JaMoKo Project Structure Organizer – v1.0
#  Autor: Mo (JaMoKo – Community First)
# =========================================================

echo "🗂  Sortiere JaMoKo Projektstruktur..."

# Basis-Ordner
mkdir -p scripts public/icons src/{sections,pages,components,assets}

# 1️⃣  ZSH-Skripte in /scripts verschieben
mv -vn jamoko_*.zsh scripts/ 2>/dev/null

# 2️⃣  Icons prüfen
if [ -d "dist" ]; then
  echo "🔍 Prüfe dist/ auf Icons..."
  find dist -type f -name "Jamoko_AppIcon_v2_*.png" -exec cp -vn {} public/icons/ \;
fi

# 3️⃣  Überflüssige Build-Dateien aufräumen (optional)
rm -f tsconfig.tsbuildinfo 2>/dev/null

# 4️⃣  Statusmeldung
echo "✅ Struktur aktualisiert!"
echo ""
tree -L 2 -I "node_modules|dist"
