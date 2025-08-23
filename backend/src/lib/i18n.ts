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
    businessVisits: translationAR.businessVisits,
    products: translationAR.products,
    footer: translationAR.footer,
    contact: translationAR.contact,
    services: translationAR.services,
    exhibitions: translationAR.exhibitions,
    orders: translationAR.orders
  },
  en: {
    common: translationEN.common,
    home: translationEN.home,
    businessVisits: translationEN.businessVisits,
    products: translationEN.products,
    footer: translationEN.footer,
    contact: translationEN.contact,
    services: translationEN.services,
    exhibitions: translationEN.exhibitions,
    orders: translationEN.orders
  },
  zh: {
    common: translationZH.common,
    home: translationZH.home,
    businessVisits: translationZH.businessVisits,
    products: translationZH.products,
    footer: translationZH.footer,
    contact: translationZH.contact,
    services: translationZH.services,
    exhibitions: translationZH.exhibitions,
    orders: translationZH.orders
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
      useSuspense: false // This is important for SSR
    },
    // Add these options to prevent hydration issues
    keySeparator: false,
    nsSeparator: false,
    // Preload all namespaces
    defaultNS: 'common',
    ns: ['common', 'home', 'businessVisits', 'products', 'footer', 'contact', 'services', 'exhibitions', 'orders'],
    // Ensure consistent language detection
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    // Add fallback handling
    saveMissing: false,
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
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
    }
  });

export default i18n;
