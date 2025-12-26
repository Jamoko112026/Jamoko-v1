import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6 z-50
            w-16 h-16 rounded-full
            bg-gradient-to-br from-jamoko-gold to-jamoko-teal
            shadow-[0_0_25px_rgba(26,199,164,0.35)]
            hover:shadow-[0_0_40px_rgba(26,199,164,0.45)]
            transition-all duration-300
            flex items-center justify-center text-jamoko-navy font-bold text-xl
          "
        >
          💬
        </button>
      )}

      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}
