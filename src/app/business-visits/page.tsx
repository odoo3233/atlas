"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  CheckCircle,
  Building2,
  Phone,
  Mail,
} from "lucide-react";

export default function BusinessVisits() {
  const { t } = useTranslation("businessVisits");

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-atlas-dark/60 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              <Building2 className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-atlas-gold-100/90 leading-relaxed mb-8">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 btn-primary-gradient"
              >
                <Phone className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {t("hero.contactUs")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-atlas-dark transition-all duration-300"
              >
                <Calendar className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {t("hero.scheduleVisit")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-atlas-brown-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-atlas-dark">
              {t("packages.title")}
            </h2>
            <p className="text-xl text-atlas-brown-600 max-w-3xl mx-auto">
              {t("packages.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Basic Package */}
            <div className="card-modern p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-atlas-gold-100 text-atlas-gold-600 mb-4">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-atlas-dark">
                  {t("packages.basic.title")}
                </h3>
                <div className="text-3xl font-bold text-atlas-gold-600 mb-2">
                  {t("packages.basic.price")}
                </div>
                <div className="text-atlas-brown-600">
                  {t("packages.basic.duration")}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {(() => {
                  const features = t("packages.basic.features", {
                    returnObjects: true,
                  });
                  const featureArray = Array.isArray(features) ? features : [];
                  return featureArray.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-atlas-brown-700">{feature}</span>
                    </div>
                  ));
                })()}
              </div>

              <Button className="w-full btn-primary-gradient">
                {t("register")}
              </Button>
            </div>

            {/* Premium Package */}
            <div className="card-glass p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-atlas-gold-500 text-atlas-dark px-4 py-1 rounded-full text-sm font-bold">
                  الأكثر طلباً
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white mb-4">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {t("packages.premium.title")}
                </h3>
                <div className="text-3xl font-bold mb-2">
                  {t("packages.premium.price")}
                </div>
                <div className="text-white/80">
                  {t("packages.premium.duration")}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {(() => {
                  const features = t("packages.premium.features", {
                    returnObjects: true,
                  });
                  const featureArray = Array.isArray(features) ? features : [];
                  return featureArray.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ));
                })()}
              </div>

              <Button className="w-full bg-white text-atlas-dark hover:bg-white/90">
                {t("register")}
              </Button>
            </div>

            {/* Custom Package */}
            <div className="card-modern p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-atlas-gold-100 text-atlas-gold-600 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-atlas-dark">
                  {t("packages.custom.title")}
                </h3>
                <div className="text-3xl font-bold text-atlas-gold-600 mb-2">
                  {t("packages.custom.price")}
                </div>
                <div className="text-atlas-brown-600">
                  {t("packages.custom.duration")}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {(() => {
                  const features = t("packages.custom.features", {
                    returnObjects: true,
                  });
                  const featureArray = Array.isArray(features) ? features : [];
                  return featureArray.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-atlas-brown-700">{feature}</span>
                    </div>
                  ));
                })()}
              </div>

              <Button className="w-full btn-primary-gradient">
                {t("contact")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why China Section */}
      <section className="py-20 bg-atlas-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              لماذا الشراكة مع الشركات الصينية؟
            </h2>
            <p className="text-xl text-atlas-gold-100/80 max-w-3xl mx-auto">
              الصين موطن لأكبر وأكثر الشركات العقارية ابتكاراً في العالم مع
              خبرات لا مثيل لها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-4">Top 10</div>
              <div className="text-white/90 text-lg">أكبر شركات عقارية</div>
              <div className="text-white/70 mt-2">في العالم من الصين</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-4">40+</div>
              <div className="text-white/90 text-lg">سنة خبرة</div>
              <div className="text-white/70 mt-2">في التطوير العقاري</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-4">$2T+</div>
              <div className="text-white/90 text-lg">قيمة المشاريع</div>
              <div className="text-white/70 mt-2">المنجزة سنوياً</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chinese Companies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-dark">
              شركاؤنا من الشركات الصينية الرائدة
            </h2>
            <p className="text-xl text-atlas-brown-600 max-w-3xl mx-auto">
              نتعاون مع أكبر وأنجح الشركات العقارية في الصين لضمان أفضل فرص
              الشراكة لكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-modern text-center p-6">
              <div className="text-2xl font-bold text-atlas-gold-600 mb-2">
                China Vanke
              </div>
              <div className="text-atlas-brown-600">أكبر شركة عقارية في الصين</div>
              <div className="text-sm text-atlas-brown-500 mt-2">$50B+ قيمة السوق</div>
            </div>
            <div className="card-modern text-center p-6">
              <div className="text-2xl font-bold text-atlas-gold-600 mb-2">
                Evergrande
              </div>
              <div className="text-atlas-brown-600">رائدة في التطوير العقاري</div>
              <div className="text-sm text-atlas-brown-500 mt-2">$40B+ قيمة السوق</div>
            </div>
            <div className="card-modern text-center p-6">
              <div className="text-2xl font-bold text-atlas-gold-600 mb-2">
                Poly Group
              </div>
              <div className="text-atlas-brown-600">شركة حكومية رائدة</div>
              <div className="text-sm text-atlas-brown-500 mt-2">$35B+ قيمة السوق</div>
            </div>
            <div className="card-modern text-center p-6">
              <div className="text-2xl font-bold text-atlas-gold-600 mb-2">
                Country Garden
              </div>
              <div className="text-atlas-brown-600">مبتكرة في التصميم</div>
              <div className="text-sm text-atlas-brown-500 mt-2">$30B+ قيمة السوق</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Statistics */}
      <section className="py-20 bg-atlas-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("stats.title")}
            </h2>
            <p className="text-xl text-atlas-gold-100/80 max-w-3xl mx-auto">
              {t("stats.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-white/80">شركة عقارية رائدة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                85%
              </div>
              <div className="text-white/80">معدل نجاح الشراكات</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-white/80">دولة شريكة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/80">دعم الشراكات</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-atlas-dark">
              {t("contactTitle")}
            </h2>
            <p className="text-xl text-atlas-brown-600 mb-12">
              {t("contactSubtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-modern p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-atlas-gold-100 text-atlas-gold-600 mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-atlas-dark">{t("phoneTitle")}</h3>
                <p className="text-atlas-brown-600 mb-4">{t("phoneSubtitle")}</p>
                <div className="text-lg font-semibold text-atlas-gold-600">
                  +966 50 123 4567
                </div>
              </div>

              <div className="card-modern p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-atlas-gold-100 text-atlas-gold-600 mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-atlas-dark">{t("emailTitle")}</h3>
                <p className="text-atlas-brown-600 mb-4">{t("emailSubtitle")}</p>
                <div className="text-lg font-semibold text-atlas-gold-600">
                  info@atlas-alsharq.com
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="btn-primary-gradient text-lg px-8 py-4"
              >
                {t("contact")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
