"use client"

import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  ArrowRight,
  Award,
  Globe,
  Users,
  TrendingUp,
  Star,
  Zap,
  Target,
  Building,
  Clock
} from "lucide-react"

export function EventsSection() {
  const { t } = useTranslation()

  const events = [
    {
      title: t('home.upcomingEvents.businessVisits.title', 'زيارة رجال الأعمال السعوديين للصين'),
      subtitle: t('home.upcomingEvents.businessVisits.subtitle', 'رحلة استكشافية لفرص الاستثمار العقاري'),
      description: t('home.upcomingEvents.businessVisits.description', 'رحلة تعريفية للتعرّف على الشركات العقارية وبناء شراكات لهم محليًا في السعودية مع فرص استثمارية حصرية'),
      date: t('home.upcomingEvents.businessVisits.date', 'نوفمبر ٢٠٢٥'),
      location: "الصين - بكين، شنغهاي، تشندو",
      stats: [
        { value: "+15", label: t('home.upcomingEvents.businessVisits.stats.companies', 'شركة') },
        { value: "+12", label: t('home.upcomingEvents.businessVisits.stats.partnerships', 'شراكة متوقعة') },
        { value: t('home.upcomingEvents.businessVisits.stats.city', 'تشندو'), label: t('home.upcomingEvents.businessVisits.stats.cityLabel', 'مدينة') },
        { value: "+15", label: t('home.upcomingEvents.businessVisits.stats.executives', 'مقعد للرؤساء التنفيذيين') }
      ],
      gradient: "from-emerald-600 via-blue-500 to-teal-600",
      learnMoreHref: "/business-visits",
      registerHref: "/contact",
      registerText: t('home.upcomingEvents.businessVisits.register', 'سجل الآن'),
      registerVariant: "outline",
      icon: Building
    },
    {
      title: t('exhibitions.falconExhibition.title', 'معرض الصقور والصيد السعودي الدولي 2025'),
      subtitle: t('exhibitions.falconExhibition.subtitle', 'أكبر معرض للصقور والصيد في الشرق الأوسط'),
      description: t('exhibitions.falconExhibition.description', 'معرض الصقور الدولي هو حدث سنوي يجمع هواة الصيد بالصقور من جميع أنحاء العالم. يعرض أفضل أنواع الصقور وأحدث المعدات والتقنيات المستخدمة في الصيد بالصقور'),
      date: t('exhibitions.falconExhibition.date', '٢ - ١١ أكتوبر ٢٠٢٥'),
      location: "الرياض - مركز المعارض",
      stats: [
        { value: "+50", label: t('exhibitions.falconExhibition.features.exhibitors', 'شركة صينية') },
        { value: "+50K", label: t('exhibitions.falconExhibition.features.visitors', 'زائر متوقع') },
        { value: "5", label: t('exhibitions.falconExhibition.features.cities', 'مدن صينية') },
        { value: "+50", label: t('exhibitions.falconExhibition.features.countries', 'شركة صينية') }
      ],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      learnMoreHref: "/exhibitions",
      registerHref: "/contact",
      registerText: t('exhibitions.registerNow', 'سجل الآن'),
      registerVariant: "default",
      icon: Award
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-lg font-semibold mb-8 shadow-2xl">
            <Calendar className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t('home.upcomingEvents.title', 'الفعاليات القادمة')}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            {t('home.upcomingEvents.title', 'الفعاليات القادمة')}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('home.upcomingEvents.subtitle', 'اكتشف أهم الفعاليات والمعارض القادمة')}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${event.gradient} rounded-3xl p-10 text-white shadow-3xl hover:shadow-4xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105`}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <event.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-lg mt-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6 mb-10">
                <p className="text-2xl font-bold">
                  {event.subtitle}
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-white/80">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">{event.location}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {event.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all duration-300">
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-lg font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-800 hover:bg-white/90 font-bold text-lg transform hover:scale-105 transition-all shadow-xl"
                  asChild
                >
                  <Link href={event.learnMoreHref}>
                    <Globe className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
                    {t('home.upcomingEvents.businessVisits.learnMore', 'اعرف المزيد')}
                    <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={20} />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant={event.registerVariant as any}
                  className="font-bold text-lg transform hover:scale-105 transition-all shadow-xl"
                  asChild
                >
                  <Link href={event.registerHref}>
                    <Zap className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
                    {event.registerText}
                    <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white shadow-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.upcomingEvents.cta.title', 'لا تفوت فرصة المشاركة')}
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('home.upcomingEvents.cta.description', 'سجل الآن في فعالياتنا القادمة واحصل على فرص استثمارية حصرية')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-xl px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/exhibitions">
                  <Calendar className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t('home.upcomingEvents.cta.viewAll', 'عرض جميع الفعاليات')}
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
                  <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t('home.upcomingEvents.cta.contact', 'تواصل معنا')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
