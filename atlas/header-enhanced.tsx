"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Menu, X, Search, User, ChevronDown, Calendar, Users, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

export function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: 'المعارض الدولية', icon: Calendar, href: '/exhibitions' },
    { name: 'الشبكات التجارية الاستراتيجية', icon: Users, href: '/networking' },
    { name: 'تطوير الشراكات الاستراتيجية', icon: Handshake, href: '/partnerships' }
  ]

  return (
    <header 
      className={cn(
        "w-full transition-all duration-300 z-50",
        isScrolled ? "header-sticky bg-eerie-black/95 backdrop-blur-md" : "absolute"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-40">
              <Image 
                src="/logo.jpg" 
                alt="Atlas Al-Sharq" 
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="nav-link active">
              {t('common.home')}
            </Link>
            <Link href="/about" className="nav-link">
              {t('common.about')}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="nav-link flex items-center space-x-1 group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <span>{t('common.services')}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">خدماتنا</h3>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <service.icon className="h-5 w-5 text-primary" />
                          <span className="text-gray-700 font-medium">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/exhibitions" className="nav-link">
              {t('common.exhibitions')}
            </Link>
            <Link href="/products" className="nav-link">
              {t('common.products')}
            </Link>
            <Link href="/contact" className="nav-link">
              {t('common.contact')}
            </Link>
          </nav>
          
          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="tap-target">
              <Search className="h-5 w-5 text-white" />
              <span className="sr-only">{t('common.search')}</span>
            </Button>
            <Button variant="ghost" size="icon" className="tap-target">
              <User className="h-5 w-5 text-white" />
              <span className="sr-only">{t('common.login')}</span>
            </Button>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-4">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="icon" 
              className="tap-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-sm">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link 
              href="/" 
              className="nav-link active py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('common.home')}
            </Link>
            <Link 
              href="/about" 
              className="nav-link py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('common.about')}
            </Link>
            
            {/* Mobile Services */}
            <div className="space-y-2">
              <div className="text-white font-semibold py-2">{t('common.services')}</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center space-x-3 py-2 px-4 text-white/90 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <service.icon className="h-4 w-4" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
            
            <Link 
              href="/exhibitions" 
              className="nav-link py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('common.exhibitions')}
            </Link>
            <Link 
              href="/products" 
              className="nav-link py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('common.products')}
            </Link>
            <Link 
              href="/contact" 
              className="nav-link py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('common.contact')}
            </Link>
            
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="tap-target">
                <Search className="h-5 w-5 text-white" />
                <span className="sr-only">{t('common.search')}</span>
              </Button>
              <Button variant="ghost" size="icon" className="tap-target">
                <User className="h-5 w-5 text-white" />
                <span className="sr-only">{t('common.login')}</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
