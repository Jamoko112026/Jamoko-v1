// src/state/PricingContext.tsx

import { useState } from "react";
import { PricingContext, type Cycle } from "./pricing-context";

export function PricingProvider({ children }: { children: React.ReactNode }) {
  const [cycle, setCycle] = useState<Cycle>("monthly");

  const toggleCycle = () => {
    setCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <PricingContext.Provider value={{ cycle, toggleCycle, setCycle }}>
      {children}
    </PricingContext.Provider>
  );
}
