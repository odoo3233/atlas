import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import arTranslations from "./translations/ar.json";
import enTranslations from "./translations/en.json";
import zhTranslations from "./translations/zh.json";

const resources = {
  ar: {
    translation: arTranslations,
  },
  en: {
    translation: enTranslations,
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
