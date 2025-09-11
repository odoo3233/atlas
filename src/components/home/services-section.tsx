"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Calendar,
  Users,
  Network,
  ArrowRight,
  Award,
  Globe,
  Building,
  Target,
  Zap,
  Star,
  Rocket,
  Crown,
  Gem,
  Lightbulb,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { IconText } from "@/components/ui/icon-text";
import { Check, BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Rocket,
      title: t("home.services.exhibitions", "تنظيم المعارض والفعاليات"),
      description: t(
        "home.services.exhibitionsDesc",
        "تنظيم معارض وفعاليات احترافية لعرض المنتجات والخدمات مع أحدث التقنيات والتصاميم",
      ),
      features: [
        "تصميم أجنحة احترافية",
        "إدارة شاملة للفعاليات",
        "خدمات لوجستية متكاملة",
        "دعم تسويقي متقدم",
      ],
      gradient: "from-blue-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      icon: Crown,
      title: t("home.services.business", "ربط رجال الأعمال"),
      description: t(
        "home.services.businessDesc",
        "ربط رجال الأعمال بين الصين والمملكة العربية السعودية للنمو المشترك وبناء شراكات استراتيجية",
      ),
      features: [
        "لقاءات B2B مخصصة",
        "شبكة علاقات واسعة",
        "فرص استثمارية حصرية",
        "دعم قانوني واستشاري",
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      icon: Gem,
      title: t("home.services.trips", "تنظيم رحلات الأعمال"),
      description: t(
        "home.services.tripsDesc",
        "ترتيب رحلات أعمال للشركات للقاء شركاء محتملين واستكشاف فرص الاستثمار الجديدة",
      ),
      features: [
        "برامج سفر مخصصة",
        "ترجمة فورية",
        "خدمات VIP شاملة",
        "متابعة ما بعد الرحلة",
      ],
      gradient: "from-amber-500 to-orange-600",
      bgPattern: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
  ];

  return (
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
        <SectionHeader
          icon={<Lightbulb className="h-6 w-6 animate-pulse" />}
          badgeKey="home.services.badge"
          titleKey="home.services.title"
          subtitleKey="home.services.description"
          fallbackBadge="حلول متكاملة لنجاح أعمالك"
          fallbackTitle="خدماتنا الاستثنائية"
          fallbackSubtitle="نقدم باقة متكاملة من الخدمات الاحترافية المصممة خصيصاً لتلبية احتياجاتك وتحقيق أهدافك التجارية"
        />

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <div key={index} 
                 className="group relative card-elevated rounded-3xl p-8 hover-lift overflow-hidden"
                 style={{animationDelay: `${index * 200}ms`}}>
              
              {/* Background Pattern */}
              <div className={`absolute inset-0 opacity-5 ${service.bgPattern}`}></div>
              
              {/* Animated Icon */}
              <div className={`flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} text-white mb-6 mx-auto shadow-2xl group-hover:animate-bounce-in relative`}>
                <service.icon size={32} className="group-hover:animate-wiggle-modern" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Enhanced Title */}
              <h3 className="text-2xl font-bold text-center mb-4 heading-primary text-always-black group-hover:heading-accent transition-colors">
                {service.title}
              </h3>

              {/* Enhanced Description */}
              <p className="text-readable text-center mb-8 leading-relaxed text-force-light-theme">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    {featureIndex === 0 && (
                      <IconText icon={<BadgeCheck className="h-4 w-4" />} variant="success" size="sm">
                        {feature}
                      </IconText>
                    )}
                    {featureIndex === 1 && (
                      <IconText icon={<ShieldCheck className="h-4 w-4" />} variant="info" size="sm">
                        {feature}
                      </IconText>
                    )}
                    {featureIndex === 2 && (
                      <IconText icon={<Sparkles className="h-4 w-4" />} variant="accent" size="sm">
                        {feature}
                      </IconText>
                    )}
                    {featureIndex > 2 && (
                      <IconText icon={<Check className="h-4 w-4" />} variant="default" size="sm">
                        {feature}
                      </IconText>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <Button size="lg" 
                      className={`w-full px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-2xl hover:shadow-2xl btn-modern group/btn`} 
                      asChild>
                <Link href="/services">
                  <TrendingUp className="mr-3 rtl:mr-0 rtl:ml-3 group-hover/btn:animate-bounce" size={20} />
                  {t("common.learnMore", "اعرف المزيد")}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover/btn:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative glass-strong rounded-3xl p-12 text-foreground border border-border/30 overflow-hidden group">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 animate-gradient-shift"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-primary font-semibold mb-6 border border-primary/20">
                <Star className="mr-2 rtl:mr-0 rtl:ml-2 animate-spin-slow" size={20} />
                {t("home.services.cta.badge", "ابدأ رحلتك معنا")}
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                {t("home.services.cta.title", "مستعد لبدء رحلة النجاح؟")}
              </h3>
              
              <p className="text-xl text-medium-contrast mb-8 max-w-3xl mx-auto leading-relaxed">
                {t(
                  "home.services.cta.description",
                  "اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية",
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" 
                        className="px-12 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl hover:shadow-2xl btn-modern group/cta text-lg font-semibold" 
                        asChild>
                  <Link href="/services">
                    <Briefcase className="mr-3 rtl:mr-0 rtl:ml-3 group-hover/cta:animate-bounce" size={24} />
                    {t("home.services.cta.explore", "استكشف جميع الخدمات")}
                    <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover/cta:translate-x-1 transition-transform" size={24} />
                  </Link>
                </Button>
                
                <Button size="lg" 
                        variant="outline" 
                        className="px-12 py-6 border-2 border-primary/30 text-primary hover:bg-primary/5 rounded-2xl btn-modern group/contact text-lg font-semibold"
                        asChild>
                  <Link href="/contact">
                    <Zap className="mr-3 rtl:mr-0 rtl:ml-3 group-hover/contact:animate-pulse" size={24} />
                    {t("home.services.cta.contact", "تواصل معنا الآن")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
