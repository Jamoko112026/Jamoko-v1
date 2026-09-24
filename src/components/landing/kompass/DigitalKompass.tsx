'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { choices, evaluate, summary, topics, type Answer } from './model';

const button = 'inline-flex min-h-12 items-center justify-center rounded-lg bg-calm-gold px-5 py-3 font-semibold text-calm-navy hover:bg-calm-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-calm-gold';
const secondary = 'inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-calm-ink hover:border-calm-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-calm-gold';

export function DigitalKompass() {
  const [topicId, setTopicId] = useState('');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [step, setStep] = useState(0);
  const [includeSummary, setIncludeSummary] = useState(false);
  const [notice, setNotice] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const topic = topics.find(t => t.id === topicId);
  const done = !!topic && step === topic.questions.length;
  const result = topic && done ? evaluate(topic, answers) : null;
  const resultText = topic && result ? summary(topic, answers, result) : '';

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    heading.current?.focus();
  }, [topicId, step]);

  function reset() {
    setTopicId(''); setAnswers([]); setStep(0); setIncludeSummary(false); setNotice('');
  }
  function download() {
    const url = URL.createObjectURL(new Blob([resultText], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url; anchor.download = `jamoko-kompass-${topicId}.txt`; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Dein Download wurde angefordert. Prüfe den Downloadbereich deines Browsers.');
  }
  const mailBody = `Hallo Mo,\n\nich möchte Unterstützung zum Thema ${topic?.title ?? ''}. Bitte lass uns den passenden Umfang und Preis klären.\n\nMein Anliegen:\n\n${includeSummary ? `\n${resultText}` : ''}`;

  return <div className="mt-10 rounded-2xl border border-white/15 bg-calm-panel p-5 sm:p-9">
    {!topic ? <>
      <h2 ref={heading} tabIndex={-1} className="text-2xl font-semibold text-calm-ink">Wo wünschst du dir mehr Klarheit?</h2>
      <p className="mt-3 text-calm-muted">Wähle ein Thema aus deinem Alltag. Fünf Fragen helfen dir, einen sinnvollen nächsten Schritt zu finden.</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {topics.map(t => <button key={t.id} onClick={() => { setTopicId(t.id); setNotice(''); }} className="rounded-xl border border-white/20 p-5 text-left hover:border-calm-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-calm-gold">
          <span className="block text-lg font-semibold text-calm-gold">{t.title}</span>
          <span className="mt-2 block leading-6 text-calm-muted">{t.intro}</span>
        </button>)}
      </div>
    </> : result ? <>
      <p className="text-sm font-semibold text-calm-gold">Dein Ergebnis · {topic.title}</p>
      <h2 ref={heading} tabIndex={-1} className="mt-4 text-2xl font-semibold text-calm-ink sm:text-3xl">{result.title}</h2>
      <p className="mt-4 leading-7 text-calm-muted">{result.reason}</p>
      <p className="mt-3 text-sm leading-6 text-calm-muted">Diese Orientierung beruht ausschließlich auf deinen Antworten. Wir haben keine Systeme oder Website technisch geprüft.</p>
      <h3 className="mt-8 text-lg font-semibold text-calm-gold">{result.kind === 'action' ? 'Dein erster Schritt – und was danach helfen kann' : 'So kannst du weitermachen'}</h3>
      <ol className="mt-4 list-decimal space-y-4 pl-6 leading-7 text-calm-ink">{result.steps.map(s => <li key={s}>{s}</li>)}</ol>
      {result.metric && <aside className="mt-7 rounded-xl border border-calm-green/30 p-5"><h3 className="font-semibold text-calm-gold">Eine Kennzahl, die dir helfen kann</h3><p className="mt-2 leading-7 text-calm-muted">{result.metric}</p></aside>}
      <details className="mt-7 text-calm-muted"><summary className="cursor-pointer py-3 font-semibold text-calm-ink">Deine Antworten ansehen</summary><dl className="space-y-4">{topic.questions.map((q,i) => <div key={q.title}><dt>{q.title}</dt><dd className="mt-1 text-calm-gold">{choices.find(c => c.value === answers[i])?.label}</dd></div>)}</dl></details>
      <div className="mt-6 flex flex-wrap gap-3"><button className={button} onClick={download}>Ergebnis herunterladen</button><button className={secondary} onClick={() => { setStep(0); setNotice(''); }}>Antworten ändern</button></div>
      <section className="mt-10 border-t border-white/15 pt-8" aria-labelledby="kompass-help">
        <h3 id="kompass-help" className="text-xl font-semibold text-calm-ink">Möchtest du Unterstützung von Mo?</h3>
        <p className="mt-3 leading-7 text-calm-muted">Wir können dein Ergebnis gemeinsam einordnen oder einen klar abgegrenzten Schritt umsetzen. Du bekommst vor einer Beauftragung ein Angebot mit Umfang und Preis. Diese Anfrage ist unverbindlich.</p>
        <label className="mt-5 flex cursor-pointer items-start gap-3 text-calm-ink"><input type="checkbox" checked={includeSummary} onChange={e => setIncludeSummary(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-[#E5C58B]" /><span>Meine Antworten und das Ergebnis in die E-Mail übernehmen (freiwillig).</span></label>
        <a className={`${button} mt-5`} href={`mailto:moin@jamoko.de?subject=${encodeURIComponent(`Digital-Kompass: ${topic.title}`)}&body=${encodeURIComponent(mailBody)}`} onClick={() => setNotice('Dein E-Mail-Programm wird geöffnet. Prüfe den Entwurf und sende ihn dort selbst ab. Hier wurde keine Nachricht versendet.')}>Anfrage im E-Mail-Programm vorbereiten</a>
        <p className="mt-3 text-sm leading-6 text-calm-muted">Du prüfst und versendest die Nachricht selbst. Es wird kein Newsletter abonniert. Falls sich kein E-Mail-Programm öffnet: Schreib an <a className="text-calm-gold underline" href="mailto:moin@jamoko.de">moin@jamoko.de</a> und füge bei Bedarf dein heruntergeladenes Ergebnis hinzu.</p>
        <Link href="/datenschutz" className="mt-3 inline-block text-sm text-calm-gold underline">Hinweise zum Datenschutz</Link>
      </section>
      <button className={`${secondary} mt-8`} onClick={reset}>Anderes Thema prüfen</button>
    </> : <>
      <p className="text-sm font-semibold text-calm-gold">{topic.title} · Frage {step + 1} von {topic.questions.length}</p>
      <progress className="mt-4 h-2 w-full accent-[#E5C58B]" value={step + 1} max={topic.questions.length} aria-label="Fortschritt" />
      <h2 ref={heading} tabIndex={-1} id="kompass-question" className="mt-6 text-2xl font-semibold leading-snug text-calm-ink">{topic.questions[step].title}</h2>
      <p id="kompass-tip" className="mt-3 leading-7 text-calm-muted">{topic.questions[step].tip}</p>
      <form onSubmit={e => { e.preventDefault(); if (answers[step]) setStep(step + 1); }}>
        <fieldset aria-labelledby="kompass-question" aria-describedby="kompass-tip" className="mt-6 space-y-3">
          {choices.map(c => <label key={c.value} className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border p-4 ${answers[step] === c.value ? 'border-calm-gold bg-calm-gold/10' : 'border-white/20 hover:border-white/50'}`}><input type="radio" name={`answer-${step}`} value={c.value} checked={answers[step] === c.value} onChange={() => { const updated = [...answers]; updated[step] = c.value; setAnswers(updated); }} required className="h-5 w-5 shrink-0 accent-[#E5C58B]" /><span className="text-calm-ink">{c.label}</span></label>)}
        </fieldset>
        <div className="mt-7 flex flex-wrap justify-between gap-3"><button type="button" className={secondary} onClick={() => { if (step === 0) reset(); else setStep(step - 1); }}>{step === 0 ? 'Themenauswahl' : 'Zurück'}</button><button type="submit" disabled={!answers[step]} className={`${button} disabled:cursor-not-allowed disabled:opacity-40`}>{step === topic.questions.length - 1 ? 'Ergebnis ansehen' : 'Weiter'}</button></div>
      </form>
    </>}
    <p role="status" className="mt-4 text-sm leading-6 text-calm-gold">{notice}</p>
    <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-6 text-calm-muted">Deine Antworten bleiben während des Checks im Arbeitsspeicher dieser Seite. Beim Neuladen gehen sie verloren. Erst wenn du eine E-Mail selbst versendest, teilst du deren Inhalt mit JaMoKo.</p>
  </div>;
}
