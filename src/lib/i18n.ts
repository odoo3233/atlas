import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enTranslations from "@/translations/en.json";
import arTranslations from "@/translations/ar.json";
import zhTranslations from "@/translations/zh.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
  zh: {
    translation: zhTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // default language
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
