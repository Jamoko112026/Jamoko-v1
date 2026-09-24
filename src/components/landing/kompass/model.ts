export const choices = [
  { value: 'yes', label: 'Ja, das funktioniert zuverlässig' },
  { value: 'partly', label: 'Teilweise – es hakt noch' },
  { value: 'no', label: 'Nein, bisher nicht' },
  { value: 'unknown', label: 'Das weiß ich noch nicht' },
  { value: 'na', label: 'Für mich nicht relevant' },
] as const;
export type Answer = typeof choices[number]['value'];
export type Question = { title: string; tip: string; action: string };
export type Topic = { id: string; title: string; intro: string; questions: Question[]; metric: string };
const q = (title: string, action: string, tip: string): Question => ({ title, action, tip });
export const topics: Topic[] = [
  { id: 'ordnung', title: 'Dateien & digitale Ordnung', intro: 'Unterlagen finden und gemeinsam mit dem richtigen Stand arbeiten.', metric: 'Suchzeit: Miss bei fünf typischen Unterlagen die Minuten bis zum Fund. Wiederhole das nach zwei Wochen. Keine vertraulichen Dateinamen notieren.', questions: [
    q('Findest du wichtige Unterlagen an einem festen Ort?', 'Wähle für einen laufenden Auftrag einen gemeinsamen Ablageort. Verlinke vorhandene Dateien, statt sofort alles umzuziehen.', 'Zum Beispiel Angebote, Rechnungen und Projektunterlagen.'),
    q('Erkennst du eindeutig die aktuelle Version?', 'Vereinbare für neue Dateien ein Muster wie Datum_Projekt_Inhalt. Kennzeichne einen verbindlichen Arbeitsstand.', 'Auch dann, wenn mehrere Personen daran arbeiten.'),
    q('Sind Zugriffsrechte nachvollziehbar vergeben?', 'Prüfe an einem Projekt, wer Zugriff braucht. Halte die zuständige Person fest und überprüfe unnötige Freigaben.', 'Nur die Personen, die diese Unterlagen benötigen.'),
    q('Gibt es eine Sicherung, aus der du Dateien wiederherstellen kannst?', 'Kläre, welche Sicherung vorhanden ist. Teste mit einer unkritischen Testdatei die Wiederherstellung, bevor du dich darauf verlässt.', 'Eine synchronisierte Ablage allein beantwortet diese Frage noch nicht.'),
    q('Gibt es eine Person, die die Ablage regelmäßig pflegt?', 'Lege eine verantwortliche Person und zehn Minuten pro Woche für neue Unterlagen fest.', 'Bei einem Einzelbetrieb kannst du das selbst sein.'),
  ]},
  { id: 'aufgaben', title: 'Termine & Aufgaben', intro: 'Wissen, was als Nächstes dran ist und wer sich kümmert.', metric: 'Überfällige Aufgaben: Zähle wöchentlich offene Aufgaben mit überschrittenem Termin. Betrachte zusätzlich, ob Termine realistisch gesetzt waren.', questions: [
    q('Stehen verbindliche Termine in einem verlässlichen Kalender?', 'Trage die Termine der nächsten Woche in deinen bestehenden Hauptkalender ein.', 'Private Details müssen dafür nicht mit dem Team geteilt werden.'),
    q('Haben offene Aufgaben einen festen Platz?', 'Sammle offene Aufgaben in einer einzigen Liste im vorhandenen Werkzeug.', 'Eine einfache Liste reicht für den Anfang.'),
    q('Ist für jede wichtige Aufgabe jemand verantwortlich?', 'Ergänze bei den fünf wichtigsten Aufgaben jeweils eine verantwortliche Person.', 'Auch bei Aufgaben, an denen mehrere Personen arbeiten.'),
    q('Ist bei wichtigen Aufgaben der nächste Schritt mit Termin klar?', 'Formuliere für drei offene Aufgaben den nächsten konkreten Schritt und einen realistischen Termin.', 'Zum Beispiel: Rückfrage am Dienstag beantworten.'),
    q('Prüfst du regelmäßig, was offen oder überfällig ist?', 'Reserviere einmal pro Woche 15 Minuten für deine Aufgabenübersicht.', 'So bleibt die Liste auch nach dem ersten Aufräumen hilfreich.'),
  ]},
  { id: 'anfragen', title: 'Anfragen & Angebote', intro: 'Anfragen beantworten und offene Angebote im Blick behalten.', metric: 'Angebotsquote: Gewonnene Angebote geteilt durch alle entschiedenen Angebote desselben Zeitraums. Offene Angebote separat zählen; bei null Entscheidungen keine Quote berechnen.', questions: [
    q('Bekommst du bereits passende Kundenanfragen?', 'Kläre zuerst für eine Zielgruppe, welches konkrete Problem dein Angebot löst. Teste eine verständliche Angebotsbeschreibung in einem passenden Kanal.', 'Wenn noch keine Anfragen kommen, ist ein neues Verwaltungssystem meist nicht der erste Schritt.'),
    q('Sind deine offenen Anfragen an einem Ort sichtbar?', 'Sammle offene Anfragen in einer Tabelle mit Anliegen, Status und nächstem Schritt. Nutze zunächst ein vorhandenes Werkzeug.', 'Unabhängig davon, ob sie per Telefon, E-Mail oder persönlich kommen.'),
    q('Erkennst du, welche Anfragen noch eine Antwort brauchen?', 'Kennzeichne neue, beantwortete und abgeschlossene Anfragen mit einem eindeutigen Status.', 'Ohne einzelne Postfächer oder Nachrichten durchsuchen zu müssen.'),
    q('Haben offene Angebote einen nächsten Schritt mit Datum?', 'Trage bei drei offenen Angeboten einen sinnvollen nächsten Kontakttermin ein.', 'Ein Termin zum Nachfassen sollte zur Absprache mit dem Kunden passen.'),
    q('Hältst du fest, welche Angebote angenommen oder abgelehnt wurden?', 'Ergänze bei entschiedenen Angeboten das Ergebnis und, soweit bekannt, den Grund.', 'Ein noch offenes Angebot ist keine Absage.'),
  ]},
  { id: 'kennzahlen', title: 'Kennzahlen & Überblick', intro: 'Mit wenigen Zahlen bessere Entscheidungen treffen.', metric: 'Beginne mit einer Zahl für deine konkrete Entscheidung: etwa offene Angebote, überfällige Aufgaben oder gebuchte Stunden. Lege Zeitraum, Datenquelle und Zählregel fest. Umsatz ist nicht Gewinn und nicht Zahlungseingang.', questions: [
    q('Weißt du, welche Entscheidung deine Zahlen unterstützen sollen?', 'Schreibe eine konkrete Frage auf: zum Beispiel, ob genug Arbeit für den nächsten Monat beauftragt ist.', 'Erst die Frage, dann die passende Kennzahl.'),
    q('Sind die benötigten Daten schon verlässlich erfasst?', 'Prüfe fünf Einträge in deiner vorhandenen Quelle auf Vollständigkeit. Fehlende Werte als unbekannt markieren, nicht als null.', 'Zum Beispiel Angebotsstatus oder gebuchte Stunden.'),
    q('Sind Zeitraum und Bedeutung deiner Kennzahlen klar?', 'Definiere für eine Kennzahl den Zeitraum und was genau gezählt wird.', 'Zum Beispiel entschiedene Angebote im Kalendermonat.'),
    q('Kannst du die Zahlen ohne mehrfaches Abtippen zusammentragen?', 'Nutze zuerst einen vorhandenen Export oder eine einfache Tabelle. Prüfe Summen an wenigen bekannten Fällen.', 'Ein Dashboard lohnt sich erst mit einer verlässlichen Quelle.'),
    q('Führt deine regelmäßige Auswertung zu einer konkreten Entscheidung?', 'Lege einen monatlichen Termin fest und notiere zu einer Zahl genau eine Maßnahme.', 'Eine Übersicht soll dir bei der Arbeit helfen.'),
  ]},
  { id: 'routinen', title: 'Wiederkehrende Arbeit & KI', intro: 'Wiederholungen vereinfachen, ohne neue Fehlerquellen einzubauen.', metric: 'Zeitaufwand: Miss fünf Durchläufe vor und nach einer Änderung, einschließlich Kontrolle und Korrekturen. Eine Hochrechnung ist eine Schätzung, keine garantierte Ersparnis.', questions: [
    q('Kennst du eine häufige Aufgabe, die spürbar Zeit kostet?', 'Beobachte eine Woche lang wiederkehrende Arbeit. Notiere Häufigkeit und Zeitbedarf ohne sensible Inhalte.', 'Ohne wiederkehrenden Bedarf brauchst du keine Automatisierung.'),
    q('Ist der Ablauf dieser Aufgabe klar beschrieben?', 'Schreibe die einzelnen Schritte einer häufigen Aufgabe auf. Beginne mit einer Checkliste oder Vorlage.', 'Auch Ausnahmen und Entscheidungen gehören dazu.'),
    q('Sind die benötigten Eingaben verlässlich verfügbar?', 'Teste den Ablauf an fünf unkritischen Beispielen und notiere fehlende oder widersprüchliche Angaben.', 'Unklare Eingaben werden durch Automatisierung nicht automatisch besser.'),
    q('Ist geklärt, welche Daten in den verwendeten Werkzeugen verarbeitet werden dürfen?', 'Kläre vor einem KI- oder Automatisierungstest die zulässigen Daten und Zugriffe. Verwende bis dahin erfundene Testdaten.', 'Keine Kundendaten, Zugangsdaten oder vertraulichen Texte für spontane Tests verwenden.'),
    q('Gibt es eine Kontrolle und einen manuellen Ersatzweg bei Fehlern?', 'Lege fest, wer Ergebnisse prüft und wie der Ablauf bei Fehlern manuell weitergeht.', 'Besonders vor dem Versand von Nachrichten oder Änderungen an Kundendaten.'),
  ]},
  { id: 'website', title: 'Website & Kontakt', intro: 'Verstehen, ob Besucher dein Angebot und den nächsten Schritt erkennen.', metric: 'Passende Website-Anfragen: Frage neue Kontakte freiwillig, wie sie dich gefunden haben. Zähle wöchentlich passende Anfragen. Eine Conversion-Rate braucht zusätzlich verlässliche Besuchsdaten; ohne sie keine Prozentzahl ausweisen.', questions: [
    q('Ist auf deiner Website schnell erkennbar, wem du wobei hilfst?', 'Formuliere für die Startseite einen klaren Satz: Für wen bist du da und welches Problem löst du?', 'Bitte eine unbeteiligte Person, das Angebot nach kurzem Blick zu beschreiben.'),
    q('Findet man auf dem Smartphone einfach den Kontakt?', 'Öffne die Seite auf deinem Handy und suche Telefonnummer oder Kontaktweg. Vereinfache den Weg, wenn du suchen musst.', 'Das ist eine Selbsteinschätzung, kein automatischer Website-Test.'),
    q('Zeigt die Website aktuelle und nachvollziehbare Arbeitsergebnisse?', 'Ergänze ein freigegebenes Projektbeispiel mit Ausgangslage, deiner Leistung und Ergebnis.', 'Verwende nur Inhalte, die du veröffentlichen darfst.'),
    q('Hast du den Kontaktweg selbst erfolgreich ausprobiert?', 'Teste deinen Kontaktweg einmal vollständig und prüfe, ob die Nachricht wirklich ankommt.', 'Ein sichtbarer Formularbutton allein beweist noch keinen funktionierenden Versand.'),
    q('Weißt du, ob über die Website passende Anfragen entstehen?', 'Frage bei den nächsten fünf Anfragen nach dem Kontaktweg und notiere, ob das Anliegen zu deinem Angebot passt.', 'Du musst dafür nicht sofort zusätzliche Besucheranalyse installieren.'),
  ]},
];
export type Result = { kind: 'action' | 'clarify' | 'good' | 'irrelevant'; title: string; reason: string; steps: string[]; metric?: string };
export function evaluate(topic: Topic, answers: Answer[]): Result {
  if (answers.length !== topic.questions.length || answers.some(a => !choices.some(c => c.value === a))) throw new Error('Bitte alle Fragen beantworten.');
  const relevant = answers.filter(a => a !== 'na');
  if (!relevant.length) return { kind: 'irrelevant', title: 'Dieses Thema ist für dich gerade nicht relevant.', reason: 'Du hast alle Fragen als nicht relevant eingeordnet.', steps: ['Wähle bei Bedarf ein anderes Thema. Daraus ergibt sich kein Handlungsbedarf.'] };
  // Missing demand takes precedence over downstream implementation details.
  if ((topic.id === 'anfragen' || topic.id === 'routinen') && answers[0] !== 'yes' && answers[0] !== 'partly') {
    const no = answers[0] === 'no';
    return { kind: no ? 'action' : 'clarify', title: topic.id === 'anfragen' ? 'Zuerst den Bedarf an passenden Anfragen klären.' : 'Zuerst eine sinnvolle wiederkehrende Aufgabe finden.', reason: 'Bevor du einen Ablauf ausbaust, sollte klar sein, ob du ihn aktuell brauchst.', steps: [topic.questions[0].action, 'Für diesen Schritt ist kein neues Werkzeug nötig.'] };
  }
  const gaps = answers.map((a,i) => ({a,i})).filter(({a}) => a === 'no' || a === 'partly');
  // Clarify the KPI's purpose and source before building a dashboard.
  const unknown = answers.findIndex(a => a === 'unknown');
  if ((topic.id === 'kennzahlen' && unknown >= 0 && unknown < 2) || (!gaps.length && unknown >= 0)) return { kind: 'clarify', title: 'Erst Klarheit schaffen.', reason: `Noch offen: ${topic.questions[unknown].title}`, steps: [topic.questions[unknown].action, 'Prüfe danach erneut, ob eine Änderung wirklich nötig ist.'] };
  if (!gaps.length) return { kind: 'good', title: 'Deine Grundlage scheint gut zu funktionieren.', reason: 'Du hast die für dich relevanten Punkte als zuverlässig eingeordnet.', steps: ['Behalte deinen vorhandenen Ablauf bei. Aus diesen Antworten ergibt sich kein Bedarf an einem neuen Werkzeug.'], metric: topic.metric };
  // Security/recovery prerequisites before convenience improvements.
  const prerequisite = (topic.id === 'ordnung' || topic.id === 'routinen') ? gaps.find(g => g.i === 3) : undefined;
  const ordered = prerequisite ? [prerequisite, ...gaps.filter(g => g !== prerequisite)] : gaps;
  return { kind: 'action', title: ordered[0].i === 3 && topic.id === 'ordnung' ? 'Zuerst die Wiederherstellung klären.' : 'Beginne mit diesem nächsten Schritt.', reason: `Du hast bei „${topic.questions[ordered[0].i].title}“ „${choices.find(c => c.value === ordered[0].a)?.label}“ gewählt.`, steps: ordered.slice(0,3).map(g => topic.questions[g.i].action), metric: topic.id === 'kennzahlen' && answers.slice(0,3).some(a => a !== 'yes') ? undefined : topic.metric };
}
export function summary(topic: Topic, answers: Answer[], result: Result): string {
  return ['JaMoKo Digital-Kompass', topic.title, '', 'Selbsteinschätzung, kein technischer Audit.', result.title, result.reason, '', ...result.steps.map((s,i) => `${i+1}. ${s}`), ...(result.metric ? ['', 'Mögliche Kennzahl:', result.metric] : []), '', 'Deine Antworten:', ...topic.questions.map((q,i) => `${q.title} — ${choices.find(c => c.value === answers[i])?.label ?? ''}`)].join('\n');
}
