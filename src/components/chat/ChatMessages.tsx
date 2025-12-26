import type { ChatMessage } from "./chat";

export interface ChatMessagesProps {
  messages: ChatMessage[];
  loading: boolean;
}

export default function ChatMessages({ messages, loading }: ChatMessagesProps) {
  return (
    <div className="p-4 h-80 overflow-y-auto space-y-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`p-3 rounded-xl max-w-[80%] ${
            msg.from === "user"
              ? "bg-jamoko-teal/20 ml-auto"
              : "bg-[#012633]/70"
          }`}
        >
          {typeof msg.text === "string"
            ? msg.text
            : JSON.stringify(msg.text, null, 2)}
        </div>
      ))}

      {loading && (
        <div className="text-jamoko-gold">Mo antwortet…</div>
      )}
    </div>
  );
}
