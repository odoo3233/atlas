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
      <section className="gradient-hero relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 glass text-primary-foreground rounded-full text-lg font-semibold mb-8 shadow-2xl hover-lift interactive-glow">
              <Building2 className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={20} />
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-elevated mb-8 leading-tight drop-shadow-lg">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 text-elevated leading-relaxed mb-8 font-semibold drop-shadow-md">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg text-white/90 text-elevated leading-relaxed mb-8 font-medium drop-shadow-sm">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700 font-bold rounded-2xl shadow-2xl hover:shadow-3xl btn-modern group"
              >
                <Phone className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                {t("hero.contactUs")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-6 border-2 border-white/30 text-primary-foreground hover:bg-white/10 backdrop-blur-sm font-bold rounded-2xl shadow-2xl hover:shadow-3xl btn-modern group"
              >
                <Calendar className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                {t("hero.scheduleVisit")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-secondary/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-primary">
              {t("packages.title")}
            </h2>
            <p className="text-xl text-readable max-w-3xl mx-auto leading-relaxed">
              {t("packages.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Basic Package */}
            <div className="card-elevated rounded-3xl p-8 hover-lift">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white mb-6 shadow-2xl">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 heading-primary">
                  {t("packages.basic.title")}
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {t("packages.basic.price")}
                </div>
                <div className="text-muted-readable font-medium">
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
                      <CheckCircle className="w-5 h-5 text-success mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                      <span className="text-readable font-medium">{feature}</span>
                    </div>
                  ));
                })()}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl hover:shadow-2xl btn-modern group text-lg font-semibold py-4">
                {t("register")}
              </Button>
            </div>

            {/* Professional Package */}
            <div className="glass-strong p-8 relative transform scale-105 rounded-3xl border border-primary/20 shadow-2xl hover-lift">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  {t("packages.professional.popular")}
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent text-white mb-6 shadow-2xl">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white text-elevated">
                  {t("packages.professional.title")}
                </h3>
                <div className="text-3xl font-bold mb-2 text-white text-elevated">
                  {t("packages.professional.price")}
                </div>
                <div className="text-white/90 font-medium text-elevated">
                  {t("packages.professional.duration")}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {(() => {
                  const features = t("packages.professional.features", {
                    returnObjects: true,
                  });
                  const featureArray = Array.isArray(features) ? features : [];
                  return featureArray.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/95 font-medium text-elevated">{feature}</span>
                    </div>
                  ));
                })()}
              </div>

              <Button className="w-full bg-white text-primary hover:bg-white/95 rounded-2xl hover:shadow-2xl btn-modern group text-lg font-semibold py-4">
                {t("register")}
              </Button>
            </div>

            {/* VIP Package */}
            <div className="card-elevated rounded-3xl p-8 hover-lift">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 text-white mb-6 shadow-2xl">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 heading-primary">
                  {t("packages.vip.title")}
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {t("packages.vip.price")}
                </div>
                <div className="text-muted-readable font-medium">
                  {t("packages.vip.duration")}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {(() => {
                  const features = t("packages.vip.features", {
                    returnObjects: true,
                  });
                  const featureArray = Array.isArray(features) ? features : [];
                  return featureArray.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                      <span className="text-readable font-medium">{feature}</span>
                    </div>
                  ));
                })()}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl hover:shadow-2xl btn-modern group text-lg font-semibold py-4">
                {t("contactUs")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why China Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-foreground text-elevated">
              لماذا الشراكة مع الشركات الصينية؟
            </h2>
            <p className="text-xl text-primary-foreground/90 text-elevated max-w-3xl mx-auto leading-relaxed font-medium">
              الصين موطن لأكبر وأكثر الشركات العقارية ابتكاراً في العالم مع
              خبرات لا مثيل لها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-strong rounded-3xl p-8 hover-lift">
              <div className="text-6xl font-bold text-primary-foreground text-elevated mb-4">Top 10</div>
              <div className="text-primary-foreground/95 text-lg font-semibold text-elevated">أكبر شركات عقارية</div>
              <div className="text-primary-foreground/80 mt-2 font-medium">في العالم من الصين</div>
            </div>
            <div className="text-center glass-strong rounded-3xl p-8 hover-lift">
              <div className="text-6xl font-bold text-primary-foreground text-elevated mb-4">40+</div>
              <div className="text-primary-foreground/95 text-lg font-semibold text-elevated">سنة خبرة</div>
              <div className="text-primary-foreground/80 mt-2 font-medium">في التطوير العقاري</div>
            </div>
            <div className="text-center glass-strong rounded-3xl p-8 hover-lift">
              <div className="text-6xl font-bold text-primary-foreground text-elevated mb-4">$2T+</div>
              <div className="text-primary-foreground/95 text-lg font-semibold text-elevated">قيمة المشاريع</div>
              <div className="text-primary-foreground/80 mt-2 font-medium">المنجزة سنوياً</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chinese Companies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-primary">
              شركاؤنا من الشركات الصينية الرائدة
            </h2>
            <p className="text-xl text-readable max-w-3xl mx-auto leading-relaxed">
              نتعاون مع أكبر وأنجح الشركات العقارية في الصين لضمان أفضل فرص
              الشراكة لكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-elevated text-center p-8 rounded-3xl hover-lift">
              <div className="text-2xl font-bold text-primary mb-4">
                China Vanke
              </div>
              <div className="text-medium-contrast font-medium">أكبر شركة عقارية في الصين</div>
              <div className="text-sm text-muted-readable mt-2">$50B+ قيمة السوق</div>
            </div>
            <div className="card-elevated text-center p-8 rounded-3xl hover-lift">
              <div className="text-2xl font-bold text-primary mb-4">
                Evergrande
              </div>
              <div className="text-medium-contrast font-medium">رائدة في التطوير العقاري</div>
              <div className="text-sm text-muted-readable mt-2">$40B+ قيمة السوق</div>
            </div>
            <div className="card-elevated text-center p-8 rounded-3xl hover-lift">
              <div className="text-2xl font-bold text-primary mb-4">
                Poly Group
              </div>
              <div className="text-medium-contrast font-medium">شركة حكومية رائدة</div>
              <div className="text-sm text-muted-readable mt-2">$35B+ قيمة السوق</div>
            </div>
            <div className="card-elevated text-center p-8 rounded-3xl hover-lift">
              <div className="text-2xl font-bold text-primary mb-4">
                Country Garden
              </div>
              <div className="text-medium-contrast font-medium">مبتكرة في التصميم</div>
              <div className="text-sm text-muted-readable mt-2">$30B+ قيمة السوق</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Statistics */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-primary">
              {t("stats.title")}
            </h2>
            <p className="text-xl text-readable max-w-3xl mx-auto leading-relaxed">
              {t("stats.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center card-elevated rounded-3xl p-8 hover-lift">
              <div className="text-4xl font-bold text-primary mb-4">
                500+
              </div>
              <div className="text-medium-contrast font-medium">شركة عقارية رائدة</div>
            </div>
            <div className="text-center card-elevated rounded-3xl p-8 hover-lift">
              <div className="text-4xl font-bold text-primary mb-4">
                85%
              </div>
              <div className="text-medium-contrast font-medium">معدل نجاح الشراكات</div>
            </div>
            <div className="text-center card-elevated rounded-3xl p-8 hover-lift">
              <div className="text-4xl font-bold text-primary mb-4">
                200+
              </div>
              <div className="text-medium-contrast font-medium">دولة شريكة</div>
            </div>
            <div className="text-center card-elevated rounded-3xl p-8 hover-lift">
              <div className="text-4xl font-bold text-primary mb-4">
                24/7
              </div>
              <div className="text-medium-contrast font-medium">دعم الشراكات</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-primary">
              {t("contactTitle")}
            </h2>
            <p className="text-xl text-readable mb-12 leading-relaxed">
              {t("contactSubtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 rounded-3xl hover-lift">
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mx-auto mb-6 shadow-2xl">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 heading-secondary">{t("phoneTitle")}</h3>
                <p className="text-readable mb-4">{t("phoneSubtitle")}</p>
                <div className="text-lg font-semibold text-primary">
                  +966 50 123 4567
                </div>
              </div>

              <div className="card-elevated p-8 rounded-3xl hover-lift">
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mx-auto mb-6 shadow-2xl">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 heading-secondary">{t("emailTitle")}</h3>
                <p className="text-readable mb-4">{t("emailSubtitle")}</p>
                <div className="text-lg font-semibold text-primary">
                  info@atlas-alsharq.com
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl btn-modern group font-bold"
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
