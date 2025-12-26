import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatBubbleLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatWindow onClose={() => setOpen(false)} />}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-jamoko-gold to-jamoko-teal w-16 h-16 rounded-full shadow-xl hover:scale-105 transition"
      />
    </>
  );
}
