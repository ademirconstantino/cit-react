/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type LangContextType = {
  langSelected: string;
  setLangSelected: (lang: string) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [langSelected, setLangSelected] = useState(() => {
    // Initialize from localStorage, fallback to "en"
    return localStorage.getItem("langSelected") || "en";
  });

  useEffect(() => {
    // Update localStorage whenever langSelected changes
    localStorage.setItem("langSelected", langSelected);
  }, [langSelected]);

  return (
    <LangContext.Provider value={{ langSelected, setLangSelected }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used inside a LangProvider");
  }
  return context;
}
