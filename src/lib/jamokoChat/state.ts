import { useState } from "react";
import type { JamokoChatMessage } from "./types";

export function useChatState() {
  const [messages, setMessages] = useState<JamokoChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  return {
    messages,
    setMessages,
    loading,
    setLoading,
  };
}
