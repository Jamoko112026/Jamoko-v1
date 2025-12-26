#!/bin/zsh

# -------------------------------------------------------
#  JaMoKo – Jelly-Cube Sort & Hero-Autogenerator (v03)
#  Autor: Mo + V
#  Zweck:
#    - Alle PNGs aus der Dropzone einsammeln
#    - Sauber umbenennen: Jamoko_JellyCube_01.png …
#    - In den Hero-Ordner verschieben
#    - Optional: Auto-Hero Pipeline anstoßen
# -------------------------------------------------------

echo ""
echo "🔄 Starte Jelly-Cube Sortierung & Hero-Autogenerator…"
echo ""

# ------------------------------
# 1) Pfade definieren
# ------------------------------

DROPZONE="$HOME/MoSystem/dropzone"
TARGET="$PWD/public/assets/jamoko/hero/cube"

mkdir -p "$TARGET"

# ------------------------------
# 2) Sicherer Dateifinder
# ------------------------------

# nullglob = *.png expandiert nicht zu einem Literal, wenn leer
setopt nullglob

files=("$DROPZONE"/*.png)

if (( ${#files[@]} == 0 )); then
  echo "⚠️  Keine PNG-Dateien in der Dropzone gefunden. Vorgang beendet."
  # nullglob wieder ausschalten
  unsetopt nullglob
  exit 0
fi

echo "📦 Gefundene Dateien: ${#files[@]}"
echo ""

# ------------------------------
# 3) Sortierung + Umbenennung
# ------------------------------

counter=1

for file in "${files[@]}"; do
  num=$(printf "%02d" $counter)
  newname="Jamoko_JellyCube_${num}.png"
  
  echo "→ ${newname} wird erstellt…"

  mv "$file" "$TARGET/$newname"
  ((counter++))
done

unsetopt nullglob

echo ""
echo "✨ Alle Jelly-Cube Bilder sauber einsortiert nach:"
echo "   $TARGET"
echo ""

# ------------------------------
# 4) Optional: Auto-Hero Hook
# ------------------------------

AUTO_HERO_SCRIPT="$PWD/scripts/jmk_autohero_v03.zsh"

if [[ -f "$AUTO_HERO_SCRIPT" ]]; then
  echo "🚀 Starte Auto-Hero Generator v03…"
  zsh "$AUTO_HERO_SCRIPT"
else
  echo "ℹ️  Kein Auto-Hero Skript gefunden (erwartet: scripts/jmk_autohero_v03.zsh)"
  echo "    → Überspringe Hero-Erstellung."
fi

echo ""
echo "🎉 Sortierung abgeschlossen!"
echo ""

