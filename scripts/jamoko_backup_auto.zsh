#!/bin/zsh

# ==========================================================

# 🌿 JaMoKo Backup Script – Automatische Sicherung + Log + Auto-Cleanup + iCloud-Sync-Check

# Version: v1.6 · 2025-11-13

# Autor: Jan-Moritz Koch (Mo)

# ==========================================================

# Funktionen:

# 1️⃣ Erstellt ZIP-Backup ohne node_modules

# 2️⃣ Prüft iCloud-Sync-Status

# 3️⃣ Verschiebt Backup automatisch in iCloud (~/.../Jamoko/Backup)

# 4️⃣ Schreibt Log-Eintrag in logs/jamoko_backup.log

# 5️⃣ Löscht alte Backups (>7 Tage) automatisch

# ==========================================================

# === Farben ===

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
CYAN="\033[0;36m"
RED="\033[0;31m"
RESET="\033[0m"

# === Projektpfad & Variablen ===

PROJECT_DIR="$(pwd)"
PROJECT_NAME="Jamoko"
DATE_TAG=$(date +%Y-%m-%d)
TIME_TAG=$(date +%H:%M:%S)
ZIP_NAME="${PROJECT_NAME}*Backup*${DATE_TAG}.zip"
ICLOUD_BACKUP_DIR="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Jamoko/Backup"
LOG_DIR="$PROJECT_DIR/logs"
LOG_FILE="$LOG_DIR/jamoko_backup.log"

mkdir -p "$LOG_DIR"

echo ""
echo "${CYAN}📁 Projektverzeichnis:${RESET} $PROJECT_DIR"
echo "${CYAN}☁️  Ziel (iCloud):${RESET} $ICLOUD_BACKUP_DIR"
echo ""

# === Schritt 1: iCloud-Verfügbarkeit prüfen ===

echo "${YELLOW}🔎 Prüfe iCloud-Sync-Status...${RESET}"
if [[ -d "$HOME/Library/Mobile Documents" ]]; then
# Prüfen, ob iCloud gerade synchronisiert oder pausiert ist
ICLOUD_STATUS=$(brctl log --wait --short 2>/dev/null | grep -m1 "CloudDocs" | grep -Eo "upload|download|idle|disabled")
if [[ "$ICLOUD_STATUS" == "disabled" ]]; then
echo "${RED}⚠️  iCloud-Sync ist deaktiviert oder pausiert.${RESET}"
echo "Bitte iCloud Drive aktivieren, um das Backup hochzuladen."
else
echo "${GREEN}✅ iCloud aktiv (${ICLOUD_STATUS:-Status unbekannt})${RESET}"
fi
else
echo "${RED}❌ iCloud-Verzeichnis nicht gefunden!${RESET}"
echo "[$DATE_TAG $TIME_TAG] ❌ Fehler: iCloud nicht erreichbar" >> "$LOG_FILE"
fi

# === Schritt 2: Backup erstellen ===

echo "${YELLOW}📦 Erstelle Backup (ohne node_modules)...${RESET}"
zip -r "$ZIP_NAME" . -x "node_modules/*" -x "*.DS_Store" -x "*.log" > /dev/null

if [[ -f "$ZIP_NAME" ]]; then
echo "${GREEN}✅ Backup erstellt:${RESET} $ZIP_NAME"
else
echo "${RED}❌ Fehler: ZIP-Datei konnte nicht erstellt werden.${RESET}"
echo "[$DATE_TAG $TIME_TAG] ❌ Fehler: Backup fehlgeschlagen" >> "$LOG_FILE"
exit 1
fi

# === Schritt 3: iCloud-Ziel prüfen & verschieben ===

if [[ -d "$ICLOUD_BACKUP_DIR" ]]; then
mv "$ZIP_NAME" "$ICLOUD_BACKUP_DIR"/
echo "${GREEN}☁️  Backup verschoben nach iCloud:${RESET} $ICLOUD_BACKUP_DIR/$ZIP_NAME"
else
echo "${RED}⚠️  iCloud-Ordner nicht gefunden – Datei bleibt lokal.${RESET}"
ICLOUD_BACKUP_DIR="$PROJECT_DIR"
fi

# === Schritt 4: Alte Backups löschen (>7 Tage) ===

echo "${YELLOW}🧹 Prüfe alte Backups (älter als 7 Tage)...${RESET}"
find "$ICLOUD_BACKUP_DIR" -type f -name "${PROJECT_NAME}*Backup**.zip" -mtime +7 -exec rm {} ; -print > /tmp/jamoko_deleted.log

if [[ -s /tmp/jamoko_deleted.log ]]; then
echo "${CYAN}🗑️  Gelöscht:${RESET}"
cat /tmp/jamoko_deleted.log
else
echo "✅ Keine alten Backups gefunden."
fi

# === Schritt 5: Log schreiben ===

ZIP_PATH="$ICLOUD_BACKUP_DIR/$ZIP_NAME"
ZIP_SIZE=$(du -h "$ZIP_PATH" 2>/dev/null | cut -f1)

{
echo ""
echo "[$DATE_TAG $TIME_TAG]"
echo "  📦 Datei: $ZIP_NAME"
echo "  💾 Größe: ${ZIP_SIZE:-unbekannt}"
echo "  📁 Ziel:  $ICLOUD_BACKUP_DIR"
echo "  ☁️  iCloud: ${ICLOUD_STATUS:-nicht geprüft}"
echo "  ✅ Status: Erfolgreich"
} >> "$LOG_FILE"

# === Schritt 6: Zusammenfassung ===

echo ""
echo "${CYAN}📊 Zusammenfassung:${RESET}"
echo "  🔸 Datei:   $ZIP_NAME"
echo "  🔸 Größe:   ${ZIP_SIZE:-(lokal gespeichert)}"
echo "  🔸 Logfile: $LOG_FILE"
echo "  🔸 Datum:   $(date '+%Y-%m-%d %H:%M:%S')"
echo ""
echo "${GREEN}✨ Backup abgeschlossen, protokolliert & alte Backups bereinigt.${RESET}"
