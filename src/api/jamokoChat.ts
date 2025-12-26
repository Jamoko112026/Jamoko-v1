export default async function jamokoChat(userInput: string) {
  const res = await fetch("/api/jamoko-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await res.json();
  return data.reply;
}
