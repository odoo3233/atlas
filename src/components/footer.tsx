"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
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
  Send,
  Sparkles,
  Globe,
  Star,
} from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-secondary via-background to-secondary/50 text-foreground relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                <BrandLogo size="md" animated={false} variant="mono" />
                <div>
                  <h3 className="text-2xl font-bold heading-primary text-elevated">أطلس الشرق</h3>
                  <p className="text-primary font-semibold text-elevated">Atlas Al-Sharq</p>
                </div>
              </div>
              <p className="text-readable text-force-light-theme mb-6 leading-relaxed">
                شركة أطلس الشرق للاستشارات الاقتصادية والتجارية، نربط بين الصين
                والمملكة العربية السعودية من خلال المعارض والفعاليات التجارية.
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Link
                  href="#"
                  className="group w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center hover:from-blue-500/30 hover:to-blue-600/30 hover-lift transition-all duration-300 border border-blue-500/20"
                >
                  <Facebook className="w-5 h-5 text-blue-500 group-hover:animate-bounce" />
                </Link>
                <Link
                  href="#"
                  className="group w-12 h-12 bg-gradient-to-br from-sky-500/20 to-sky-600/20 rounded-2xl flex items-center justify-center hover:from-sky-500/30 hover:to-sky-600/30 hover-lift transition-all duration-300 border border-sky-500/20"
                >
                  <Twitter className="w-5 h-5 text-sky-500 group-hover:animate-bounce" />
                </Link>
                <Link
                  href="#"
                  className="group w-12 h-12 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-2xl flex items-center justify-center hover:from-pink-500/30 hover:to-rose-600/30 hover-lift transition-all duration-300 border border-pink-500/20"
                >
                  <Instagram className="w-5 h-5 text-pink-500 group-hover:animate-bounce" />
                </Link>
                <Link
                  href="#"
                  className="group w-12 h-12 bg-gradient-to-br from-blue-700/20 to-blue-800/20 rounded-2xl flex items-center justify-center hover:from-blue-700/30 hover:to-blue-800/30 hover-lift transition-all duration-300 border border-blue-700/20"
                >
                  <Linkedin className="w-5 h-5 text-blue-700 group-hover:animate-bounce" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 heading-secondary">{t("footer.quickLinks", "روابط سريعة")}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("common.nav.about", "من نحن")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("common.nav.services", "خدماتنا")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("common.nav.products", "المنتجات")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exhibitions"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("common.nav.exhibitions", "المعارض")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-visits"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("common.nav.businessVisits", "الزيارات التجارية")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("common.nav.contact", "اتصل بنا")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 heading-secondary">{t("footer.ourServices", "خدماتنا")}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("footer.services.exhibitions", "تنظيم المعارض")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("footer.services.consulting", "الاستشارات التجارية")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("footer.services.businessTrips", "رحلات الأعمال")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("footer.services.translation", "الترجمة والوساطة")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("footer.services.marketing", "التسويق الدولي")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-medium-contrast hover:text-primary transition-colors font-medium"
                  >
                    {t("footer.services.investments", "الاستثمارات المشتركة")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-xl font-semibold mb-6 heading-secondary">{t("footer.contactUs", "تواصل معنا")}</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-medium-contrast">
                      {t("footer.address", "الرياض، المملكة العربية السعودية")}
                    </p>
                    <p className="text-muted-readable text-sm">{t("footer.mainOffice", "مكتبنا الرئيسي")}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-medium-contrast">+966 50 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-medium-contrast">contact@atlasecon.com</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-medium-contrast">
                    {t("footer.workingHours", "الأحد - الخميس: 8:00 - 17:00")}
                  </span>
                </div>
              </div>

              {/* Enhanced Newsletter */}
              <div className="glass-strong rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  <h5 className="font-semibold text-lg heading-accent">{t("footer.newsletter", "النشرة الإخبارية")}</h5>
                </div>
                <p className="text-sm text-muted-readable mb-4">
                  {t("footer.newsletterDesc", "احصل على آخر الأخبار والعروض الحصرية")}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("footer.emailPlaceholder", "البريد الإلكتروني")}
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                      required
                    />
                    <Mail className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:shadow-lg btn-modern group"
                  >
                    <Send className="mr-2 rtl:mr-0 rtl:ml-2 w-4 h-4 group-hover:animate-bounce" />
                    {t("footer.subscribe", "اشترك الآن")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/60">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-medium-contrast text-sm font-medium">
                {t("footer.copyright", "© 2024 أطلس الشرق. جميع الحقوق محفوظة.")}
              </div>
              <div className="flex space-x-6 rtl:space-x-reverse text-sm">
                <Link
                  href="/privacy"
                  className="text-muted-readable hover:text-primary transition-colors font-medium"
                >
                  {t("footer.privacy", "سياسة الخصوصية")}
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-readable hover:text-primary transition-colors font-medium"
                >
                  {t("footer.terms", "شروط الاستخدام")}
                </Link>
                <Link
                  href="/sitemap"
                  className="text-muted-readable hover:text-primary transition-colors font-medium"
                >
                  {t("footer.sitemap", "خريطة الموقع")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 w-14 h-14 bg-gradient-to-br from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-3xl group btn-modern"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </footer>
  );
}
