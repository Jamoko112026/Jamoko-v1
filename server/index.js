// server/index.js
import express from "express";
import cors from "cors";
import jamokoChatController from "./jamokoChatController.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.post("/api/jamoko-chat", jamokoChatController);

// Server starten
app.listen(5000, () => {
  console.log("🚀 JaMoKo Chat API läuft auf http://localhost:5000");
});
