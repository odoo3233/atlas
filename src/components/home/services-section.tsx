"use client"

import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
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
  Star
} from "lucide-react"

export function ServicesSection() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Calendar,
      title: t('home.services.exhibitions', 'تنظيم المعارض والفعاليات'),
      description: t('home.services.exhibitionsDesc', 'تنظيم معارض وفعاليات احترافية لعرض المنتجات والخدمات مع أحدث التقنيات والتصاميم'),
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      features: [
        "تصميم أجنحة احترافية",
        "إدارة شاملة للفعاليات",
        "خدمات لوجستية متكاملة",
        "دعم تسويقي متقدم"
      ]
    },
    {
      icon: Users,
      title: t('home.services.business', 'ربط رجال الأعمال'),
      description: t('home.services.businessDesc', 'ربط رجال الأعمال بين الصين والمملكة العربية السعودية للنمو المشترك وبناء شراكات استراتيجية'),
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      features: [
        "لقاءات B2B مخصصة",
        "شبكة علاقات واسعة",
        "فرص استثمارية حصرية",
        "دعم قانوني واستشاري"
      ]
    },
    {
      icon: Network,
      title: t('home.services.trips', 'تنظيم رحلات الأعمال'),
      description: t('home.services.tripsDesc', 'ترتيب رحلات أعمال للشركات للقاء شركاء محتملين واستكشاف فرص الاستثمار الجديدة'),
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      features: [
        "برامج سفر مخصصة",
        "ترجمة فورية",
        "خدمات VIP شاملة",
        "متابعة ما بعد الرحلة"
      ]
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-lg font-semibold mb-8 shadow-2xl">
            <Award className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t('home.services.title', 'خدماتنا المتخصصة')}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            {t('home.services.title', 'خدماتنا المتخصصة')}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('home.services.subtitle', 'نقدم مجموعة شاملة من الخدمات المتخصصة لربط الأعمال بين الصين والمملكة العربية السعودية')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105`}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} text-white mb-8 mx-auto shadow-2xl`}>
                <service.icon size={48} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-lg text-center leading-relaxed font-medium mb-8">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <Star className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className={`w-full text-lg px-8 py-4 bg-gradient-to-r ${service.color} hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                asChild
              >
                <Link href="/services">
                  <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
                  {t('common.learnMore', 'اعرف المزيد')}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={20} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-white shadow-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.services.cta.title', 'مستعد لبدء رحلة النجاح؟')}
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home.services.cta.description', 'اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-xl px-10 py-6 bg-white text-gray-900 hover:bg-white/90 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/services">
                  <Globe className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t('home.services.cta.explore', 'استكشف جميع الخدمات')}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-xl px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  <Zap className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t('home.services.cta.contact', 'تواصل معنا الآن')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
