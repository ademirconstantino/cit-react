/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type LangContextType = {
  langSelected: string;
  setLangSelected: (lang: string) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

// Browser language (ISO 639-1) -> site language code
const BROWSER_TO_SITE_LANG: Record<string, string> = {
  en: "en",
  es: "es",
  it: "it",
  pt: "pt",
  fr: "fr",
  de: "de",
  zh: "ch",
  ja: "jp",
  ar: "em",
};

// Only a language the user picked by hand is stored, so everyone else keeps following
// the browser/OS language. (The old "langSelected" key was written on every visit.)
const STORAGE_KEY = "langChosen";

function detectBrowserLang(): string {
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const lang = BROWSER_TO_SITE_LANG[tag?.toLowerCase().split("-")[0]];
    if (lang) return lang;
  }
  return "en";
}

function readStoredLang(): string | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && Object.values(BROWSER_TO_SITE_LANG).includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [langSelected, setLang] = useState(() => readStoredLang() ?? detectBrowserLang());

  const setLangSelected = (lang: string) => {
    setLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable (private mode): the choice lasts for this visit only
    }
  };

  useEffect(() => {
    try {
      localStorage.removeItem("langSelected");
    } catch {
      // storage unavailable
    }
  }, []);

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
