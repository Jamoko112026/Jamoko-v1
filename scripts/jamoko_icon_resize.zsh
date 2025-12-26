#!/bin/zsh
# ==========================================================
# JaMoKo Icon Resize Script – Auto-Detect Version (v2)
# Autor: Jan-Moritz Koch · JaMoKo – Community First
# Zweck: Prüft automatisch das Haupt-Icon und erzeugt
#        die Derivate (256, 128, 64 px)
# ==========================================================

set -e

# 🔍 Pfad-Erkennung
ICON_DIR="../dist/icons"
MASTER_1="../dist/Jamoko_AppIcon_v2_512.png"
MASTER_2="$ICON_DIR/favicon-512.png"

if [[ -f "$MASTER_1" ]]; then
  MASTER="$MASTER_1"
  echo "✅ Master-Icon gefunden: $MASTER"
elif [[ -f "$MASTER_2" ]]; then
  MASTER="$MASTER_2"
  echo "✅ Master-Icon gefunden: $MASTER"
else
  echo "❌ Kein gültiges Master-Icon gefunden!"
  echo "Bitte stelle sicher, dass eines dieser Icons existiert:"
  echo "  • $MASTER_1"
  echo "  • $MASTER_2"
  exit 1
fi

# 🪄 Zielverzeichnis
OUT_DIR="$ICON_DIR"
mkdir -p "$OUT_DIR"

# 🧩 Icon-Generierung
echo "🔧 Erzeuge Icon-Derivate in $OUT_DIR ..."

magick "$MASTER" -resize 256x256 "$OUT_DIR/Jamoko_AppIcon_v2_256.png"
magick "$MASTER" -resize 128x128 "$OUT_DIR/Jamoko_AppIcon_v2_128.png"
magick "$MASTER" -resize 64x64  "$OUT_DIR/Jamoko_AppIcon_v2_64.png"

echo "✨ Fertig! Alle Icons erfolgreich erstellt:"
ls -1 "$OUT_DIR"/Jamoko_AppIcon_v2_*.png

