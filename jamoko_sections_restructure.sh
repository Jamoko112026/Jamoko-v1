#!/bin/zsh

echo "📁 Erstelle neue JaMoKo Sections Struktur..."

mkdir -p src/sections/hero
mkdir -p src/sections/brand
mkdir -p src/sections/services
mkdir -p src/sections/value
mkdir -p src/sections/end

touch src/sections/hero/.keep
touch src/sections/brand/.keep
touch src/sections/services/.keep
touch src/sections/value/.keep
touch src/sections/end/.keep

echo "✨ Struktur erfolgreich angelegt!"

