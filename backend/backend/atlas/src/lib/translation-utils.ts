import i18n from './i18n'

// Helper function to get translation safely
export function getTranslation(key: string, defaultValue: string = ''): string {
  try {
    if (!i18n.isInitialized) {
      return defaultValue
    }
    
    const translation = i18n.t(key)
    return translation === key ? defaultValue : translation
  } catch (error) {
    console.warn(`Translation error for key: ${key}`, error)
    return defaultValue
  }
}

// Helper function to get current language
export function getCurrentLanguage(): string {
  try {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferred-language')
      if (saved && ['ar', 'en', 'zh'].includes(saved)) {
        return saved
      }
    }
    return i18n.language || 'ar'
  } catch (error) {
    return 'ar'
  }
}

// Helper function to check if component is mounted
export function isClient(): boolean {
  return typeof window !== 'undefined'
}

// Helper function to get direction
export function getDirection(language?: string): 'rtl' | 'ltr' {
  const lang = language || getCurrentLanguage()
  return lang === 'ar' ? 'rtl' : 'ltr'
}

// Fallback translations for common keys
export const fallbackTranslations = {
  ar: {
    'common.companyName': 'أطلس الشرق',
    'common.companyNameEn': 'Atlas Al-Sharq',
    'common.home': 'الرئيسية',
    'common.about': 'من نحن',
    'common.services': 'خدماتنا',
    'common.exhibitions': 'المعارض',
    'common.products': 'متجر أطلس الشرق',
    'common.contact': 'اتصل بنا',
    'common.contactUs': 'تواصل معنا',
    'common.learnMore': 'اعرف المزيد',
    'common.getStarted': 'ابدأ الآن',
    'common.viewAll': 'عرض الكل',
    'common.readMore': 'اقرأ المزيد',
  },
  en: {
    'common.companyName': 'Atlas Al-Sharq',
    'common.companyNameEn': 'Atlas Al-Sharq',
    'common.home': 'Home',
    'common.about': 'About Us',
    'common.services': 'Services',
    'common.exhibitions': 'Exhibitions',
    'common.products': 'Atlas Al-Sharq Store',
    'common.contact': 'Contact Us',
    'common.contactUs': 'Contact Us',
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
  },
  zh: {
    'common.companyName': 'Atlas Al-Sharq',
    'common.companyNameEn': 'Atlas Al-Sharq',
    'common.home': '首页',
    'common.about': '关于我们',
    'common.services': '服务',
    'common.exhibitions': '展览',
    'common.products': 'Atlas Al-Sharq 商店',
    'common.contact': '联系我们',
    'common.contactUs': '联系我们',
    'common.learnMore': '了解更多',
    'common.getStarted': '开始使用',
    'common.viewAll': '查看全部',
    'common.readMore': '阅读更多',
  }
}

// Get fallback translation
export function getFallbackTranslation(key: string, language: string = 'ar'): string {
  const fallbacks = fallbackTranslations[language as keyof typeof fallbackTranslations] || fallbackTranslations.ar
  return fallbacks[key as keyof typeof fallbacks] || key
}
