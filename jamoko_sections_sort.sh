#!/bin/zsh

echo "🔍 Starte automatische Sortierung der Sections…"

# Map: Abschnitt → Ordner
typeset -A MAP
MAP=(
  "HeroLuminousBalance.tsx"      "hero"
  "AboutHero.tsx"               "hero"
  "GlowPreview.tsx"             "hero"

  "BrandSocial.tsx"             "brand"
  "ConsciousCollab.tsx"         "brand"

  "MiniSiteOffer.tsx"           "services"
  "MiniSitePreview.tsx"         "services"
  "LocalVisibility.tsx"         "services"
  "Leistungsarchitektur.tsx"    "services"
  "WebMinisites.tsx"            "services"

  "WhyVisibility.tsx"           "value"
  "CareGrowth.tsx"              "value"
  "Positionierung.tsx"          "value"

  "ContactSection.tsx"          "end"
)

BASE="src/sections"

# Sicherstellen, dass neue Ordner existieren
for folder in hero brand services value end; do
  mkdir -p "$BASE/$folder"
done

# Verschiebe Dateien
for file in "${(@k)MAP}"; do
  if [[ -f "$BASE/$file" ]]; then
    target="$BASE/${MAP[$file]}"
    echo "📁 Verschiebe $file → $target/"
    mv "$BASE/$file" "$target/"
  else
    echo "⚪ Übersprungen (nicht vorhanden): $file"
  fi
done

echo "✨ Fertig! Deine Sections sind nun sauber sortiert."

