'use client'

import { useEffect, useState } from 'react'
import i18n from '@/lib/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false)

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
      
      // Set mounted to true after initialization
      setMounted(true);
    } catch (error) {
      console.warn('i18n initialization error:', error);
      // Continue rendering even if i18n fails
      setMounted(true);
    }
  }, [])

  // Show loading state until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Always render children immediately - never block rendering
  return <>{children}</>
}
