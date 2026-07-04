# 05 Entwicklung

## Zweck

Dieses Dokument beschreibt, wie JaMoKo technisch arbeitet.

Entwicklung soll stabil, wartbar und verständlich bleiben.

## Grundprinzip

Die einfachste wartbare Lösung gewinnt.

## Checkliste

- Wird der Next.js App Router genutzt?
- Bleibt TypeScript sauber?
- Werden bestehende Komponenten wiederverwendet?
- Gibt es keine neue Library ohne guten Grund?
- Bleibt HTML semantisch?
- Wurde Barrierefreiheit bedacht?
- Laufen `npm run lint` und `npm run build`, wenn Code geändert wurde?

## Standards

- kleine Änderungen
- keine unnötigen Umbenennungen
- keine Struktur zerstören
- bestehende Tailwind-Muster nutzen
- Performance nicht verschlechtern
- Nutzeränderungen im Git-Status respektieren

## Was wir vermeiden

- technische Spielereien
- unnötige Abstraktionen
- neue Libraries aus Bequemlichkeit
- große Refactorings ohne Auftrag
- ungetestete Live-relevante Änderungen

## Nächster Ausbau

- Code-Review-Checkliste ergänzen
- Komponentenverzeichnis dokumentieren
- Build- und Deploy-Ablauf beschreiben
- Performance-Budget definieren
