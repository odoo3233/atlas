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
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b ${
        isScrolled ? "shadow-md border-atlas-brown-100/20" : "shadow-sm border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <BrandLogo size="md" animated={false} variant="default" />
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-bold text-atlas-dark">أطلس الشرق</h1>
              <p className="text-sm lg:text-base text-atlas-brown-600">Atlas Al-Sharq</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-atlas-brown-700 hover:text-atlas-dark transition-colors"
              >
                {t(`common:nav.${item.name}`)}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-atlas-brown-700 hover:bg-atlas-brown-50">
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
                 <DropdownMenuItem onClick={() => changeLanguage("zh")}>
                  <span className="font-semibold">中文</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-atlas-brown-700 hover:bg-atlas-brown-50"
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
      <nav
        className={`lg:hidden absolute top-full left-0 w-full bg-background shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "animate-slide-down" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-lg font-semibold text-atlas-brown-700 hover:text-atlas-dark hover:bg-atlas-brown-50 rounded-lg px-3 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <item.icon className="h-5 w-5 text-atlas-gold-500" />
                <span>{t(`common:nav.${item.name}`)}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
