"use client"

import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Users, 
  Calendar, 
  Globe, 
  Award,
  TrendingUp,
  Star,
  Zap
} from "lucide-react"

export function HeroSection() {
  const { t } = useTranslation()

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: t('home.about.features.events', 'فعالية منظمة'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      value: "2000+",
      label: t('home.about.features.network', 'شريك صيني'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      value: "98%",
      label: t('home.about.features.success', 'معدل رضا'),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      value: "15+",
      label: t('home.about.features.experience', 'سنة خبرة'),
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-semibold mb-8 border border-white/20 shadow-2xl">
            <Star className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t('home.hero.badge', 'شركة رائدة في المعارض الدولية')}
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {t('home.hero.title', 'أطلس الشرق للمعارض والمؤتمرات')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            {t('home.hero.subtitle', 'نربط الشركات بالأسواق العالمية من خلال خدمات متكاملة ومتخصصة')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('home.hero.description', 'نفخر بخبرة 15+ عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-xl px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Zap className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                {t('home.hero.cta', 'ابدأ رحلة النجاح')}
                <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/services">
                <Globe className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                {t('home.hero.secondaryCta', 'اكتشف خدماتنا')}
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 mx-auto shadow-xl`}>
                  <stat.icon size={32} />
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm md:text-base font-medium">
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
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
