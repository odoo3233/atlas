'use client'

import { useEffect } from 'react'
import i18n from '@/lib/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    try {
      // Get saved language preference
      const savedLanguage = localStorage.getItem('preferred-language');
      const currentLanguage = savedLanguage && ['ar', 'en', 'zh'].includes(savedLanguage) 
        ? savedLanguage 
        : 'ar';
      
      // Set language
      i18n.changeLanguage(currentLanguage);
      
      // Update HTML attributes
      const dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = currentLanguage;
    } catch (error) {
      // Continue rendering even if i18n fails
    }
  }, [])

  // Always render children immediately - never block rendering
  return <>{children}</>
}
