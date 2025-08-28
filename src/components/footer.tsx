"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-atlas-dark text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-atlas-brown-900/20 to-atlas-gold-900/20"></div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <BrandLogo size="md" animated={false} variant="default" />
                <div>
                  <h3 className="text-2xl font-bold">أطلس الشرق</h3>
                  <p className="text-atlas-gold-200">Atlas Al-Sharq</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                شركة أطلس الشرق للاستشارات الاقتصادية والتجارية، نربط بين الصين
                والمملكة العربية السعودية من خلال المعارض والفعاليات التجارية.
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Link
                  href="#"
                  className="w-10 h-10 bg-atlas-brown-800 rounded-lg flex items-center justify-center hover:bg-atlas-gold-600 transition-colors transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-atlas-brown-800 rounded-lg flex items-center justify-center hover:bg-atlas-gold-600 transition-colors transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-atlas-brown-800 rounded-lg flex items-center justify-center hover:bg-atlas-gold-600 transition-colors transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-atlas-brown-800 rounded-lg flex items-center justify-center hover:bg-atlas-gold-600 transition-colors transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-atlas-brown-200 hover:text-white transition-colors"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    المنتجات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exhibitions"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    المعارض
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-visits"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    الزيارات التجارية
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6">خدماتنا</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    تنظيم المعارض
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    الاستشارات التجارية
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    رحلات الأعمال
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    الترجمة والوساطة
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    التسويق الدولي
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-atlas-gold-200 hover:text-white transition-colors"
                  >
                    الاستثمارات المشتركة
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-xl font-semibold mb-6">تواصل معنا</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-5 h-5 text-atlas-gold-400 mt-1" />
                  <div>
                    <p className="text-atlas-brown-200">
                      الرياض، المملكة العربية السعودية
                    </p>
                    <p className="text-atlas-brown-300 text-sm">مكتبنا الرئيسي</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="w-5 h-5 text-atlas-gold-400" />
                  <span className="text-atlas-brown-200">+966 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="w-5 h-5 text-atlas-gold-400" />
                  <span className="text-atlas-brown-200">contact@atlasecon.com</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-atlas-gold-400" />
                  <span className="text-atlas-brown-200">
                    الأحد - الخميس: 8:00 - 17:00
                  </span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h5 className="font-semibold mb-3">النشرة الإخبارية</h5>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="البريد الإلكتروني"
                    className="w-full px-4 py-2 bg-atlas-brown-800 border border-atlas-brown-700 rounded-lg text-white placeholder-atlas-brown-300 focus:outline-none focus:border-atlas-gold-500"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full btn-primary-gradient"
                  >
                    اشترك الآن
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-atlas-primary-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-atlas-primary-300 text-sm">
                © 2024 أطلس الشرق. جميع الحقوق محفوظة.
              </div>
              <div className="flex space-x-6 rtl:space-x-reverse text-sm">
                <Link
                  href="/privacy"
                  className="text-atlas-primary-300 hover:text-white transition-colors"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  href="/terms"
                  className="text-atlas-primary-300 hover:text-white transition-colors"
                >
                  شروط الاستخدام
                </Link>
                <Link
                  href="/sitemap"
                  className="text-atlas-primary-300 hover:text-white transition-colors"
                >
                  خريطة الموقع
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 w-12 h-12 bg-atlas-secondary-600 hover:bg-atlas-secondary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
