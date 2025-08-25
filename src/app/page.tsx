"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Award,
  Globe,
  Building,
  TrendingUp,
  Zap,
  Eye,
  Shield,
  Clock,
  Heart,
  Rocket,
} from "lucide-react";

export default function Home() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>

                  {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-atlas-primary-400/10 to-atlas-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-atlas-secondary-500/10 to-atlas-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-atlas-primary-300/5 to-atlas-secondary-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div
            className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in-up border border-white/20">
              <Award className="mr-2" size={16} />
              {t('hero.badge', { ns: 'home' }) || '🏆 الشريك الموثوق للتجارة الدولية منذ 2009'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="text-atlas-accent-200">{t('companyName', { ns: 'common' }) || 'أطلس الشرق'}</span><br />
              {t('hero.title', { ns: 'home' }) || 'للمعارض والمؤتمرات الدولية'}
            </h1>
            <p className="text-xl md:text-2xl text-atlas-primary-200 leading-relaxed mb-6 animate-fade-in-up delay-300 font-semibold">
              {t('hero.subtitle', { ns: 'home' }) || '🌟 جسر التواصل الأمثل بين الشرق والغرب'}
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto animate-fade-in-up delay-400">
              {t('hero.description', { ns: 'home' }) || 'بخبرة تتجاوز 15 عاماً، نفخر بكوننا الشريك الاستراتيجي الرائد في تسهيل التبادل التجاري وتنظيم المعارض الدولية'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
              <Button
                size="lg"
                className="text-lg px-8 py-6 btn-primary-gradient transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow"
              >
                <Rocket className="mr-2" size={20} />
                                  {t('hero.discoverServices', { ns: 'home' }) || '🚀 اكتشف حلولنا المتكاملة'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Phone className="mr-2" size={20} />
                {t('hero.startJourney', { ns: 'home' }) || '📞 استشارة مجانية الآن'}
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70 animate-fade-in-up delay-700">
              <div className="flex items-center text-white/80 text-sm">
                <Shield className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
                {t('hero.trust.quality', { ns: 'home' }) || 'ضمان الجودة العالمية'}
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <Clock className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
                {t('hero.trust.support', { ns: 'home' }) || 'دعم على مدار الساعة'}
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <Heart className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
                {t('hero.trust.satisfaction', { ns: 'home' }) || 'رضا العملاء أولويتنا'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-modern text-center p-6 hover:shadow-2xl group">
              <div className="text-3xl md:text-4xl font-bold text-atlas-primary-600 mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-atlas-primary-700 font-medium">{t('stats.experience', { ns: 'home' }) || 'سنة خبرة'}</div>
            </div>
            <div className="card-modern text-center p-6 hover:shadow-2xl group">
              <div className="text-3xl md:text-4xl font-bold text-atlas-secondary-600 mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-atlas-primary-700 font-medium">{t('stats.satisfaction', { ns: 'home' }) || 'معدل رضا'}</div>
            </div>
            <div className="card-modern text-center p-6 hover:shadow-2xl group">
              <div className="text-3xl md:text-4xl font-bold text-atlas-accent-600 mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                2000+
              </div>
              <div className="text-atlas-primary-700 font-medium">{t('stats.partners', { ns: 'home' }) || 'شريك صيني'}</div>
            </div>
            <div className="card-modern text-center p-6 hover:shadow-2xl group">
              <div className="text-3xl md:text-4xl font-bold text-atlas-primary-500 mb-2 animate-count-up group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-atlas-primary-700 font-medium">{t('stats.events', { ns: 'home' }) || 'فعالية منظمة'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-atlas-brown-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-atlas-gold-100 text-atlas-gold-700 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Building className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
              {t('about.badge', { ns: 'home' }) || 'من نحن'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-atlas-dark mb-6 animate-fade-in-up delay-200">
              {t('about.title', { ns: 'home' }) || 'شركة أطلس الشرق للمعارض والمؤتمرات'}
            </h2>
            <p className="text-xl text-atlas-brown-600 max-w-4xl mx-auto animate-fade-in-up delay-300">
              {t('about.description', { ns: 'home' }) || 'نفخر بخبرة 15 عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card-modern text-center p-6 animate-fade-in-up delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-atlas-dark mb-2">
                {t('about.experience', { ns: 'home' }) || '15+ سنة خبرة'}
              </h3>
              <p className="text-atlas-brown-600 text-sm">
                {t('about.experienceDesc', { ns: 'home' }) || 'خبرة عميقة في تنظيم الفعاليات التجارية الدولية'}
              </p>
            </div>

            <div className="card-modern text-center p-6 animate-fade-in-up delay-500">
              <div className="w-16 h-16 bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-atlas-dark mb-2">
                {t('about.partners', { ns: 'home' }) || '2000+ شريك صيني'}
              </h3>
              <p className="text-atlas-brown-600 text-sm">
                {t('about.partnersDesc', { ns: 'home' }) || 'علاقات وثيقة مع الشركات الصينية والسعودية'}
              </p>
            </div>

            <div className="card-modern text-center p-6 animate-fade-in-up delay-600">
              <div className="w-16 h-16 bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-atlas-dark mb-2">
                {t('about.satisfaction', { ns: 'home' }) || '98% معدل رضا'}
              </h3>
              <p className="text-atlas-brown-600 text-sm">
                {t('about.satisfactionDesc', { ns: 'home' }) || 'معايير جودة عالمية في جميع خدماتنا'}
              </p>
            </div>

            <div className="card-modern text-center p-6 animate-fade-in-up delay-700">
              <div className="w-16 h-16 bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-atlas-dark mb-2">
                {t('about.support', { ns: 'home' }) || 'دعم متواصل'}
              </h3>
              <p className="text-atlas-brown-600 text-sm">
                {t('about.supportDesc', { ns: 'home' }) || 'دعم فني وإداري على مدار الساعة'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-atlas-gold-100 text-atlas-gold-700 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Award className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
              {t('services.badge', { ns: 'home' }) || 'خدماتنا المتخصصة'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-atlas-dark mb-6 animate-fade-in-up delay-200">
              {t('services.title', { ns: 'home' }) || 'خدماتنا المتخصصة'}
            </h2>
            <p className="text-xl text-atlas-brown-600 max-w-4xl mx-auto animate-fade-in-up delay-300">
              {t('services.description', { ns: 'home' }) || 'نقدم مجموعة شاملة من الخدمات المتخصصة لربط الأعمال بين الصين والمملكة العربية السعودية'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-modern p-8 animate-fade-in-up delay-400">
               <div className="w-16 h-16 bg-atlas-dark rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {t('services.businessTrips.title', { ns: 'home' }) || 'تنظيم رحلات الأعمال'}
              </h3>
              <p className="text-atlas-brown-700 mb-6">
                {t('services.businessTrips.description', { ns: 'home' }) || 'ترتيب رحلات أعمال للشركات للقاء شركاء محتملين واستكشاف فرص الاستثمار الجديدة'}
              </p>
              <ul className="space-y-2 mb-6">
                {(() => {
                  const features = t('services.businessTrips.features', { ns: 'home', returnObjects: true });
                  const featureArray = Array.isArray(features) ? features : [
                    'برامج سفر مخصصة',
                    'ترجمة فورية',
                    'خدمات VIP شاملة',
                    'متابعة ما بعد الرحلة'
                  ];
                  return featureArray.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-atlas-brown-700">
                      <Star className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 text-atlas-gold-600" />
                      {feature}
                    </li>
                  ));
                })()}
              </ul>
              <Button className="w-full btn-primary-gradient transform hover:scale-105 transition-all duration-300">
                اعرف المزيد →
              </Button>
            </div>

            <div className="card-modern p-8 animate-fade-in-up delay-500">
               <div className="w-16 h-16 bg-atlas-dark rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {t('services.networking.title', { ns: 'home' }) || 'ربط رجال الأعمال'}
              </h3>
              <p className="text-atlas-brown-700 mb-6">
                {t('services.networking.description', { ns: 'home' }) || 'ربط رجال الأعمال بين الصين والمملكة العربية السعودية للنمو المشترك وبناء شراكات استراتيجية'}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  لقاءات B2B مخصصة
                </li>
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  شبكة علاقات واسعة
                </li>
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  فرص استثمارية حصرية
                </li>
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  دعم قانوني واستشاري
                </li>
              </ul>
              <Button className="w-full btn-primary-gradient transform hover:scale-105 transition-all duration-300">
                اعرف المزيد →
              </Button>
            </div>

            <div className="card-modern p-8 animate-fade-in-up delay-600">
               <div className="w-16 h-16 bg-atlas-dark rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                تنظيم المعارض والفعاليات
              </h3>
              <p className="text-atlas-brown-700 mb-6">
                تنظيم معارض وفعاليات احترافية لعرض المنتجات والخدمات مع أحدث
                التقنيات والتصاميم
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  تصميم أجنحة احترافية
                </li>
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  إدارة شاملة للفعاليات
                </li>
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  خدمات لوجستية متكاملة
                </li>
                <li className="flex items-center text-atlas-brown-700">
                  <Star className="w-4 h-4 mr-2 text-atlas-gold-600" />
                  دعم تسويقي متقدم
                </li>
              </ul>
              <Button className="w-full btn-primary-gradient transform hover:scale-105 transition-all duration-300">
                اعرف المزيد →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cta-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-atlas-dark/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              {t('cta.title', { ns: 'home' }) || 'مستعد لبدء رحلة النجاح؟'}
            </h2>
            <p className="text-xl text-atlas-gold-50 mb-8 animate-fade-in-up delay-200">
              {t('cta.description', { ns: 'home' }) || 'اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-atlas-dark text-white hover:bg-atlas-brown-900 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Zap className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {t('cta.contactNow', { ns: 'home' }) || 'تواصل معنا الآن'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-atlas-dark transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Eye className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {t('cta.exploreServices', { ns: 'home' }) || 'استكشف جميع الخدمات'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-atlas-gold-100 text-atlas-gold-700 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Calendar className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
              {t('events.badge', { ns: 'home' }) || 'الفعاليات القادمة'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-atlas-dark mb-6 animate-fade-in-up delay-200">
              {t('events.title', { ns: 'home' }) || 'الفعاليات القادمة'}
            </h2>
            <p className="text-xl text-atlas-brown-600 max-w-4xl mx-auto animate-fade-in-up delay-300">
              {t('events.description', { ns: 'home' }) || 'اكتشف أهم الفعاليات والمعارض القادمة'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-glass p-8 animate-fade-in-up delay-400">
              <h3 className="text-2xl font-bold mb-4">
                {t('events.falconExpo.title', { ns: 'home' }) || 'معرض الصقور والصيد السعودي الدولي 2025'}
              </h3>
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span>{t('events.falconExpo.date', { ns: 'home' }) || '٢ - ١١ أكتوبر ٢٠٢٥'}</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">
                {t('events.falconExpo.subtitle', { ns: 'home' }) || 'أكبر معرض للصقور والصيد في الشرق الأوسط'}
              </h4>
              <p className="text-atlas-gold-100/80 mb-6">
                {t('events.falconExpo.description', { ns: 'home' }) || 'معرض سنوي لعشاق الصقور والصيد، يعرض أفضل الصقور وأحدث المعدات والتقنيات في مجال الصيد والصقور'}
              </p>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>الرياض - مركز المعارض</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm">زائر متوقع</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">شركة صينية</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">شركة صينية</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm">مدن صينية</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="btn-primary-gradient transform hover:scale-105 transition-all duration-300">
                  <Zap className="mr-2" size={16} />
                  سجل الآن
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-atlas-dark transform hover:scale-105 transition-all duration-300"
                >
                  <Eye className="mr-2" size={16} />
                  اعرف المزيد
                </Button>
              </div>
            </div>

            <div className="card-glass p-8 animate-fade-in-up delay-500">
              <h3 className="text-2xl font-bold mb-4">
                زيارة رجال الأعمال السعوديين للصين
              </h3>
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>نوفمبر ٢٠٢٥</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">
                رحلة استكشافية لفرص الاستثمار العقاري
              </h4>
              <p className="text-atlas-gold-100/80 mb-6">
                رحلة تعريفية للتعرف على شركات العقارات وبناء شراكات محلية في
                المملكة العربية السعودية مع فرص استثمارية حصرية
              </p>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>الصين - بكين، شنغهاي، تشندو</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm">شراكة متوقعة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">شركة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">مقعد للرؤساء التنفيذيين</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">تشندو</div>
                  <div className="text-sm">مدينة</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="btn-primary-gradient transform hover:scale-105 transition-all duration-300">
                  <Zap className="mr-2" size={16} />
                  سجل الآن
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-atlas-dark transform hover:scale-105 transition-all duration-300"
                >
                  <Eye className="mr-2" size={16} />
                  اعرف المزيد
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Atlas Section */}
      <section className="hero-gradient text-white relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-atlas-dark/80"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-atlas-gold-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-atlas-gold-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-atlas-gold-500/20 text-atlas-gold-300 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Star className="mr-2" size={16} />
              لماذا أطلس الشرق؟
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up delay-200">
              نختار أطلس الشرق لنجاح أعمالك
            </h2>
            <p className="text-xl text-atlas-gold-100/80 max-w-4xl mx-auto animate-fade-in-up delay-300">
              نتميز بخبرة فريدة وخدمات متكاملة تجعلنا الخيار الأمثل لشركائك
              التجاريين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-glass p-6 animate-fade-in-up delay-400">
              <div className="w-12 h-12 bg-atlas-gold-500 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">خبرة استثنائية</h3>
              <p className="text-atlas-gold-300 text-sm mb-2">15+ سنة خبرة</p>
              <p className="text-atlas-gold-100/80 text-sm">
                أكثر من 15 عاماً من الخبرة في مجال المعارض والمؤتمرات الدولية،
                مع فهم عميق الثقافة الأعمال في الصين والمملكة العربية السعودية
              </p>
            </div>

            <div className="card-glass p-6 animate-fade-in-up delay-500">
              <div className="w-12 h-12 bg-atlas-gold-500 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">شبكة علاقات قوية</h3>
              <p className="text-atlas-gold-300 text-sm mb-2">2000+ شريك صيني</p>
              <p className="text-atlas-gold-100/80 text-sm">
                شبكة واسعة تضم أكثر من 2000 شريك تجاري في الصين و 500 شركة
                سعودية، مما يضمن لك الوصول لأفضل الفرص التجارية
              </p>
            </div>

            <div className="card-glass p-6 animate-fade-in-up delay-600">
              <div className="w-12 h-12 bg-atlas-gold-500 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">سجل نجاح متميز</h3>
              <p className="text-atlas-gold-300 text-sm mb-2">98% معدل رضا</p>
              <p className="text-atlas-gold-100/80 text-sm">
                تفخر بتنظيم أكثر من 500 فعالية ناجحة، مع معدل رضا يصل إلى 98% من
                عملائنا، مما يجعلنا الخيار الموثوق لنجاح أعمالك
              </p>
            </div>

            <div className="card-glass p-6 animate-fade-in-up delay-700">
              <div className="w-12 h-12 bg-atlas-gold-500 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">ابتكار مستمر</h3>
              <p className="text-atlas-gold-300 text-sm mb-2">تقنيات حديثة</p>
              <p className="text-atlas-gold-100/80 text-sm">
                تواكب أحدث التقنيات والاتجاهات في مجال المعارض، وتقدم حلول
                مبتكرة تضمن تجربة فريدة ومميزة لجميع المشاركين
              </p>
            </div>

            <div className="card-glass p-6 animate-fade-in-up delay-800">
              <div className="w-12 h-12 bg-atlas-gold-500 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">دعم شامل 24/7</h3>
              <p className="text-atlas-gold-300 text-sm mb-2">24/7 دعم</p>
              <p className="text-atlas-gold-100/80 text-sm">
                فريق دعم متخصص متاح على مدار الساعة لتقديم المساعدة والدعم
                الفني، مما يضمن نجاح فعالياتك من البداية حتى النهاية
              </p>
            </div>

            <div className="card-glass p-6 animate-fade-in-up delay-900">
              <div className="w-12 h-12 bg-atlas-gold-500 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">جودة عالية مضمونة</h3>
              <p className="text-atlas-gold-300 text-sm mb-2">ISO 9001</p>
              <p className="text-atlas-gold-100/80 text-sm">
                تلتزم بأعلى معايير الجودة العالمية، مع شهادات اعتماد دولية وضمان
                رضا تام لجميع خدماتنا
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
