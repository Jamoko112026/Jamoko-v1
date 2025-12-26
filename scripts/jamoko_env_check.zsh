# Funktion für Ausgabe (lokal + global)
check_tool() {
  local name=$1
  local cmd=$2
  local expected=$3

  # Prüfe erst global
  local bin=$(command -v $cmd 2>/dev/null)

  # Falls global nicht vorhanden, prüfe local node_modules/.bin
  if [[ -z "$bin" && -f "./node_modules/.bin/$cmd" ]]; then
    bin="./node_modules/.bin/$cmd"
  fi

  if [[ -z "$bin" ]]; then
    echo "❌ ${RED}$name nicht gefunden${RESET}"
    return
  fi

  local version=$($bin --version 2>&1 || $bin -v 2>&1)


  echo "✅ ${GREEN}$name gefunden:${RESET} $version"

  if [[ -n "$expected" && "$version" != *"$expected"* ]]; then
    echo "⚠️  ${YELLOW}Abweichende Version (empfohlen: $expected)${RESET}"
  fi
}
