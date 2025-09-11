"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Calendar,
  Globe,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Building,
  Target,
  Heart,
  Zap,
  Shield,
  Clock,
  Sparkles,
  Crown,
  Gem,
  Rocket,
  Trophy,
} from "lucide-react";

export function WhyAtlasSection() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Crown,
      title: t("home.whyAtlas.expertise.title", "خبرة استثنائية"),
      stats: t("home.whyAtlas.expertise.stats", "15+ سنة خبرة"),
      description: t(
        "home.whyAtlas.expertise.description",
        "أكثر من 15 عاماً من الخبرة في مجال المعارض والمؤتمرات الدولية، مع فهم عميق لثقافة الأعمال في الصين والمملكة العربية السعودية",
      ),
      gradient: "from-amber-500 to-orange-600",
      bgPattern: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      icon: Globe,
      title: t("home.whyAtlas.network.title", "شبكة علاقات قوية"),
      stats: t("home.whyAtlas.network.stats", "2000+ شريك صيني"),
      description: t(
        "home.whyAtlas.network.description",
        "شبكة واسعة تضم أكثر من 2000 شريك تجاري في الصين و500 شركة سعودية، مما يضمن لك الوصول لأفضل الفرص التجارية",
      ),
      gradient: "from-blue-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      icon: Trophy,
      title: t("home.whyAtlas.success.title", "سجل نجاح متميز"),
      stats: t("home.whyAtlas.success.stats", "98% معدل رضا"),
      description: t(
        "home.whyAtlas.success.description",
        "نفخر بتنظيم أكثر من 500 فعالية ناجحة، مع معدل رضا يصل إلى 98% من عملائنا، مما يجعلنا الخيار الموثوق لنجاح أعمالك",
      ),
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      icon: Sparkles,
      title: t("home.whyAtlas.innovation.title", "ابتكار مستمر"),
      stats: t("home.whyAtlas.innovation.stats", "تقنيات حديثة"),
      description: t(
        "home.whyAtlas.innovation.description",
        "نواكب أحدث التقنيات والاتجاهات في مجال المعارض، ونقدم حلول مبتكرة تضمن تجربة فريدة ومميزة لجميع المشاركين",
      ),
    },
    {
      icon: Clock,
      title: t("home.whyAtlas.support.title", "دعم شامل 24/7"),
      stats: t("home.whyAtlas.support.stats", "دعم 24/7"),
      description: t(
        "home.whyAtlas.support.description",
        "فريق دعم متخصص متاح على مدار الساعة لتقديم المساعدة والدعم الفني، مما يضمن نجاح فعالياتك من البداية حتى النهاية",
      ),
    },
    {
      icon: Shield,
      title: t("home.whyAtlas.quality.title", "جودة عالية مضمونة"),
      stats: t("home.whyAtlas.quality.stats", "ISO 9001"),
      description: t(
        "home.whyAtlas.quality.description",
        "نلتزم بأعلى معايير الجودة العالمية، مع شهادات اعتماد دولية وضمان رضا تام لجميع خدماتنا",
      ),
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-lg font-bold mb-8 border border-white/30 shadow-2xl text-elevated">
            <Star className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t("home.whyAtlas.title", "لماذا أطلس الشرق؟")}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-elevated drop-shadow-lg">
            {t("home.whyAtlas.title", "لماذا أطلس الشرق؟")}
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl text-white mb-8 font-bold text-elevated drop-shadow-md">
            {t("home.whyAtlas.subtitle", "نختار أطلس الشرق لنجاح أعمالك")}
          </h3>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-semibold text-elevated drop-shadow-sm">
            {t(
              "home.whyAtlas.description",
              "نتميز بخبرة فريدة وخدمات متكاملة تجعلنا الخيار الأمثل لشركائك التجاريين",
            )}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-3xl bg-background text-foreground mb-6 mx-auto shadow-2xl`}
              >
                <reason.icon size={40} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-4 text-white text-elevated drop-shadow-md">
                {reason.title}
              </h3>

              {/* Stats */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-lg font-bold text-white border border-white/30 text-elevated drop-shadow-sm">
                  {reason.stats}
                </div>
              </div>

              {/* Description */}
              <p className="text-white text-center leading-relaxed font-medium text-elevated drop-shadow-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-foreground/10 via-primary-foreground/20 to-primary-foreground/10 rounded-3xl p-12 shadow-3xl border border-primary-foreground/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-elevated drop-shadow-md">
              {t("home.whyAtlas.cta.title", "ابدأ رحلة النجاح معنا")}
            </h3>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-medium text-elevated drop-shadow-sm">
              {t(
                "home.whyAtlas.cta.description",
                "انضم إلى آلاف الشركات الناجحة التي اختارت أطلس الشرق كشريك استراتيجي لها",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-xl px-10 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  <Zap className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t("home.whyAtlas.cta.button", "تواصل معنا الآن")}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-10 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/about">
                  <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t("common.learnMore", "اعرف المزيد")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
