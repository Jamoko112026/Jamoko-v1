#!/bin/zsh

# -------------------------------------------------------
#  JaMoKo – Hero Master Pipeline (v04 Ultimate)
#  Sortiert Jelly-Cube Render + generiert Hero-Paket
#  Autor: Mo + V
# -------------------------------------------------------

echo ""
echo "🔄 Starte JaMoKo Hero-Master Pipeline…"
echo ""

# -------------------------------------------------------
# 1) Pfade definieren
# -------------------------------------------------------

DROPZONE="$HOME/MoSystem/dropzone"
TARGET="$PWD/public/assets/jamoko/hero/cube"
HERO_OUT="$PWD/public/assets/jamoko/hero/generated"

mkdir -p "$TARGET"
mkdir -p "$HERO_OUT"

# -------------------------------------------------------
# 2) Dropzone prüfen
# -------------------------------------------------------

setopt nullglob
files=("$DROPZONE"/*.png)

if (( ${#files[@]} == 0 )); then
  echo "⚠️  Keine PNG-Dateien in der Dropzone gefunden. Pipeline beendet."
  unsetopt nullglob
  exit 0
fi

echo "📦 Gefundene Render in Dropzone: ${#files[@]}"
echo ""

# -------------------------------------------------------
# 3) Sortieren & Umbenennen
# -------------------------------------------------------

counter=1

for file in "${files[@]}"; do
  num=$(printf "%02d" $counter)
  newname="Jamoko_JellyCube_${num}.png"

  echo "→ Sortiere: $newname"

  mv "$file" "$TARGET/$newname"
  ((counter++))
done

unsetopt nullglob

echo ""
echo "✨ Sortierung abgeschlossen!"
echo "   Ablage: $TARGET"
echo ""

# -------------------------------------------------------
# 4) AUTO-HERO GENERATOR
#    (nimmt die sortierten Jelly-Cube Render und baut Hero-Bilder)
# -------------------------------------------------------

echo "🚀 Auto-Hero Generator startet…"

# Logischer Ablauf:
# - Leichtes Glow-Overlay
# - Varianten: dark, glow, soft
# - immer gleiche Farbmatrix für Gold→Teal
# - Export als hero_01.png, hero_02.png …


hero_counter=1

for cube in "$TARGET"/Jamoko_JellyCube_*.png; do
  num=$(printf "%02d" $hero_counter)
  outfile="$HERO_OUT/hero_${num}.png"

  echo "→ Erzeuge Hero $num aus $(basename "$cube") …"

  magick convert "$cube" \
    -brightness-contrast 10x15 \
    -blur 0x8 \
    -vignette 0x40 \
    "$outfile"

  ((hero_counter++))
done

echo ""
echo "🌈 Hero-Generation abgeschlossen!"
echo "   Export: $HERO_OUT"
echo ""

# -------------------------------------------------------
# 5) SUMMARY
# -------------------------------------------------------

echo "🎉 JaMoKo Hero-Master Pipeline erfolgreich abgeschlossen!"
echo "📁 Sortierte Cubes:  $TARGET"
echo "🌠 Generierte Heroes: $HERO_OUT"
echo ""

