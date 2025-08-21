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
  Heart
} from "lucide-react"

export function AboutSection() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Users,
      title: t('home.about.features.experience', '15+ سنة خبرة'),
      description: t('home.about.features.experienceDesc', 'خبرة عميقة في تنظيم الفعاليات التجارية الدولية'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: t('home.about.features.network', '2000+ شريك صيني'),
      description: t('home.about.features.networkDesc', 'علاقات وثيقة مع الشركات الصينية والسعودية'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: t('home.about.features.success', '98% معدل رضا'),
      description: t('home.about.features.successDesc', 'معايير جودة عالمية في جميع خدماتنا'),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: t('home.about.features.support', 'دعم متواصل'),
      description: t('home.about.features.supportDesc', 'دعم فني وإداري على مدار الساعة'),
      color: "from-rose-500 to-rose-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold mb-8 shadow-2xl">
            <Building className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t('home.about.title', 'من نحن')}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            {t('home.about.subtitle', 'شركة أطلس الشرق للمعارض والمؤتمرات')}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('home.about.description', 'نفخر بخبرة 15+ عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
            >
              <div className={`flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} text-white mb-6 mx-auto shadow-2xl`}>
                <feature.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-white shadow-3xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg font-medium text-white/90">
                {t('home.about.stats.years', 'سنوات الخبرة')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg font-medium text-white/90">
                {t('home.about.stats.events', 'فعالية منظمة')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-lg font-medium text-white/90">
                {t('home.about.features.network', 'شريك صيني')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg font-medium text-white/90">
                {t('home.about.features.success', 'معدل رضا')}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('home.about.cta.title', 'تواصل معنا اليوم')}
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('home.about.cta.description', 'نحن هنا لمساعدتك في تحقيق أهدافك التجارية. تواصل معنا الآن للحصول على استشارة مجانية')}
            </p>
            <Button 
              size="lg" 
              className="text-xl px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                {t('home.about.cta.button', 'احصل على استشارة مجانية')}
                <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
