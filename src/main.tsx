// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Theme zuerst
import "./assets/jamoko_theme.css";

// Danach Tailwind
import "./index.css";

import App from "./App";

// PricingContext IMPORT
import { PricingProvider } from "./state/PricingContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PricingProvider>
        <App />
      </PricingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
