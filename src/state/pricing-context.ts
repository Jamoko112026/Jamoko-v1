import { createContext, useContext } from "react";

export type Cycle = "monthly" | "yearly";

interface PricingContextValue {
  cycle: Cycle;
  toggleCycle: () => void;
  setCycle: (value: Cycle) => void;
}

export const PricingContext = createContext<PricingContextValue>({
  cycle: "monthly",
  toggleCycle: () => {},
  setCycle: () => {},
});

export function usePricing() {
  return useContext(PricingContext);
}
