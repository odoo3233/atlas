"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe, ShoppingBag } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "المنتجات", href: "/products" },
    { name: "المعارض", href: "/exhibitions" },
    { name: "الزيارات التجارية", href: "/business-visits" },
    { name: "اتصل بنا", href: "/contact" },
  ]

  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50" 
        : "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 rtl:space-x-reverse group">
            <div className="relative">
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${
                isScrolled 
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl" 
                  : "bg-white/20 backdrop-blur-md border border-white/30"
              }`}>
                <ShoppingBag className={`w-8 h-8 lg:w-9 lg:h-9 transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                }`} />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse shadow-lg" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
                أطلس الشرق
              </h1>
              <p className={`text-sm lg:text-base transition-colors duration-300 ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}>
                Atlas Al-Sharq
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? "text-gray-700 hover:text-blue-600" 
                    : "text-white hover:text-white/90"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">🇸🇦 العربية</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 rtl:left-0 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => setIsLanguageDropdownOpen(false)}
                      className="w-full text-right rtl:text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2 rtl:space-x-reverse text-gray-700"
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              <span>تواصل معنا</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/20">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200/20">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white/20 backdrop-blur-md text-white border border-white/30"
                  }`}
                >
                  <span>تواصل معنا</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
