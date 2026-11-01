"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "@/i18n/en";
import { ta } from "@/i18n/ta";
import { TranslationSchema } from "@/i18n/types";

export type Language = "en" | "ta";

type LanguageContextType = {
  language: Language;
  t: TranslationSchema;
  isTamil: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "mfp_preferred_lang";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TODO: Consider /ta subpath routes or middleware cookie detection in the future
  // to completely eliminate client-side language flash for returning visitors.
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "ta" || saved === "en") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      } else {
        document.documentElement.lang = "en";
      }
    } catch {
      // LocalStorage access might be blocked in private mode; graceful fallback to "en"
      document.documentElement.lang = "en";
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "ta" : "en";
    setLanguage(next);
  };

  const t = language === "ta" ? ta : en;
  const isTamil = language === "ta";

  return (
    <LanguageContext.Provider
      value={{
        language,
        t,
        isTamil,
        toggleLanguage,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

