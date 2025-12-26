#!/bin/zsh
# 🌅 JaMoKo Environment Console v2
# ---------------------------------

print_color() { printf "\033[$1m$2\033[0m\n"; }

draw_line() { print_color "38;5;36" "──────────────────────────────────────────────"; }

# Header
echo ""
print_color "1;38;5;178" "╭──────────────────────────────────────────────╮"
print_color "1;38;5;178" "│ 🌅  JaMoKo System Console – Environment v2    │"
print_color "1;38;5;178" "╰──────────────────────────────────────────────╯"
echo ""

# Tools array
tools=(
  "node:Node.js"
  "npm:npm"
  "vite:Vite"
  "tsc:TypeScript"
  "tailwindcss:Tailwind CSS"
  "esbuild:Esbuild"
)

# Check tools
for entry in $tools; do
  bin=${entry%%:*}
  label=${entry##*:}
  if command -v $bin >/dev/null 2>&1; then
    version=$($bin --version 2>&1 || $bin -v 2>&1)
    print_color "1;32" "✅  $label gefunden: $version"
  else
    print_color "1;31" "❌  $label nicht gefunden"
  fi
done

echo ""
draw_line
print_color "38;5;178" "✨  Check abgeschlossen – Ready for Luminous Build"
draw_line
echo ""
