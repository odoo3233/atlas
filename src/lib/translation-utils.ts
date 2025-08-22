import { useTranslation } from "react-i18next"

export function getFallbackTranslation(key: string, defaultValue: string = ""): string {
  try {
    const { t } = useTranslation()
    const translation = t(key)
    return translation === key ? defaultValue : translation
  } catch (error) {
    return defaultValue
  }
}

export function getCurrentLanguage(): string {
  try {
    const { i18n } = useTranslation()
    return i18n.language || "ar"
  } catch (error) {
    return "ar"
  }
}

export function useTranslationSafe() {
  try {
    return useTranslation()
  } catch (error) {
    return {
      t: (key: string) => key,
      i18n: {
        language: "ar",
        changeLanguage: () => {},
        dir: () => "rtl"
      }
    }
  }
}
