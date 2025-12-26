#!/bin/zsh
echo "🧩 JaMoKo – Vite Quick Repair"

npm install -D vite esbuild @vitejs/plugin-react postcss autoprefixer tailwindcss
npm rebuild esbuild
echo "✅ Vite-Umgebung vollständig wiederhergestellt."
npm run dev
