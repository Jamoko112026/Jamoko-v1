import { useState } from "react";

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 border-t border-white/10 flex gap-2 bg-[#001821]/80"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 bg-[#012633] p-2 rounded-lg text-jamoko-text
                   focus:outline-none focus:ring-2 focus:ring-jamoko-teal/40"
        placeholder="Frag Mo…"
      />

      <button
        className="px-4 py-2 rounded-lg bg-jamoko-teal text-[#001821] font-semibold"
      >
        Senden
      </button>
    </form>
  );
}
