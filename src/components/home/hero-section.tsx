"use client";

import React, { useEffect, useState } from "react";
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
  Zap,
  Sparkles,
  Rocket,
  Target,
  Crown,
  Play,
  CheckCircle,
  Briefcase,
  Building,
  Lightbulb,
  Shield,
} from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    {
      icon: Rocket,
      value: "500+",
      label: t("home.about.features.events", "فعالية منظمة"),
      gradient: "from-blue-500 to-purple-600",
      description: "معرض وفعالية دولية ناجحة"
    },
    {
      icon: Globe,
      value: "2000+",
      label: t("home.about.features.network", "شريك صيني"),
      gradient: "from-emerald-500 to-teal-600",
      description: "شبكة أعمال قوية في الصين"
    },
    {
      icon: Crown,
      value: "98%",
      label: t("home.about.features.success", "معدل رضا"),
      gradient: "from-amber-500 to-orange-600",
      description: "رضا العملاء والشركاء"
    },
    {
      icon: Target,
      value: "15+",
      label: t("home.about.features.experience", "سنة خبرة"),
      gradient: "from-pink-500 to-rose-600",
      description: "خبرة عميقة في الأسواق الدولية"
    },
  ];

  const features = [
    { icon: CheckCircle, text: "شبكة شراكات دولية" },
    { icon: Shield, text: "ضمان النجاح 98%" },
    { icon: Lightbulb, text: "حلول مبتكرة" },
    { icon: Building, text: "خدمات متكاملة" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/30 to-emerald-600/20 animate-pulse"></div>
        
        {/* Dynamic geometric shapes */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-emerald-500/30 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-emerald-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-spin-reverse"></div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-80"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-70" style={{ animationDelay: "2s" }}></div>
        
        {/* Modern grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-right space-y-8">
            
            {/* Ultra Modern Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-bold text-lg shadow-2xl animate-fade-in">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-3 rtl:mr-0 rtl:ml-3"></div>
              {t("home.hero.badge", "شركة رائدة في المعارض الدولية")}
              <Sparkles className="ml-3 rtl:ml-0 rtl:mr-3 animate-spin-slow" size={20} />
            </div>

            {/* Revolutionary Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  أطلس الشرق
                </span>
              </h1>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                للمعارض والمؤتمرات
              </div>
            </div>

            {/* Modern Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-up font-medium" style={{animationDelay:'200ms'}}>
              {t(
                "home.hero.subtitle",
                "نربط الشركات بالأسواق العالمية من خلال خدمات متكاملة ومتخصصة",
              )}
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up" style={{animationDelay:'400ms'}}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium">
                  <feature.icon size={16} className="text-emerald-400" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Revolutionary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-up" style={{animationDelay:'600ms'}}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Rocket className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce relative z-10" size={24} />
                  <span className="relative z-10">{t("home.hero.cta", "ابدأ رحلة النجاح")}</span>
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover:translate-x-2 transition-transform relative z-10" size={24} />
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                asChild
              >
                <Link href="/services" className="flex items-center">
                  <Play className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                  <span>شاهد أعمالنا</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive Stats Dashboard */}
          <div className="relative">
            {/* Main Stats Display */}
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${stats[currentStat].gradient} text-white mb-6 shadow-2xl animate-pulse`}>
                  {React.createElement(stats[currentStat].icon, { size: 40 })}
                </div>
                <div className="text-6xl font-black text-white mb-2 animate-bounce">
                  {stats[currentStat].value}
                </div>
                <div className="text-xl font-bold text-white/90 mb-2">
                  {stats[currentStat].label}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {stats[currentStat].description}
                </div>
              </div>

              {/* Stats Navigation */}
              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentStat 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Mini Stats */}
            <div className="absolute -top-6 -right-6 bg-emerald-500/90 backdrop-blur-sm rounded-2xl p-4 text-white shadow-xl animate-float">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs">سنة خبرة</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-blue-500/90 backdrop-blur-sm rounded-2xl p-4 text-white shadow-xl animate-float" style={{animationDelay: '1s'}}>
              <div className="text-2xl font-bold">2K+</div>
              <div className="text-xs">شريك دولي</div>
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/60 text-xs font-medium">اكتشف المزيد</span>
          </div>
        </div>
      </div>
    </section>
  );
}
