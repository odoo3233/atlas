"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const changeLanguage = (lng: string) => {
    console.log('Changing language to:', lng)
    
    try {
      // Save language preference to localStorage first
      localStorage.setItem('preferred-language', lng)
      
      // Change i18n language
      i18n.changeLanguage(lng)
      
      // Update HTML dir attribute for RTL/LTR
      const dir = lng === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.dir = dir
      document.documentElement.lang = lng
      
      // Close dropdown
      setIsOpen(false)
      
      // Force a page reload to ensure all components update
      setTimeout(() => {
        window.location.reload()
      }, 100)
    } catch (error) {
      console.error('Error changing language:', error)
      // Fallback: just reload the page
      window.location.reload()
    }
  }

  // Get current language
  const currentLanguage = i18n.language || 'ar'

  // Get current flag and language name
  const getCurrentLanguageInfo = () => {
    switch (currentLanguage) {
      case 'ar':
        return { flag: '🇸🇦', name: 'العربية' }
      case 'en':
        return { flag: '🇺🇸', name: 'English' }
      case 'zh':
        return { flag: '🇨🇳', name: '中文' }
      default:
        return { flag: '🇸🇦', name: 'العربية' }
    }
  }

  const currentLang = getCurrentLanguageInfo()

  if (!mounted) {
    return (
      <div className="relative inline-block">
        <button className="flex items-center space-x-2 text-white hover:text-blue-300 px-3 py-2 rounded-md transition-colors">
          <span className="text-lg">🇸🇦</span>
          <span className="text-sm">العربية</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <div className="relative inline-block">
      <button 
        className="flex items-center space-x-2 text-white hover:text-blue-300 px-3 py-2 rounded-md transition-colors"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        style={{ cursor: 'pointer' }}
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm">{currentLang.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
            <div className="py-1">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  changeLanguage('ar')
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-100 transition-colors ${
                  currentLanguage === 'ar' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <span className="text-lg">🇸🇦</span>
                <span>العربية</span>
                {currentLanguage === 'ar' && <span className="ml-auto text-blue-600">✓</span>}
              </button>
              
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  changeLanguage('en')
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-100 transition-colors ${
                  currentLanguage === 'en' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <span className="text-lg">🇺🇸</span>
                <span>English</span>
                {currentLanguage === 'en' && <span className="ml-auto text-blue-600">✓</span>}
              </button>
              
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  changeLanguage('zh')
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-100 transition-colors ${
                  currentLanguage === 'zh' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <span className="text-lg">🇨🇳</span>
                <span>中文</span>
                {currentLanguage === 'zh' && <span className="ml-auto text-blue-600">✓</span>}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
