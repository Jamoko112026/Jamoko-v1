import type { ChatMessage as Msg } from "./chat";

export default function ChatMessage({ msg }: { msg: Msg }) {
  return (
    <div
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
  );
}
