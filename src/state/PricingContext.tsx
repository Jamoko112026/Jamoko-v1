// src/state/PricingContext.tsx

import { createContext, useContext, useState } from "react";

type Cycle = "monthly" | "yearly";

interface PricingContextValue {
  cycle: Cycle;
  toggleCycle: () => void;
  setCycle: (v: Cycle) => void;
}

const PricingContext = createContext<PricingContextValue>({
  cycle: "monthly",
  toggleCycle: () => {},
  setCycle: () => {},
});

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

export const usePricing = () => useContext(PricingContext);
