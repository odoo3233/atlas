import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationAR from '../translations/ar.json';
import translationEN from '../translations/en.json';
import translationZH from '../translations/zh.json';

// the translations
const resources = {
  ar: {
    common: translationAR.common,
    home: translationAR.home,
    about: translationAR.about,
    services: translationAR.services,
    exhibitions: translationAR.exhibitions,
    contact: translationAR.contact,
    products: translationAR.products,
    orders: translationAR.orders,
    businessVisits: translationAR.businessVisits,
    footer: translationAR.footer
  },
  en: {
    common: translationEN.common,
    home: translationEN.home,
    about: translationEN.about,
    services: translationEN.services,
    exhibitions: translationEN.exhibitions,
    contact: translationEN.contact,
    products: translationEN.products,
    orders: translationEN.orders,
    businessVisits: translationEN.businessVisits,
    footer: translationEN.footer
  },
  zh: {
    common: translationZH.common,
    home: translationZH.home,
    about: translationZH.about,
    services: translationZH.services,
    exhibitions: translationZH.exhibitions,
    contact: translationZH.contact,
    products: translationZH.products,
    orders: translationZH.orders,
    businessVisits: translationZH.businessVisits,
    footer: translationZH.footer
  }
};

// Get saved language preference or default to Arabic
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('preferred-language');
    if (saved && ['ar', 'en', 'zh'].includes(saved)) {
      return saved;
    }
  }
  return 'ar';
};

// Initialize i18n only once
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: getInitialLanguage(), // Use saved preference or default
      debug: false, // Set to true for debugging
      interpolation: {
        escapeValue: false // react already safes from xss
      },
      react: {
        useSuspense: false, // This is important for SSR
        bindI18n: 'languageChanged loaded',
        bindI18nStore: 'added removed',
        nsMode: 'default'
      },
      // Add these options to prevent hydration issues
      keySeparator: false,
      nsSeparator: false,
      // Preload all namespaces
      defaultNS: 'common',
      ns: ['common', 'home', 'about', 'services', 'exhibitions', 'contact', 'products', 'orders', 'businessVisits', 'footer'],
      // Ensure consistent language detection
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
      },
      // Add fallback handling
      saveMissing: false,
      missingKeyHandler: (lng, ns, key, fallbackValue) => {
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
        // Return a meaningful fallback instead of the raw key
        const fallbackMap: { [key: string]: string } = {
          'common.companyName': 'أطلس الشرق',
          'common.companyNameEn': 'Atlas Al-Sharq',
          'common.home': 'الرئيسية',
          'common.about': 'من نحن',
          'common.services': 'خدماتنا',
          'common.exhibitions': 'المعارض',
          'common.products': 'متجر أطلس الشرق',
          'common.contact': 'اتصل بنا',
          'common.learnMore': 'اعرف المزيد',
          'common.getStarted': 'ابدأ الآن',
          'common.contactUs': 'تواصل معنا',
          'common.viewAll': 'عرض الكل',
          'common.readMore': 'اقرأ المزيد',
          'common.download': 'تحميل',
          'common.submit': 'إرسال',
          'common.cancel': 'إلغاء',
          'common.save': 'حفظ',
          'common.edit': 'تعديل',
          'common.delete': 'حذف',
          'common.search': 'بحث',
          'common.filter': 'تصفية',
          'common.sort': 'ترتيب',
          'common.loading': 'جاري التحميل...',
          'common.error': 'حدث خطأ',
          'common.success': 'تم بنجاح',
          'common.warning': 'تحذير',
          'common.info': 'معلومات'
        };
        return fallbackMap[key] || fallbackValue || key;
      },
      // Ensure proper fallback chain
      fallbackLng: {
        'en': ['ar'],
        'zh': ['ar'],
        'default': ['ar']
      },
      // Add these options for better SSR support
      initImmediate: false,
      partialBundledLanguages: true,
      resources: resources
    });
}

export default i18n;
