"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations (single JSON per language with nested namespaces)
import ar from "./translations/ar.json";
import en from "./translations/en.json";
import zh from "./translations/zh.json";

// Use flat structure instead of namespaces
const resources = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

// Use a stable default to prevent SSR/CSR mismatches. The actual language
// will be set by I18nProvider based on a server-provided cookie.
const defaultLanguage = "ar";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: defaultLanguage,
      fallbackLng: "ar",
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
