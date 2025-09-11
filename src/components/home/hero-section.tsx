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
  Zap,
  Sparkles,
  Rocket,
  Target,
  Crown,
} from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Rocket,
      value: "500+",
      label: t("home.about.features.events", "فعالية منظمة"),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Globe,
      value: "2000+",
      label: t("home.about.features.network", "شريك صيني"),
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Crown,
      value: "98%",
      label: t("home.about.features.success", "معدل رضا"),
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Target,
      value: "15+",
      label: t("home.about.features.experience", "سنة خبرة"),
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero"></div>

      {/* Modern Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-rose-600/20 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        
        {/* Modern grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Modern Badge */}
          <div className="inline-flex items-center px-8 py-4 glass text-white rounded-full text-lg font-bold mb-8 shadow-2xl hover-lift interactive-glow animate-fade-in text-white-visible">
            <Sparkles className="mr-3 rtl:mr-0 rtl:ml-3 animate-spin-slow" size={24} />
            {t("home.hero.badge", "شركة رائدة في المعارض الدولية")}
            <div className="ml-3 rtl:ml-0 rtl:mr-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-elevated mb-8 leading-tight animate-fade-in drop-shadow-lg text-white-visible">
            {t("home.hero.title", "أطلس الشرق للمعارض والمؤتمرات")}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white text-elevated mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-up font-bold drop-shadow-md text-white-visible">
            {t(
              "home.hero.subtitle",
              "نربط الشركات بالأسواق العالمية من خلال خدمات متكاملة ومتخصصة",
            )}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white text-elevated mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-up font-semibold drop-shadow-sm text-white-visible" style={{animationDelay:'120ms'}}>
            {t(
              "home.hero.description",
              "نفخر بخبرة 15+ عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية",
            )}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-up" style={{animationDelay:'400ms'}}>
            <Button
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700 font-bold rounded-2xl shadow-2xl hover:shadow-3xl btn-modern group"
              asChild
            >
              <Link href="/contact">
                <Rocket className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                {t("home.hero.cta", "ابدأ رحلة النجاح")}
                <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-bold rounded-2xl shadow-2xl hover:shadow-3xl btn-modern group text-white-visible"
              asChild
            >
              <Link href="/services">
                <Globe className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-spin" size={24} />
                {t("home.hero.secondaryCta", "اكتشف خدماتنا")}
              </Link>
            </Button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up" style={{animationDelay:'600ms'}}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl p-6 border shadow-2xl hover:shadow-3xl hover-lift group"
                style={{animationDelay: `${800 + index * 100}ms`}}
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4 mx-auto shadow-xl group-hover:animate-pulse-glow`}
                >
                  <stat.icon size={32} className="group-hover:animate-bounce" />
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform drop-shadow-md text-white-visible">
                    {stat.value}
                  </div>
                  <div className="text-white text-sm md:text-base font-semibold drop-shadow-sm text-white-visible">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
