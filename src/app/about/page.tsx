"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Target,
  Award,
  CheckCircle,
  Globe,
  Star,
  Shield,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Zap,
  Heart,
  Crown,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  const { t: tHome } = useTranslation("home");
  const { t: tContact } = useTranslation("contact");

  return (
    <>
      {/* Ultra Modern Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Main Content */}
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-bold text-lg mb-8 shadow-lg">
                <Building2 className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
                <span>من نحن</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  شركة أطلس الشرق
                </span>
                <br />
                <span className="text-white">للمعارض والمؤتمرات</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-medium">
                نفخر بخبرة 15 عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                >
                  <Phone className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                  <span>تواصل معنا الآن</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <ArrowRight className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                  <span>اعرف المزيد</span>
                </Button>
              </div>
            </div>

            {/* Interactive Stats Dashboard */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">15+</div>
                <div className="text-white/80 font-medium">سنة خبرة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
                <div className="text-white/80 font-medium">معدل رضا</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">2000+</div>
                <div className="text-white/80 font-medium">شريك صيني</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">فعالية منظمة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-2xl text-blue-700 font-bold text-lg mb-8 shadow-lg">
              <Lightbulb className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                رؤيتنا ورسالتنا
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                نؤمن بالتميز والابتكار
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              نسعى ليكون أطلس الشرق الجسر الرائد في ربط الأعمال بين المملكة العربية السعودية والصين
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-8 shadow-2xl group-hover:animate-bounce">
                <Target size={36} />
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                رؤيتنا
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed font-medium text-lg">
                أن نكون الشركة الرائدة في مجال المعارض والتجارة الدولية، والجسر الأمثل الذي يربط بين الشركات السعودية والصينية لتحقيق نمو اقتصادي مستدام ومزدهر.
              </p>

              <div className="flex items-center text-blue-600 font-bold text-lg">
                <ArrowRight className="mr-2 rtl:mr-0 rtl:ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                <span>اكتشف المزيد</span>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-8 shadow-2xl group-hover:animate-bounce">
                <Award size={36} />
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                رسالتنا
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed font-medium text-lg">
                توفير خدمات متكاملة ومبتكرة في مجال المعارض والمؤتمرات الدولية، مع التركيز على بناء شراكات استراتيجية قوية تدعم النمو الاقتصادي المشترك.
              </p>

              <div className="flex items-center text-emerald-600 font-bold text-lg">
                <ArrowRight className="mr-2 rtl:mr-0 rtl:ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                <span>اكتشف المزيد</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Modern Company Info Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-200/50 rounded-2xl text-amber-700 font-bold text-lg mb-8 shadow-lg">
              <Building2 className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                معلومات الشركة
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                أطلس الشرق للمعارض والمؤتمرات
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              شركة رائدة في مجال المعارض والتجارة الدولية، تم تأسيسها بهدف ربط الشركات السعودية بالأسواق الصينية والعالمية من خلال خدمات متكاملة ومبتكرة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                منذ تأسيسنا، عملنا على بناء شبكة علاقات قوية مع أكثر من 2000 شركة صينية و500 شركة سعودية، مما جعلنا الخيار الأمثل للشركات التي تسعى للتوسع في الأسواق الدولية.
              </p>

              {/* Revolutionary Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-black text-amber-600 mb-2 group-hover:scale-110 transition-transform">15+</div>
                  <div className="text-amber-700 font-bold">سنة خبرة</div>
                </div>
                <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-purple-700 font-bold">فعالية منظمة</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-6">
              <div className="group flex items-start p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-4 shadow-lg group-hover:animate-bounce">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 text-lg">خبرة استثنائية</h4>
                  <p className="text-gray-600 font-medium">
                    أكثر من 15 عاماً من الخبرة في مجال المعارض والمؤتمرات الدولية
                  </p>
                </div>
              </div>

              <div className="group flex items-start p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white mr-4 shadow-lg group-hover:animate-bounce">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 text-lg">شبكة علاقات واسعة</h4>
                  <p className="text-gray-600 font-medium">
                    شبكة تضم أكثر من 2000 شريك صيني و500 شركة سعودية
                  </p>
                </div>
              </div>

              <div className="group flex items-start p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white mr-4 shadow-lg group-hover:animate-bounce">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 text-lg">جودة عالية</h4>
                  <p className="text-gray-600 font-medium">
                    معايير جودة عالمية مع معدل رضا يصل إلى 98%
                  </p>
                </div>
              </div>

              <div className="group flex items-start p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 text-white mr-4 shadow-lg group-hover:animate-bounce">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 text-lg">دعم شامل</h4>
                  <p className="text-gray-600 font-medium">
                    دعم فني وإداري على مدار الساعة لضمان نجاح فعالياتك
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Modern Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-200/50 rounded-2xl text-emerald-700 font-bold text-lg mb-8 shadow-lg">
              <Heart className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                لماذا أطلس الشرق؟
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                نختار أطلس الشرق لنجاح أعمالك
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              نتميز بخبرة فريدة وخدمات متكاملة تجعلنا الخيار الأمثل لشركائك التجاريين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-2xl group-hover:animate-bounce">
                <Users size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                خبرة استثنائية
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                15+ سنة خبرة في مجال المعارض والمؤتمرات الدولية، مع فهم عميق للثقافة التجارية في الصين والمملكة العربية السعودية
              </p>
            </div>

            {/* Network */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-6 shadow-2xl group-hover:animate-bounce">
                <Globe size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                شبكة علاقات قوية
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                شبكة واسعة تضم أكثر من 2000 شريك تجاري في الصين و500 شركة سعودية، مما يضمن لك الوصول لأفضل الفرص التجارية
              </p>
            </div>

            {/* Quality */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white mb-6 shadow-2xl group-hover:animate-bounce">
                <Award size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                سجل نجاح متميز
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                تفخر بتنظيم أكثر من 500 فعالية ناجحة، مع معدل رضا يصل إلى 98% من عملائنا، مما يجعلنا الخيار الموثوق لنجاح أعمالك
              </p>
            </div>

            {/* Events */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 text-white mb-6 shadow-2xl group-hover:animate-bounce">
                <Calendar size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                فعاليات متميزة
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                تنظيم فعاليات ومعارض متميزة تجمع بين الشركات السعودية والصينية في بيئة احترافية ومحفزة للاستثمار
              </p>
            </div>

            {/* Support */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500 to-pink-600 text-white mb-6 shadow-2xl group-hover:animate-bounce">
                <Shield size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                دعم شامل 24/7
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                فريق دعم متخصص متاح على مدار الساعة لتقديم المساعدة والدعم الفني، مما يضمن نجاح فعالياتك من البداية حتى النهاية
              </p>
            </div>

            {/* Innovation */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-6 shadow-2xl group-hover:animate-bounce">
                <Star size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                ابتكار مستمر
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                تواكب أحدث التقنيات والاتجاهات في مجال المعارض، وتقدم حلول مبتكرة تضمن تجربة فريدة ومميزة لجميع المشاركين
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Modern CTA Section */}
      <section className="relative">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-bold text-lg mb-10 shadow-lg">
              <Zap className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
              <span>ابدأ رحلتك معنا</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
              مستعد لبدء رحلة النجاح؟
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button 
                size="lg" 
                className="group bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105" 
              >
                <Phone className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                <span>تواصل معنا الآن</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <Mail className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                <span>راسلنا عبر الإيميل</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
