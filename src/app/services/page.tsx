"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Globe, Users, ShoppingBag, Building, Award, Phone } from "lucide-react"

export default function ServicesPage() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Calendar,
      title: t('services.servicesList.exhibitions.title') || 'تنظيم المعارض والفعاليات',
      description: t('services.servicesList.exhibitions.description') || 'تنظيم معارض وفعاليات احترافية مع أحدث التقنيات والتصاميم',
      features: (() => {
        const features = t('services.servicesList.exhibitions.features', { returnObjects: true });
        return Array.isArray(features) ? features : [];
      })()
    },
    {
      icon: Users,
      title: t('services.servicesList.networking.title') || 'ربط رجال الأعمال',
      description: t('services.servicesList.networking.description') || 'ربط رجال الأعمال بين الصين والمملكة العربية السعودية',
      features: (() => {
        const features = t('services.servicesList.networking.features', { returnObjects: true });
        return Array.isArray(features) ? features : [];
      })()
    },
    {
      icon: Globe,
      title: t('services.servicesList.travel.title') || 'تنظيم رحلات الأعمال',
      description: t('services.servicesList.travel.description') || 'ترتيب رحلات أعمال للشركات للقاء شركاء محتملين',
      features: (() => {
        const features = t('services.servicesList.travel.features', { returnObjects: true });
        return Array.isArray(features) ? features : [];
      })()
    },
    {
      icon: ShoppingBag,
      title: t('services.servicesList.showcase.title') || 'عرض المنتجات والخدمات',
      description: t('services.servicesList.showcase.description') || 'عرض احترافي للمنتجات والخدمات في المعارض الدولية',
      features: (() => {
        const features = t('services.servicesList.showcase.features', { returnObjects: true });
        return Array.isArray(features) ? features : [];
      })()
    },
    {
      icon: Building,
      title: t('services.servicesList.intelligence.title') || 'استخبارات السوق',
      description: t('services.servicesList.intelligence.description') || 'تحليل شامل لأسواق الصين والمملكة العربية السعودية',
      features: (() => {
        const features = t('services.servicesList.intelligence.features', { returnObjects: true });
        return Array.isArray(features) ? features : [];
      })()
    },
    {
      icon: Award,
      title: t('services.servicesList.partnerships.title') || 'إدارة الشراكات',
      description: t('services.servicesList.partnerships.description') || 'إدارة شاملة للشراكات التجارية والاستثمارية',
      features: (() => {
        const features = t('services.servicesList.partnerships.features', { returnObjects: true });
        return Array.isArray(features) ? features : [];
      })()
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Services Hero */}
      <section className="hero-gradient relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-eerie-black/60 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-ghost-white/20 text-ghost-white rounded-full text-sm font-medium mb-6">
              <Award className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
              {t('services.hero.badge') || 'خدمات متخصصة'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('services.hero.title') || 'خدماتنا المتكاملة'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {t('services.hero.description') || 'نقدم مجموعة شاملة من الخدمات المتخصصة لربط الأعمال بين الصين والمملكة العربية السعودية'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-ghost-white text-eerie-black hover:bg-platinum transition-all duration-300">
                <Phone className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {t('contact.hero.callNow') || 'اتصل الآن'}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                <Globe className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {t('services.hero.exploreServices') || 'استكشف خدماتنا'}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-palette-celestial-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-palette-celestial-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-palette-celestial-blue to-blue-600 text-white mb-6 mx-auto shadow-lg">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-palette-celestial-blue rounded-full mr-3 rtl:mr-0 rtl:ml-4 mt-2 flex-shrink-0"></div>
                      <span className="rtl:mr-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {t('services.whyChooseUs.title') || 'لماذا تختار خدماتنا؟'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('services.whyChooseUs.description') || 'نتميز بخبرة فريدة وخدمات متكاملة تجعلنا الخيار الأمثل لشركائك التجاريين'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="text-center">
               <div className="flex items-center justify-center w-16 h-16 rounded-full bg-eerie-black/10 text-eerie-black mb-4 mx-auto">
                 <Award size={32} />
               </div>
               <h3 className="text-xl font-semibold mb-2">{t('services.whyChooseUs.excellence.title') || 'التميز في الخدمة'}</h3>
               <p className="text-gray-600">
                 {t('services.whyChooseUs.excellence.description') || 'نلتزم بأعلى معايير الجودة في جميع خدماتنا'}
               </p>
             </div>
            
                         <div className="text-center">
               <div className="flex items-center justify-center w-16 h-16 rounded-full bg-eerie-black/10 text-eerie-black mb-4 mx-auto">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-semibold mb-2">{t('services.whyChooseUs.expertise.title') || 'خبرة متخصصة'}</h3>
               <p className="text-gray-600">
                 {t('services.whyChooseUs.expertise.description') || 'فريق من الخبراء المتخصصين في مجال المعارض والتجارة الدولية'}
               </p>
             </div>
            
                         <div className="text-center">
               <div className="flex items-center justify-center w-16 h-16 rounded-full bg-eerie-black/10 text-eerie-black mb-4 mx-auto">
                 <Award size={32} />
               </div>
               <h3 className="text-xl font-semibold mb-2">{t('services.whyChooseUs.solutions.title') || 'حلول مخصصة'}</h3>
               <p className="text-gray-600">
                 {t('services.whyChooseUs.solutions.description') || 'نقدم حلولاً مخصصة تناسب احتياجات كل عميل'}
               </p>
             </div>
          </div>
        </div>
      </section>
      
             {/* CTA Section */}
       <section className="py-16 bg-eerie-black text-ghost-white">
        <div className="container mx-auto px-4 text-center">
                     <h2 className="text-3xl font-bold mb-6">{t('services.cta.title') || 'مستعد لبدء رحلة النجاح؟'}</h2>
           <p className="text-xl mb-8 max-w-2xl mx-auto">
             {t('services.cta.description') || 'اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية'}
           </p>
                     <div className="flex flex-wrap justify-center gap-4">
             <Button size="lg" variant="secondary" className="bg-ghost-white text-eerie-black hover:bg-platinum">
               <Phone className="mr-2 h-5 w-5" />
               {t('services.cta.contact') || 'تواصل معنا الآن'}
             </Button>
             <Button size="lg" variant="outline" className="border-ghost-white text-ghost-white hover:bg-ghost-white hover:text-eerie-black">
               {t('services.cta.learnMore') || 'اعرف المزيد'}
             </Button>
           </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

