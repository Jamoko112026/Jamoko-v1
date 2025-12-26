#!/bin/bash
set -e

PROJECT_NAME="Jamoko_v1.3_LuminousBalance"
DATE=$(date +"%Y-%m-%d_%H-%M")
DEST="$HOME/Desktop/${PROJECT_NAME}_FINAL_${DATE}.zip"

echo "🌐 Jamoko Backup gestartet..."
cd "$(dirname "$0")"

# 1️⃣ Cleanup & Neuaufbau
echo "🧹 Entferne alte node_modules & Lockfile..."
rm -rf node_modules package-lock.json dist

echo "📦 Installiere Dependencies..."
npm install

# 2️⃣ Build
echo "⚙️  Baue Produktionsversion..."
npm run build

# 3️⃣ ZIP-Archiv erzeugen
echo "📁 Erstelle ZIP-Archiv..."
zip -r "$DEST" . -x "node_modules/*" -x "*.git/*"

echo "✅ Backup abgeschlossen:"
echo "   $DEST"
echo "💫 Jamoko – Luminous Balance gesichert."

# --- Move backup to iCloud ---
ICLOUD_BACKUP_DIR="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Jamoko/Backup"

if [ -d "$ICLOUD_BACKUP_DIR" ]; then
    latest_zip=$(ls -t Jamoko_*.zip 2>/dev/null | head -n1)
    if [ -n "$latest_zip" ]; then
        mv "$latest_zip" "$ICLOUD_BACKUP_DIR"/
        echo "☁️  Backup verschoben nach iCloud: $ICLOUD_BACKUP_DIR/$latest_zip"
    else
        echo "⚠️  Keine ZIP-Datei gefunden zum Verschieben."
    fi
else
    echo "⚠️  iCloud-Ordner nicht gefunden: $ICLOUD_BACKUP_DIR"
fi
