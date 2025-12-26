import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatLoaderDots from "./ChatLoaderDots";
import type { ChatMessage } from "./chat";

interface ChatWindowProps {
  onClose?: () => void;  // ⭐ optionaler Close-Handler
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    const newMsg: ChatMessage = { from: "user", text };
    setMessages((prev) => [...prev, newMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/jamoko-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      const bot: ChatMessage = {
        from: "assistant",
        text: data,
      };

      setMessages((prev) => [...prev, bot]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "assistant", text: "Fehler beim Analysieren." },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl overflow-hidden bg-[#001821]/60 backdrop-blur-xl border border-white/10 shadow-lg relative">

      {/* ❌ Close-Button optional */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-jamoko-text-dim hover:text-jamoko-gold text-xl"
        >
          ✕
        </button>
      )}

      <ChatHeader />
      <ChatMessages messages={messages} loading={loading} />

      {loading && <ChatLoaderDots />}

      <ChatInput onSend={sendMessage} />
    </div>
  );
}
