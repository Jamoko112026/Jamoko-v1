import { useState } from "react";
import { sendJamokoMessage } from "../lib/jamokoChat/sendMessage";

export function useJamokoChat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    setLoading(true);

    setMessages(prev => [...prev, { from: "user", text }]);

    const response = await sendJamokoMessage(text);

    setMessages(prev => [...prev, { from: "bot", text: response }]);
    setLoading(false);
  }

  return {
    messages,
    loading,
    sendMessage
  };
}
