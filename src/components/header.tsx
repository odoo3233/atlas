"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Menu,
  X,
  Globe,
  Home,
  Info,
  Briefcase,
  Package,
  Calendar,
  Phone,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BrandLogo } from "@/components/brand-logo";

export function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: "home", href: "/", icon: Home },
    { name: "about", href: "/about", icon: Info },
    { name: "services", href: "/services", icon: Briefcase },
    { name: "products", href: "/products", icon: Package },
    { name: "exhibitions", href: "/exhibitions", icon: Calendar },
    { name: "businessVisits", href: "/business-visits", icon: Building },
    { name: "contact", href: "/contact", icon: Phone },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false); // Close menu on language change
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "glass-strong shadow-2xl border-border/20" 
          : "glass shadow-lg border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group hover-lift">
            <div className="relative">
              <BrandLogo size="md" animated={true} variant="default" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500 drop-shadow-sm">
                أطلس الشرق
              </h1>
              <p className="text-sm lg:text-base text-medium-contrast group-hover:text-primary transition-colors duration-300 font-semibold">
                Atlas Al-Sharq
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-lg font-semibold text-high-contrast hover:text-primary transition-all duration-300 group px-3 py-2 rounded-xl hover:bg-primary/5"
              >
                <span className="relative z-10">
                  {t(`nav.${item.name}`, { ns: 'common' })}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-8 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl hover-lift group">
                  <Globe className="h-5 w-5 lg:h-6 lg:w-6 group-hover:animate-spin transition-transform" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={i18n.language === "ar" ? "start" : "end"}
              >
                <DropdownMenuItem onClick={() => changeLanguage("ar")}>
                  <span className="font-semibold">العربية</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  <span className="font-semibold">English</span>
                </DropdownMenuItem>
                 <DropdownMenuItem onClick={() => changeLanguage("zh")}>
                  <span className="font-semibold">中文</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden relative text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl hover-lift group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 group-hover:animate-spin transition-transform" />
                ) : (
                  <Menu className="h-6 w-6 group-hover:animate-pulse transition-transform" />
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <nav
        className={`lg:hidden absolute top-full left-0 w-full glass-strong shadow-2xl transition-all duration-500 ease-out ${
          isMobileMenuOpen ? "transform-none opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="group block py-4 text-lg font-semibold text-high-contrast hover:text-primary rounded-2xl px-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 mb-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animationDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
                animation: isMobileMenuOpen ? 'fade-right 400ms ease-out forwards' : 'none'
              }}
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <item.icon className="h-5 w-5 text-primary group-hover:animate-bounce" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">
                  {t(`nav.${item.name}`, { ns: 'common' })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
