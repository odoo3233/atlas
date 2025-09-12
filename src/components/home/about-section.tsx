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
} from "lucide-react";

export function AboutSection() {
  const { t } = useTranslation();

  const achievements = [
    {
      icon: Users,
      title: "15+",
      subtitle: "سنة خبرة",
      description: "خبرة عميقة في تنظيم الفعاليات التجارية الدولية",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Globe,
      title: "2000+",
      subtitle: "شريك صيني",
      description: "علاقات وثيقة مع الشركات الصينية والسعودية",
      gradient: "from-emerald-500 to-teal-500",
      delay: "200ms"
    },
    {
      icon: Award,
      title: "98%",
      subtitle: "معدل رضا",
      description: "معايير جودة عالمية في جميع خدماتنا",
      gradient: "from-amber-500 to-orange-500",
      delay: "400ms"
    },
    {
      icon: Heart,
      title: "24/7",
      subtitle: "دعم متواصل",
      description: "دعم فني وإداري على مدار الساعة",
      gradient: "from-pink-500 to-rose-500",
      delay: "600ms"
    },
  ];

  const services = [
    { name: "تنظيم المعارض", icon: "🏢" },
    { name: "رحلات الأعمال", icon: "✈️" },
    { name: "الشراكات الدولية", icon: "🤝" },
    { name: "الاستشارات التجارية", icon: "💼" },
    { name: "الترجمة الفورية", icon: "🌐" },
    { name: "التسويق الرقمي", icon: "📱" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Revolutionary Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-2xl text-blue-700 font-bold text-lg mb-8 shadow-lg">
            <Building className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("home.about.title", "من نحن")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              شركة أطلس الشرق
            </span>
            <br />
            <span className="text-gray-700 text-3xl md:text-4xl font-bold">
              للمعارض والمؤتمرات
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            {t(
              "home.about.description",
              "نفخر بخبرة 15+ عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية",
            )}
          </p>

          {/* Services Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <span className="text-lg">{service.icon}</span>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revolutionary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50"
              style={{animationDelay: achievement.delay}}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-10 transition-opacity rounded-3xl`}></div>
              
              {/* Icon */}
              <div className={`relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${achievement.gradient} text-white mb-6 mx-auto shadow-lg group-hover:animate-bounce`}>
                {React.createElement(achievement.icon, { size: 32 })}
              </div>

              {/* Main Number */}
              <div className="relative text-center">
                <div className={`text-5xl font-black bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2`}>
                  {achievement.title}
                </div>
                <div className="text-xl font-bold text-gray-700 mb-4">
                  {achievement.subtitle}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Ultra Modern CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">
                {t("home.about.cta.title", "تواصل معنا اليوم")}
              </h3>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-medium">
                {t(
                  "home.about.cta.description",
                  "نحن هنا لمساعدتك في تحقيق أهدافك التجارية. تواصل معنا الآن للحصول على استشارة مجانية",
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    <Target className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-spin" size={24} />
                    <span>{t("home.about.cta.button", "احصل على استشارة مجانية")}</span>
                    <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover:translate-x-2 transition-transform" size={24} />
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                  asChild
                >
                  <Link href="/services" className="flex items-center">
                    <Building className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                    <span>استكشف خدماتنا</span>
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
