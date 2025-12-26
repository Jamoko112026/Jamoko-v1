export async function sendJamokoMessage(text: string) {
  const res = await fetch("http://localhost:5000/api/jamoko-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  if (!res.ok) throw new Error("Fehler im Chat-Endpoint");

  return res.json();
}
