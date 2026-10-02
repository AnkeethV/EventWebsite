"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { Guest } from "../types/config";

interface GuestContextValue {
  guest: Guest | null;
  isPersonalized: boolean;
  dynamicName: string | null;
  setDynamicName: (name: string) => void;
}

const GuestContext = createContext<GuestContextValue>({
  guest: null,
  isPersonalized: false,
  dynamicName: null,
  setDynamicName: () => {},
});

export function GuestProvider({ guest, children }: { guest: Guest | null; children: ReactNode }) {
  const [dynamicName, setDynamicName] = useState<string | null>(null);

  return (
    <GuestContext.Provider value={{ guest, isPersonalized: !!guest, dynamicName, setDynamicName }}>
      {children}
    </GuestContext.Provider>
  );
}

export function useGuest() {
  return useContext(GuestContext);
}
