"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  compact = false,
}) => {
  const { language, setLanguage, t } = useLanguage();

  if (compact) {
    return (
      <div
        className={`inline-flex items-center rounded-xl border border-beige-300 bg-cream-50 p-0.5 shadow-sm ${className}`}
        role="group"
        aria-label={t.accessibility.languageSelection}
      >
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`min-w-[44px] min-h-[44px] rounded-lg px-2 text-xs font-bold tracking-wide transition-colors flex items-center justify-center ${
            language === "en"
              ? "bg-olive-700 text-cream-50 shadow-sm"
              : "text-brown-700 hover:text-brown-950 hover:bg-beige-100"
          }`}
          aria-pressed={language === "en"}
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => setLanguage("ta")}
          className={`min-w-[44px] min-h-[44px] rounded-lg px-2 text-xs font-bold transition-colors font-tamil flex items-center justify-center ${
            language === "ta"
              ? "bg-olive-700 text-cream-50 shadow-sm"
              : "text-brown-700 hover:text-brown-950 hover:bg-beige-100"
          }`}
          aria-pressed={language === "ta"}
        >
          த
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-beige-300 bg-cream-50 p-1 shadow-sm transition-all duration-200 hover:border-olive-500 ${className}`}
      role="group"
      aria-label={t.accessibility.languageSelection}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 min-h-[44px] ${
          language === "en"
            ? "bg-olive-700 text-cream-50 shadow-sm"
            : "text-brown-700 hover:text-brown-950 hover:bg-beige-100"
        }`}
        aria-pressed={language === "en"}
      >
        <span className="text-xs font-bold">EN</span>
        <span>English</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ta")}
        className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 min-h-[44px] ${
          language === "ta"
            ? "bg-olive-700 text-cream-50 shadow-sm"
            : "text-brown-700 hover:text-brown-950 hover:bg-beige-100 font-tamil"
        }`}
        aria-pressed={language === "ta"}
      >
        <span className="font-tamil text-sm">தமிழ்</span>
      </button>
    </div>
  );
};
