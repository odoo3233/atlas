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
import { Check, BadgeCheck, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";

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
      color: "blue",
      stats: "500+ معرض"
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
      color: "emerald",
      stats: "2000+ شراكة"
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
      color: "amber",
      stats: "98% رضا"
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Ultra Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-2xl text-blue-700 font-bold text-lg mb-8 shadow-lg">
            <Lightbulb className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              حلول متكاملة لنجاح أعمالك
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              خدماتنا الاستثنائية
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            نقدم باقة متكاملة من الخدمات الاحترافية المصممة خصيصاً لتلبية احتياجاتك وتحقيق أهدافك التجارية
          </p>
        </div>

        {/* Revolutionary Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Stats Badge */}
              <div className="absolute top-6 right-6 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                {service.stats}
              </div>
              
              {/* Modern Icon */}
              <div className={`relative flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} text-white mb-8 shadow-2xl group-hover:animate-bounce`}>
                {React.createElement(service.icon, { size: 36 })}
                <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className={`w-full bg-gradient-to-r ${service.gradient} text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group/btn`} 
                asChild
              >
                <Link href="/services" className="flex items-center justify-center">
                  <TrendingUp className="mr-3 rtl:mr-0 rtl:ml-3 group-hover/btn:animate-bounce" size={20} />
                  <span>{t("common.learnMore", "اعرف المزيد")}</span>
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover/btn:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Ultra Modern CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-bold text-lg mb-10 shadow-lg">
                <Star className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
                <span>ابدأ رحلتك معنا</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
                مستعد لبدء رحلة النجاح؟
              </h3>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Button 
                  size="lg" 
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105" 
                  asChild
                >
                  <Link href="/services" className="flex items-center">
                    <Briefcase className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                    <span>استكشف جميع الخدمات</span>
                    <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover:translate-x-2 transition-transform" size={24} />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    <Zap className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                    <span>تواصل معنا الآن</span>
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
