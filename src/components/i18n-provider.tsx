"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      document.documentElement.lang = lng;
      document.documentElement.dir = i18n.dir(lng);
      try {
        // Persist to cookie for SSR to read on next requests
        document.cookie = `lang=${lng}; path=/; max-age=31536000`;
        localStorage.setItem("lang", lng);
      } catch {}
    };

    i18n.on("languageChanged", handleLanguageChange);
    
    // Set initial language from cookie/localStorage to avoid SSR mismatch
    let initial = 'ar';
    try {
      const cookieLang = document.cookie.split('; ').find((c) => c.startsWith('lang='))?.split('=')[1];
      const stored = localStorage.getItem('lang');
      initial = cookieLang || stored || 'ar';
    } catch {}
    if (i18n.language !== initial) {
      i18n.changeLanguage(initial);
    }
    handleLanguageChange(initial);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
