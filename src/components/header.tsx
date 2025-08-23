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
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-atlas-brown-100/50"
          : "bg-gradient-to-r from-atlas-brown-900 via-atlas-brown-700 to-atlas-gold-600"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-4 rtl:space-x-reverse group"
          >
            <BrandLogo
              size="md"
              animated={true}
              variant={isScrolled ? "default" : "white"}
              className="transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1
                className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-atlas-dark" : "text-white"
                }`}
              >
                أطلس الشرق
              </h1>
              <p
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  isScrolled ? "text-atlas-brown-600" : "text-atlas-gold-100"
                }`}
              >
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
                    ? "text-atlas-brown-700 hover:text-atlas-gold-600"
                    : "text-white hover:text-atlas-gold-300"
                } relative group`}
              >
                {t(`nav.${item.name}`)}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-atlas-gold-600" : "bg-atlas-gold-300"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 ${
                    isScrolled
                      ? "hover:bg-atlas-brown-100 text-atlas-brown-700"
                      : "hover:bg-white/20 text-white"
                  }`}
                >
                  <Globe className="h-5 w-5 lg:h-6 lg:w-6" />
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
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled
                  ? "hover:bg-atlas-brown-100 text-atlas-brown-700"
                  : "hover:bg-white/20 text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-slide-in-down">
          <div className="container mx-auto px-4 py-4">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-lg font-semibold text-atlas-brown-700 hover:text-atlas-gold-600 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <item.icon className="h-5 w-5 text-atlas-gold-600" />
                  <span>{t(`nav.${item.name}`)}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
