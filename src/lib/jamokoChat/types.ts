export interface JamokoResponse {
  problem: string;
  einschätzung: "JA" | "NEIN";
  empfehlung: string;
  vorschlag: string;
}

export interface JamokoChatMessage {
  from: "user" | "bot";
  text: unknown;
}
