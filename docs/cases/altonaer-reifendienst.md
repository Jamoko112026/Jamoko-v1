# Altonaer Reifendienst – Kundenprojekt

Stand der Quellenprüfung: 22.09.2026.

## Veröffentlichung in JaMoKo

- Route: `/projekte/altonaer-reifendienst`
- Canonical: `https://jamoko.de/projekte/altonaer-reifendienst`
- Status: Kundenprojekt, indexierbar (`index, follow`).
- Live-Website: https://altonaerreifendienst.de/
- Projektart: Unternehmenswebsite; Konzept, Gestaltung und Entwicklung durch JaMoKo.
- Verlinkung: ARD-Karten auf Startseite und Projektübersicht, jeweils „Projekt ansehen“; Sitemap ergänzt.
- Die vorhandene Demo `/demos/reifendienst` bleibt unverändert.

## Fakten und Herkunft

Das Kundenrepository `/Users/pobi/Projects/Jamoko/03_Code/altonaer-reifendienst` wurde ausschließlich gelesen. Referenzstand: Commit `05ca9ef`; Arbeitsverzeichnis bei der Prüfung sauber. Keine Installationen, Builds, Bildgenerierung oder sonstigen Schreiboperationen dort ausgeführt.

| Aussage | Quelle |
| --- | --- |
| Altonaer Reifendienst GmbH, Hamburg-Altona | Kundenrepo `src/LegalPage.tsx`, `src/App.tsx` |
| Live-Domain | Kundenrepo `src/pages.ts`, `public/sitemap.xml`, `public/robots.txt` |
| Eigenständiger, glaubwürdiger Webauftritt als Ausgangslage | Projektbriefing des Auftraggebers in dieser Aufgabe; keine zusätzlichen Behauptungen über die frühere Website |
| Lokale Auffindbarkeit, Orientierung, mobile Nutzung, passende Gestaltung als Ziele | Projektbriefing; ausdrücklich Ziele, keine gemessenen Geschäftsergebnisse |
| Graffiti-Garage am Wohlers Park als Gestaltungsbezug | Briefing, Hero und Texte in `src/App.tsx`, Farben und Typografie in `src/App.css`, visuell geprüftes Garagenfoto |
| Echte Werkstattmotive | Briefing, `src/photos.json`, Galerie in `src/App.tsx`, visuelle Prüfung der ausgewählten Dateien |
| Leistungen, Öffnungszeiten, Kontakt, Anfahrt, Bewertungsbereich | Kundenrepo `src/App.tsx` |
| Umsetzung durch JaMoKo | Footer in `src/App.tsx` nennt „Konzept, Design & Entwicklung: JaMoKo“ |

Es wurden keine Preise, Bewertungszitate, Bewertungszahlen oder Kontaktplatzhalter aus der alten JaMoKo-Demo übernommen. Die Case Study beschreibt den Bewertungsbereich, ohne veränderliche Sternebewertungen zu wiederholen. Keine Aussagen zu gestiegenen Rankings, mehr Anfragen oder geschäftlichem Erfolg.

## Verwendete Bilder

Quelle der ursprünglich kopierten Bilder: Kundenrepo `public/ard/optimized/`. Ziel: JaMoKo `public/ard/case-study/`. Dateien unverändert kopiert, Originale unberührt. Ursprünglich vier sichtbare Motive plus eine vorhandene komprimierte JPEG-Datei für Open Graph; keine zusätzlichen Auflösungsserien kopiert, da `next/image` die Auslieferungsgrößen übernimmt.

| Kopierte Datei | Maße | Ursprüngliches Motiv laut `src/photos.json` | Verwendung |
| --- | --- | --- | --- |
| `hero-1672.webp` | 1672 × 941 | `Graffiti_Garage_Altonaer_Reifendienst_Hero_Final.png` | Ursprüngliches Hauptbild; am 23.09.2026 durch die neue Außenansicht ersetzt |
| `halle-1280.webp` | 1280 × 960 | `Werkstatt_Freie_Rampe.png` | Werkstatthalle |
| `reifenservice-1280.webp` | 1280 × 960 | `Reifenservice_Altonaer_Reifendienst_Bei_der_Arbeit.png` | Mitarbeiter bei der Arbeit; Kennzeichen im Quellbild bereits unkenntlich |
| `werkzeugwand-1280.webp` | 1280 × 960 | `Werkzeugwand_1920w_ARDlook.jpg` | Das Bild zeigt tatsächlich ein Reifenregal; Alt-Text beschreibt das sichtbare Motiv statt des Dateinamens |
| `social.jpg` | 1200 × 675 | Garagenmotiv, Export durch `scripts/optimize-images.mjs` | Individuelle Open-Graph-Vorschau |

## Technische Nachweise zur Kundenwebsite

### Bildgrößen

Am 22.09.2026 direkt aus den Dateigrößen nachgerechnet. Auswahl der acht Motive aus `src/photos.json`. Vergleich: jede Originaldatei gegen die jeweils größte erzeugte WebP-Variante, maximal 1920 Pixel breit. Dezimale MB (1 MB = 1.000.000 Bytes).

| Motiv | Original, Bytes | Größte WebP-Variante, Bytes |
| --- | ---: | ---: |
| hero | 2.802.626 | 297.936 |
| halle | 2.444.727 | 218.182 |
| winterreifen | 662.745 | 270.428 |
| fahrzeug | 1.876.145 | 103.400 |
| reifenservice | 2.234.810 | 165.844 |
| felgen | 703.845 | 247.882 |
| reifendetail | 394.229 | 145.318 |
| werkzeugwand | 373.103 | 130.314 |
| **Summe** | **11.492.230** | **1.579.304** |

Reduktion: `(1 - 1579304 / 11492230) × 100 = 86,2576 %`.

Öffentliche Formulierung: „rund 1,6 statt 11,5 MB, rund 86 % kleiner“. Gemeint sind die acht Fotos der Kundenwebsite, nicht die vier Bilder dieser Case Study, nicht sämtliche Varianten zusammen und nicht die gesamte Seitengröße oder Ladezeit.

`src/Photo.tsx` liefert `srcset`, `sizes`, Bildmaße und Lazy Loading. `scripts/optimize-images.mjs` erstellt WebP mit Qualität 82, Breiten 640, 1280 und der jeweiligen maximalen Breite ohne Hochskalierung. `src/photos.json` enthält acht verwendete Motive.

### HTML und Fehlerseiten

- `src/pages.ts`: separate Titel, Beschreibungen und Canonicals für `/`, `/impressum`, `/datenschutz`; unbekannte Pfade erhalten `noindex, follow` und keinen Canonical.
- `src/entry-server.tsx` und `scripts/prerender.mjs`: Vorabrendern der Inhalte und Metadaten direkt in HTML.
- Vorhandene Buildartefakte `dist/index.html`, `dist/impressum.html`, `dist/datenschutz.html` lesend geprüft: Inhalt, jeweils eine H1, eigene Metadaten und Canonicals vorhanden.
- `dist/404.html` enthält Fehlerinhalt und `noindex, follow`.
- `netlify.toml`: nur die beiden realen Unterseiten werden umgeschrieben; kein globaler SPA-Fallback. Die HTTP-404-Auslieferung ist über diese Konfiguration und die Projektangabe belegt, in dieser Aufgabe aber nicht erneut gegen die Live-Domain gemessen.

### Mobile Darstellung und Projektprüfung

- `src/App.tsx`: gezielte weiche Trennstellen unter anderem in „Reifenservice“, „Werkstatt“ und „Reifenfrage“.
- `src/App.css`: mobile Regeln und `overflow-wrap:anywhere` für Überschriften.
- `public/sitemap.xml` lesend als XML geprüft: Startseite, Impressum und Datenschutz mit korrekter Domain.
- `public/robots.txt`: Crawling erlaubt, Sitemap-Verweis vorhanden.
- Der Auftraggeber bestätigt erfolgreiche Build-, Code-, Browser-, Sitemap- und robots.txt-Prüfungen des Kundenprojekts. Diese Bestätigung ist die Quelle der entsprechenden zusammenfassenden Aussage auf der Case Study. Im Repository liegt kein separates vollständiges Prüfprotokoll dafür vor. Die unten dokumentierten neuen JaMoKo-Prüfungen sind davon zu unterscheiden.

## Prüfung der JaMoKo-Umsetzung

- Vor Beginn `git status --short`: sauber, keine fremden Änderungen vorhanden.
- `npm run lint`: erfolgreich, keine Meldungen.
- `npm run build`: erfolgreich einschließlich TypeScript und statischer Generierung der neuen Route. Bestehender Hinweis auf veraltete Browserslist-Daten; keine Abhängigkeiten verändert.
- Lokaler Produktionsserver: Case Study erfolgreich ausgeliefert.
- Chrome-Prüfung bei 1440, 390 und 320 Pixeln: genau eine H1 und ein main, keine horizontal überlaufenden Text-/Linkelemente; vier geladene Bilder mit Alt-Text und responsive srcset.
- Title, Canonical und `index, follow` im Browser geprüft. Individuelle Open-Graph-Angaben im generierten HTML geprüft.
- Startseite und Projektübersicht: neue Zielroute und „Projekt ansehen“ vorhanden.
- Generierte Sitemap: neue Canonical-URL enthalten.
- Alte Demo: HTTP 200, weiterhin noindex.
- Desktop- und Mobilansichten visuell geprüft; für stabile Screenshots bestehende Animationen über `prefers-reduced-motion` deaktiviert.
- Kopierte Dateien gegen die Quellen abgeglichen; keine Änderungen im Kundenrepository.
- Abschließende Diff-Prüfung einschließlich Whitespace; automatisch erzeugte Änderung an `next-env.d.ts` zurückgenommen.

## Grenzen und offene Punkte

Noch nicht veröffentlicht, committet oder gepusht. Die tatsächliche Indexierung erfolgt erst nach Veröffentlichung und Verarbeitung durch Suchmaschinen. Ein erneuter Live-HTTP-404-Test und die historischen vollständigen ARD-Prüfprotokolle sind nicht Teil dieser lokalen JaMoKo-Prüfung. Für die angefragte Umsetzung bestehen keine funktionalen offenen Punkte.


## Ergänzung vom 23.09.2026: neue Außenansicht

- Vom Auftraggeber bereitgestelltes Original: `public/ard/case-study/Altonaer_Reifendienst_Graffiti_Garage_Aussenansicht_2026.png` (1448 × 1086 Pixel, 2.303.141 Bytes); unverändert erhalten.
- Optimierung mit dem bereits installierten Sharp: automatische Orientierung, keine Hochskalierung, WebP-Qualität 82, Effort 6.
- Ausgabe: `graffiti-garage-aussenansicht-1448.webp`, 1448 × 1086 Pixel, 189.174 Bytes; rund 91,8 % kleiner als das neue PNG.
- Verwendung als zentrales Einstiegsbild mit `next/image`, korrekten Bildmaßen, `priority` und responsivem `sizes`. Vollständiges 4:3-Motiv ohne Beschnitt auf der Case Study; beide ARD-Projektkarten verwenden dasselbe neue Motiv.
- Bestehende Open-Graph-Vorschau bleibt erhalten. Die Kennzahl von rund 86 % auf der Case Study bezieht sich weiterhin auf die acht Bilder der Kundenwebsite, nicht auf diesen neuen Export.
- Vorhandene uncommitted Änderungen fortgeführt; kein Commit und kein Push.

### Erneute Prüfung nach dem Bildwechsel

- `npm run lint`, `npm run build` und `git diff --check`: erfolgreich. Build mit bestehendem Hinweis auf veraltete Browserslist-Daten.
- Generiertes HTML geprüft: genau eine H1 und ein main, korrekter Canonical, vier Bilder mit Alt-Text, responsivem srcset und sizes, korrekte Maße des neuen Einstiegsbilds. Beide Projektkarten und Sitemap enthalten die Case-Study-Route.
- Lokaler Produktionsserver: Case Study, Startseite, Projektübersicht, Kontakt, bisherige Demo, Sitemap, neue WebP-Datei und Next.js-Bildoptimierungs-Endpunkt liefern HTTP 200.
- Original und WebP visuell verglichen. Eine erneute Browserdarstellung auf Desktop und Mobilgeräten konnte mangels Browser-Ausführungstool in dieser Sitzung nicht geprüft werden; die weiter oben genannten Browserprüfungen stammen vom vorherigen Arbeitsstand.
- Automatisch erzeugte Änderung an `next-env.d.ts` zurückgenommen.

## Sichtbarkeitskorrektur der Case Study

- Ursache: `ScrollReveal` erfasst global `article` und `section`. Das äußere `article` umfasst hier die komplette lange Seite und erhält dadurch `jmk-reveal` mit `opacity: 0`. Bei einer Observer-Schwelle von 0,12 und verkleinertem Beobachtungsbereich kann die nötige sichtbare Fläche unerreichbar sein. Unsichtbare Eltern verbergen auch bereits eingeblendete Kinder. Die Projektübersicht verwendet dagegen einen äußeren `div`; ihr Seitencontainer wird nicht erfasst.
- Die frühere Browserprüfung mit reduzierter Bewegung konnte diesen Fehler nicht aufdecken, da dann keine Reveal-Klassen gesetzt werden.
- Gezielte Korrektur: `data-no-reveal` am Case-Study-Artikel; der bestehende Reveal-Filter überspringt dieses Element einschließlich aller Nachfahren. Semantik, Inhalte, Bilder, Layout und Animationen anderer Seiten bleiben erhalten. Die Case Study benötigt keine Animation und keine JavaScript-Freigabe für ihre Sichtbarkeit.
- Prüfung der tatsächlichen Reveal-Funktion mit simuliertem DOM/Observer: Artikel und sechs Abschnitte bleiben bei normaler sowie reduzierter Bewegung ohne Reveal-Klassen; nicht ausgenommene Elemente werden weiterhin beobachtet.
- Produktions-HTML geprüft: sechs Abschnitte, vier Bilder und eine H1, ohne versteckende Klassen; Ausschlussattribut bereits serverseitig vorhanden.
- `git diff --check`, `npm run lint` und `npm run build`: erfolgreich; lediglich bestehender Browserslist-Hinweis. Keine erneute visuelle Browserprüfung in dieser Sitzung möglich.
- Kein Commit, kein Push; alle bisherigen Case-Study-Änderungen erhalten.
