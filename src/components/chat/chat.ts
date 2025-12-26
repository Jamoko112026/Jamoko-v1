export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  from: ChatRole;
  text: string | object;
}

export interface ChatResponse {
  problem: string;
  einschaetzung: "JA" | "NEIN";
  empfehlung: string;
  vorschlag: string;
}
