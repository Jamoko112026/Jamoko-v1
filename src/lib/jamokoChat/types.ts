export interface JamokoResponse {
  problem: string;
  einschätzung: "JA" | "NEIN";
  empfehlung: string;
  vorschlag: string;
}
