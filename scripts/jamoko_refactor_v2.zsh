#!/bin/zsh

echo "🚀 JaMoKo Auto-Refactor V2 gestartet…"

SRC="src/sections"

# Zielstruktur
mkdir -p $SRC/{hero,services/MiniSite,services/Core,value,brand,end}

echo "📁 Zielordner erzeugt"

# === HERO ========================================================

mv $SRC/AboutHero.tsx              $SRC/hero/ 2>/dev/null
mv $SRC/GlowPreview.tsx            $SRC/hero/ 2>/dev/null
mv $SRC/HeroLuminousBalance.tsx    $SRC/hero/ 2>/dev/null

echo "✨ Hero verschoben"

# === SERVICES: MINISITE ==========================================

mv $SRC/services/*MiniSiteHero.tsx         $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSiteOffer.tsx        $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSitePreview.tsx      $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSiteProcess.tsx      $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSiteTestimonials.tsx $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSiteFAQ.tsx          $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSiteCTA.tsx          $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSiteComparison.tsx   $SRC/services/MiniSite/ 2>/dev/null
mv $SRC/services/*MiniSiteFeatures.tsx     $SRC/services/MiniSite/ 2>/dev/null

echo "🧩 MiniSite Module sortiert"

# === SERVICES: CORE (allgemeine Angebote) =========================

mv $SRC/services/LocalVisibility.tsx       $SRC/services/Core/ 2>/dev/null
mv $SRC/services/Leistungsarchitektur.tsx  $SRC/services/Core/ 2>/dev/null
mv $SRC/services/WebMinisites.tsx          $SRC/services/Core/ 2>/dev/null
mv $SRC/services/Services.tsx              $SRC/services/Core/ 2>/dev/null

echo "🧱 Core Services sortiert"

# === VALUE ========================================================

mv $SRC/value/WhyVisibility.tsx        $SRC/value/ 2>/dev/null
mv $SRC/value/CareGrowth.tsx           $SRC/value/ 2>/dev/null
mv $SRC/value/Positionierung.tsx       $SRC/value/ 2>/dev/null

echo "💡 Value Sections sortiert"

# === BRAND ========================================================

mv $SRC/brand/BrandSocial.tsx          $SRC/brand/ 2>/dev/null
mv $SRC/brand/ConsciousCollab.tsx      $SRC/brand/ 2>/dev/null

echo "🌿 Brand Sections sortiert"

# === END ==========================================================

mv $SRC/end/ContactSection.tsx   $SRC/end/ 2>/dev/null

echo "🔚 End Sections sortiert"

# === LEERE ORDNER ENTFERNEN ======================================

find $SRC -type d -empty -delete

echo "🧹 Leere Ordner gelöscht"

echo ""
echo "🎉 Auto-Refactor abgeschlossen!"
echo "👉 Bitte VS Code refreshen (Cmd + R)"

