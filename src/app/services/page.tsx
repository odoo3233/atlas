"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Globe,
  Users,
  ShoppingBag,
  Building,
  Award,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Lightbulb,
  Zap,
  Heart,
  Crown,
  Rocket,
  TrendingUp,
  Mail,
} from "lucide-react";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Calendar,
      title: "تنظيم المعارض والفعاليات",
      description: "تنظيم معارض وفعاليات احترافية مع أحدث التقنيات والتصاميم",
      features: [
        "تصميم أجنحة احترافية",
        "إدارة شاملة للفعاليات", 
        "خدمات لوجستية متكاملة",
        "دعم تسويقي متقدم"
      ],
    },
    {
      icon: Users,
      title: "الشبكات التجارية",
      description: "ربط قادة الأعمال بين الصين والمملكة العربية السعودية",
      features: [
        "لقاءات B2B مخصصة",
        "شبكة واسعة",
        "فرص استثمارية حصرية",
        "دعم قانوني واستشاري"
      ],
    },
    {
      icon: Globe,
      title: "تنظيم رحلات الأعمال",
      description: "تنظيم رحلات أعمال مخصصة للشركات السعودية للصين",
      features: [
        "تخطيط شامل ومدروس",
        "ترتيب لقاءات B2B فعّالة",
        "ترجمة فورية احترافية",
        "إقامة فاخرة وخدمات VIP"
      ],
    },
    {
      icon: ShoppingBag,
      title: "عرض المنتجات",
      description: "عرض وتسويق المنتجات في الأسواق الدولية",
      features: [
        "تصميم كتالوجات احترافية",
        "حملات تسويقية مبتكرة",
        "عروض تقديمية مؤثرة",
        "متابعة العملاء المحتملين"
      ],
    },
    {
      icon: Building,
      title: "ذكاء الأعمال",
      description: "تحليل الأسواق وتقديم رؤى استراتيجية للشركات",
      features: [
        "تحليل السوق المتقدم",
        "دراسات الجدوى",
        "التنبؤ بالاتجاهات",
        "استشارات استراتيجية"
      ],
    },
    {
      icon: Award,
      title: "الشراكات التجارية",
      description: "تسهيل الشراكات التجارية بين الشركات السعودية والصينية",
      features: [
        "تحليل الشركاء المحتملين",
        "تقييم الفرص التجارية",
        "التفاوض والوساطة",
        "متابعة ما بعد الشراكة"
      ],
    },
  ];

  return (
    <>
      {/* Ultra Modern Services Hero */}
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
                <Award className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
                <span>خدماتنا المتخصصة</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  خدماتنا المتكاملة
                </span>
                <br />
                <span className="text-white">لربط الأعمال</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-medium">
                نقدم مجموعة شاملة من الخدمات المتخصصة لربط الأعمال بين الصين والمملكة العربية السعودية
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                >
                  <Phone className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                  <span>اتصل الآن</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <Globe className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                  <span>استكشف خدماتنا</span>
                </Button>
              </div>
            </div>

            {/* Interactive Services Preview */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">6+</div>
                <div className="text-white/80 font-medium">خدمات متخصصة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
                <div className="text-white/80 font-medium">معدل رضا</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">15+</div>
                <div className="text-white/80 font-medium">سنة خبرة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">مشروع ناجح</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Grid */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-2xl text-blue-700 font-bold text-lg mb-8 shadow-lg">
              <Lightbulb className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                خدماتنا المتكاملة
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                حلول شاملة لجميع احتياجاتك
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              نقدم مجموعة متكاملة من الخدمات المتخصصة التي تغطي جميع جوانب الأعمال التجارية الدولية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                  index % 3 === 1 ? 'from-emerald-500 to-teal-600' :
                  'from-amber-500 to-orange-600'
                } opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Service Icon */}
                <div className={`relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                  index % 3 === 1 ? 'from-emerald-500 to-teal-600' :
                  'from-amber-500 to-orange-600'
                } text-white mb-6 shadow-2xl group-hover:animate-bounce`}>
                  {React.createElement(service.icon, { size: 32 })}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-3">
                  {Array.isArray(service.features) &&
                    service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${
                          index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                          index % 3 === 1 ? 'from-emerald-500 to-teal-600' :
                          'from-amber-500 to-orange-600'
                        } flex items-center justify-center`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                </ul>

                {/* Learn More Button */}
                <div className="mt-8">
                  <Button
                    size="lg"
                    className={`w-full bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                      index % 3 === 1 ? 'from-emerald-500 to-teal-600' :
                      'from-amber-500 to-orange-600'
                    } text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group/btn`}
                  >
                    <span className="flex items-center justify-center">
                      <TrendingUp className="mr-3 rtl:mr-0 rtl:ml-3 group-hover/btn:animate-bounce" size={20} />
                      <span>اعرف المزيد</span>
                      <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover/btn:translate-x-1 transition-transform" size={20} />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra Modern Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-200/50 rounded-2xl text-amber-700 font-bold text-lg mb-8 shadow-lg">
              <Heart className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                لماذا تختار خدماتنا؟
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                نحن الخيار الأمثل لنجاحك
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              نتميز بخبرة فريدة وخدمات متكاملة تجعلنا الخيار الأمثل لشركائك التجاريين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white mb-6 shadow-2xl group-hover:animate-bounce mx-auto">
                <Award size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                التميز في الخدمة
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                نلتزم بأعلى معايير الجودة في جميع خدماتنا مع ضمان رضا تام للعملاء
              </p>
            </div>

            {/* Expertise */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-2xl group-hover:animate-bounce mx-auto">
                <Users size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                خبرة متخصصة
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                فريق من الخبراء المتخصصين في مجال المعارض والتجارة الدولية
              </p>
            </div>

            {/* Solutions */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-6 shadow-2xl group-hover:animate-bounce mx-auto">
                <Star size={32} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                حلول مخصصة
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                نقدم حلولاً مخصصة تناسب احتياجات كل عميل مع مرونة كاملة
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
