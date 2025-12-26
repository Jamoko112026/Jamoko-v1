import { useState } from "react";

export function useChatState() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  return {
    messages,
    setMessages,
    loading,
    setLoading,
  };
}
