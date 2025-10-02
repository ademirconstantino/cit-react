import React, { createContext, useContext, useState, ReactNode } from "react";

type LangContextType = {
  langSelected: string;
  setLangSelected: (lang: string) => void;
};

// Create context with default undefined
const LangContext = createContext<LangContextType | undefined>(undefined);

// Provider component
export function LangProvider({ children }: { children: ReactNode }) {
  const [langSelected, setLangSelected] = useState("en");

  return (
    <LangContext.Provider value={{ langSelected, setLangSelected }}>
      {children}
    </LangContext.Provider>
  );
}

// Hook for easier usage
export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used inside a LangProvider");
  }
  return context;
}
