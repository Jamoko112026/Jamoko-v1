# JaMoKo Digital-Kompass – Betrieb und Freigabe

## Version 1

Route: `/digital-kompass`. Im Footer und der Sitemap verlinkt. Sechs Themen, jeweils fünf Fragen. Kein zusätzliches Paket, keine Zugangsdaten, kein Backend erforderlich.

Die Auswertung ist eine Selbsteinschätzung und kein Audit. Sie zeigt einen ersten Schritt und höchstens zwei weitere Empfehlungen. Unbekannt und nicht relevant sind eigene Antworten. Vollständig positive Antworten führen nicht zu einem Verkaufsbedarf. Kennzahlen enthalten eine Zählregel und Hinweise zu fehlenden Daten; es werden keine fiktiven Scores oder Einsparungen berechnet.

Der Browser hält Antworten nur im React-Arbeitsspeicher. Keine Kompass-Antworten in URL, Cookies, Web Storage oder Analyseereignissen. Die bestehende Website kann unabhängig davon Serverzugriffe und externe Ressourcen verarbeiten. Deshalb wird keine pauschale Anonymitäts- oder Datenschutzgarantie für die ganze Website behauptet.

## Besucherweg

1. Thema auswählen, fünf Fragen beantworten, Antworten vorwärts/rückwärts ändern.
2. Ergebnis ohne E-Mail-Adresse lesen und als Textdatei herunterladen.
3. Optional Unterstützung anfragen. Die Übernahme von Antworten und Ergebnis ist standardmäßig ausgeschaltet.
4. Ein Klick öffnet einen E-Mail-Entwurf im eigenen Mailprogramm. Der Besucher prüft und sendet ihn selbst. Die Seite behauptet keinen erfolgreichen Versand.
5. Wenn kein Mailprogramm eingerichtet ist, Ergebnis herunterladen und über eigenes Webmail an moin@jamoko.de schicken.

## So bearbeitet Mo eine Anfrage

Eine einfache bestehende Liste genügt: Eingang, Kontakt, Thema, Anliegen, nächster Schritt, Wiedervorlage, Status. Keine zusätzlichen sensiblen Daten sammeln.

- Anfrage lesen, Problem und gewünschtes Ergebnis in einem Satz zusammenfassen.
- Fehlenden Kontext klären: bestehende Werkzeuge, beteiligte Personen, wiederkehrender Aufwand, was schon funktioniert.
- Erst danach ein klar abgegrenztes Angebot senden: Leistung, Ergebnis, Zeitrahmen, Preis und Ausschlüsse.
- Umsetzung beginnt erst nach Annahme. Zugänge ausschließlich über vereinbarte sichere Wege, nicht im Check sammeln.
- Nach Übergabe mit dem Kunden prüfen, ob die vereinbarte Aufgabe funktioniert. Ergebnis und ggf. nächsten Schritt festhalten.

## Konkrete Angebotsentwürfe zur Preisfreigabe

Noch keine finalen Preise auf der Website. Der früher genannte Stundensatz von 100 EUR gehört zu einer anderen Kundenabsprache und wird nicht automatisch auf dieses Produkt übertragen.

**Ergebnisgespräch:** ca. 45 Minuten Gespräch, vorheriges Lesen der Antworten und eine kurze schriftliche Prioritätenliste. Ergebnis: eine konkrete nächste Aufgabe. Keine umfassende technische Prüfung, keine Einrichtung.

**Kleine Einrichtung:** genau ein vereinbarter Ablauf im vorhandenen Werkzeug, z.B. Anfragenliste mit Status und Wiedervorlage, gemeinsame Aufgabenübersicht oder Kennzahlentabelle aus einer vorhandenen Quelle. Angebot benennt Quelle, Umfang, Abnahmekriterium und kurze Übergabe. Migration, zusätzliche Lizenzen und komplexe Schnittstellen separat.

**Monatlicher Überblick:** gemeinsam definierte Kennzahlen aus vereinbarten Quellen, ein monatlicher Termin und eine dokumentierte Maßnahme. Kein unbegrenzter Support und keine Umsatzgarantie.

Vor Festpreisveröffentlichung: Preis je Paket, enthaltene Arbeitszeit, Zielgruppe und korrekte Preisdarstellung festlegen. Der aktuelle Anfrageweg ist bereits ohne diese Produktpreise nutzbar.

## Opt-in und spätere E-Mail-Erweiterung

Aktuell wird kein Newsletter angeboten oder abonniert. Der freiwillige Haken betrifft ausschließlich die Übernahme des Ergebnisses in den vom Nutzer versendeten E-Mail-Entwurf.

Ein automatischer Ergebnisversand und Newsletter sind **nicht implementiert**. Vor Aktivierung braucht es einen ausgewählten Versanddienst, verifizierte Absenderdomain, serverseitige Zugangsdaten und Fehlerbehandlung. Die Seite darf erst nach bestätigter Annahme durch den Versanddienst einen passenden Versandstatus anzeigen.

Für die geplante separate Newsletter-Anmeldung: freiwilliges, nicht vorangekreuztes Feld mit konkreten Inhalten und Absender; DOI mit zeitlich begrenzten Einmal-Tokens; vor Bestätigung keine Werbemails; Abmeldelink und Sperrliste; nachvollziehbarer Einwilligungsnachweis; Fristen und Datenschutzhinweise vor Veröffentlichung prüfen. Transaktionaler Ergebnisversand darf keine Newsletter-Anmeldung auslösen. Einwilligungstexte müssen zur tatsächlich eingerichteten Verarbeitung passen.

## Qualität und Freigabe

- `npm run lint`
- `npm run build`
- Node 22.18+ / 24: `node --test tests/digital-kompass.test.mjs`
- Tests prüfen alle 18.750 möglichen Antwortkombinationen sowie spezielle Abhängigkeiten.
- Noch ausstehende Browserprüfung: 390px und 1440px, Auswahlpflicht, Ergebnis, freiwillige E-Mail-Übernahme, Download, Antworten ändern, Themenwechsel, Neuladen ohne gespeicherte Antworten, kein horizontaler Überlauf. In der Ausführungsumgebung konnte Chromium wegen fehlgeschlagener Browserdownloads nicht installiert werden. Diese Sicht- und Interaktionsprüfung ist vor Freigabe erforderlich.
- Vor Veröffentlichung Mo: Wortlaut und Leistungsumfang ansehen; Mailentwurf auf dem eigenen Smartphone/Desktop testen (ohne Testnachricht versenden zu müssen).
- Nach Veröffentlichung: Route, Footer-Link, Download und echten Kontaktweg prüfen.

Diese Änderung wird als Entwurfs-PR bereitgestellt. Sie ist nicht automatisch für Produktion freigegeben. Newsletter ist keine Voraussetzung für Version 1; feste buchbare Pakete und automatischer Versand sind eigene nächste Ausbauschritte.
