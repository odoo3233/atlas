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
  CheckCircle,
  Building,
  Target,
  Heart,
  Zap,
  Shield,
  Clock,
  Sparkles
} from "lucide-react"

export function WhyAtlasSection() {
  const { t } = useTranslation()

  const reasons = [
    {
      icon: Users,
      title: t('home.whyAtlas.expertise.title', 'خبرة استثنائية'),
      stats: t('home.whyAtlas.expertise.stats', '15+ سنة خبرة'),
      description: t('home.whyAtlas.expertise.description', 'أكثر من 15 عاماً من الخبرة في مجال المعارض والمؤتمرات الدولية، مع فهم عميق لثقافة الأعمال في الصين والمملكة العربية السعودية'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: t('home.whyAtlas.network.title', 'شبكة علاقات قوية'),
      stats: t('home.whyAtlas.network.stats', '2000+ شريك صيني'),
      description: t('home.whyAtlas.network.description', 'شبكة واسعة تضم أكثر من 2000 شريك تجاري في الصين و500 شركة سعودية، مما يضمن لك الوصول لأفضل الفرص التجارية'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: t('home.whyAtlas.success.title', 'سجل نجاح متميز'),
      stats: t('home.whyAtlas.success.stats', '98% معدل رضا'),
      description: t('home.whyAtlas.success.description', 'نفخر بتنظيم أكثر من 500 فعالية ناجحة، مع معدل رضا يصل إلى 98% من عملائنا، مما يجعلنا الخيار الموثوق لنجاح أعمالك'),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Sparkles,
      title: t('home.whyAtlas.innovation.title', 'ابتكار مستمر'),
      stats: t('home.whyAtlas.innovation.stats', 'تقنيات حديثة'),
      description: t('home.whyAtlas.innovation.description', 'نواكب أحدث التقنيات والاتجاهات في مجال المعارض، ونقدم حلول مبتكرة تضمن تجربة فريدة ومميزة لجميع المشاركين'),
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Clock,
      title: t('home.whyAtlas.support.title', 'دعم شامل 24/7'),
      stats: t('home.whyAtlas.support.stats', 'دعم 24/7'),
      description: t('home.whyAtlas.support.description', 'فريق دعم متخصص متاح على مدار الساعة لتقديم المساعدة والدعم الفني، مما يضمن نجاح فعالياتك من البداية حتى النهاية'),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: t('home.whyAtlas.quality.title', 'جودة عالية مضمونة'),
      stats: t('home.whyAtlas.quality.stats', 'ISO 9001'),
      description: t('home.whyAtlas.quality.description', 'نلتزم بأعلى معايير الجودة العالمية، مع شهادات اعتماد دولية وضمان رضا تام لجميع خدماتنا'),
      color: "from-teal-500 to-teal-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-semibold mb-8 border border-white/20 shadow-2xl">
            <Star className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t('home.whyAtlas.title', 'لماذا أطلس الشرق؟')}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            {t('home.whyAtlas.title', 'لماذا أطلس الشرق؟')}
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl text-white/90 mb-8">
            {t('home.whyAtlas.subtitle', 'نختار أطلس الشرق لنجاح أعمالك')}
          </h3>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('home.whyAtlas.description', 'نتميز بخبرة فريدة وخدمات متكاملة تجعلنا الخيار الأمثل لشركائك التجاريين')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${reason.color} text-white mb-6 mx-auto shadow-2xl`}>
                <reason.icon size={40} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                {reason.title}
              </h3>

              {/* Stats */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-lg font-bold text-white border border-white/30">
                  {reason.stats}
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 text-center leading-relaxed font-medium">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 shadow-3xl border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('home.whyAtlas.cta.title', 'ابدأ رحلة النجاح معنا')}
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home.whyAtlas.cta.description', 'انضم إلى آلاف الشركات الناجحة التي اختارت أطلس الشرق كشريك استراتيجي لها')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-xl px-10 py-6 bg-white text-gray-900 hover:bg-white/90 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  <Zap className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t('home.whyAtlas.cta.button', 'تواصل معنا الآن')}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-xl px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/about">
                  <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t('common.learnMore', 'اعرف المزيد')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
