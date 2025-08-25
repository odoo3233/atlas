"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations (single JSON per language with nested namespaces)
import ar from "./translations/ar.json";
import en from "./translations/en.json";
import zh from "./translations/zh.json";

// Build namespaced resources from nested JSON keys
const resources = {
  ar: {
    common: ar.common || {},
    home: ar.home || {},
    contact: ar.contact || {},
    services: ar.services || {},
    products: ar.products || {},
    orders: ar.orders || {},
    exhibitions: ar.exhibitions || {},
    businessVisits: ar.businessVisits || {},
    footer: (ar as any).footer || {},
    falconRegistration: ar.falconRegistration || {},
  },
  en: {
    common: en.common || {},
    home: en.home || {},
    contact: en.contact || {},
    services: en.services || {},
    products: en.products || {},
    orders: en.orders || {},
    exhibitions: en.exhibitions || {},
    businessVisits: en.businessVisits || {},
    footer: (en as any).footer || {},
    falconRegistration: en.falconRegistration || {},
  },
  zh: {
    common: zh.common || {},
    home: zh.home || {},
    contact: zh.contact || {},
    services: zh.services || {},
    products: zh.products || {},
    orders: zh.orders || {},
    exhibitions: zh.exhibitions || {},
    businessVisits: zh.businessVisits || {},
    footer: (zh as any).footer || {},
    falconRegistration: zh.falconRegistration || {},
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
      ns: [
        "common",
        "home",
        "contact",
        "services",
        "products",
        "orders",
        "exhibitions",
        "businessVisits",
        "footer",
        "falconRegistration",
      ],
      defaultNS: "common",
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
