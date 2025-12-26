import "dotenv/config";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function jamokoChatController(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Kein Text übergeben." });
  }

  try {
    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input:
        `User-Anfrage:\n"${message}"\n\nAufgabe:\n- Analysiere, was der User braucht.\n- Identifiziere Problem / Ziel / Kontext.\n- Entscheide: Kann JaMoKo helfen? (JA/NEIN)\n- Empfiehl konkrete Schritte.\n- Sprich ruhig, klar, professionell.\n\nRückgabeformat (JSON!):\n{\n"problem": "...",\n"einschaetzung": "JA" | "NEIN",\n"empfehlung": "...",\n"vorschlag": "..."\n}`
    });

    let raw =
      completion.output_text ??
      completion.output?.[0]?.content?.[0]?.text ??
      completion.response?.output?.[0]?.text ??
      completion.response?.output_text ??
      null;

    if (!raw) {
      throw new Error("Keine gültige OpenAI-Antwort erkannt.");
    }

    const data = JSON.parse(raw);

    const logPath = path.join("server", "logs", `chat_${Date.now()}.json`);
    fs.writeFileSync(
      logPath,
      JSON.stringify({ timestamp: new Date(), message, response: data }, null, 2)
    );

    res.json(data);

  } catch (err) {
    console.error("❌ Fehler im Chat-Controller:", err);
    res.status(500).json({
      error: "Fehler beim Analysieren.",
      details: err.message,
    });
  }
}
