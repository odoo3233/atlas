"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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
  Heart
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <ShoppingBag className="mr-2" size={16} />
              منصة متكاملة للمعارض والتجارة الدولية
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              أطلس الشرق للمعارض والمؤتمرات
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6">
              نربط الشركات بالأسواق العالمية من خلال خدمات متكاملة ومتخصصة
            </p>
            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-4xl mx-auto">
              نفخر بخبرة 15 عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700">
                <Globe className="mr-2" size={20} />
                اكتشف خدماتنا
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-900">
                <Zap className="mr-2" size={20} />
                ابدأ رحلة النجاح →
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">+15</div>
              <div className="text-orange-700 font-medium">سنة خبرة</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-green-700 font-medium">معدل رضا</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">+2000</div>
              <div className="text-purple-700 font-medium">شريك صيني</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">+500</div>
              <div className="text-blue-700 font-medium">فعالية منظمة</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Building className="mr-2" size={16} />
              من نحن
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              شركة أطلس الشرق للمعارض والمؤتمرات
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              نفخر بخبرة 15 عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">15+ سنة خبرة</h3>
              <p className="text-gray-600 text-sm">
                خبرة عميقة في تنظيم الفعاليات التجارية الدولية
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">2000+ شريك صيني</h3>
              <p className="text-gray-600 text-sm">
                علاقات وثيقة مع الشركات الصينية والسعودية
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">98% معدل رضا</h3>
              <p className="text-gray-600 text-sm">
                معايير جودة عالمية في جميع خدماتنا
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">دعم متواصل</h3>
              <p className="text-gray-600 text-sm">
                دعم فني وإداري على مدار الساعة
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Award className="mr-2" size={16} />
              خدماتنا المتخصصة
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              خدماتنا المتخصصة
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة لربط الأعمال بين الصين والمملكة العربية السعودية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">تنظيم رحلات الأعمال</h3>
              <p className="text-purple-800 mb-6">
                ترتيب رحلات أعمال للشركات للقاء شركاء محتملين واستكشاف فرص الاستثمار الجديدة
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-purple-800">
                  <Star className="w-4 h-4 mr-2 text-purple-600" />
                  برامج سفر مخصصة
                </li>
                <li className="flex items-center text-purple-800">
                  <Star className="w-4 h-4 mr-2 text-purple-600" />
                  ترجمة فورية
                </li>
                <li className="flex items-center text-purple-800">
                  <Star className="w-4 h-4 mr-2 text-purple-600" />
                  خدمات VIP شاملة
                </li>
                <li className="flex items-center text-purple-800">
                  <Star className="w-4 h-4 mr-2 text-purple-600" />
                  متابعة ما بعد الرحلة
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                اعرف المزيد ←
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">ربط رجال الأعمال</h3>
              <p className="text-green-800 mb-6">
                ربط رجال الأعمال بين الصين والمملكة العربية السعودية للنمو المشترك وبناء شراكات استراتيجية
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-green-800">
                  <Star className="w-4 h-4 mr-2 text-green-600" />
                  لقاءات B2B مخصصة
                </li>
                <li className="flex items-center text-green-800">
                  <Star className="w-4 h-4 mr-2 text-green-600" />
                  شبكة علاقات واسعة
                </li>
                <li className="flex items-center text-green-800">
                  <Star className="w-4 h-4 mr-2 text-green-600" />
                  فرص استثمارية حصرية
                </li>
                <li className="flex items-center text-green-800">
                  <Star className="w-4 h-4 mr-2 text-green-600" />
                  دعم قانوني واستشاري
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                اعرف المزيد ←
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">تنظيم المعارض والفعاليات</h3>
              <p className="text-blue-800 mb-6">
                تنظيم معارض وفعاليات احترافية لعرض المنتجات والخدمات مع أحدث التقنيات والتصاميم
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-blue-800">
                  <Star className="w-4 h-4 mr-2 text-blue-600" />
                  تصميم أجنحة احترافية
                </li>
                <li className="flex items-center text-blue-800">
                  <Star className="w-4 h-4 mr-2 text-blue-600" />
                  إدارة شاملة للفعاليات
                </li>
                <li className="flex items-center text-blue-800">
                  <Star className="w-4 h-4 mr-2 text-blue-600" />
                  خدمات لوجستية متكاملة
                </li>
                <li className="flex items-center text-blue-800">
                  <Star className="w-4 h-4 mr-2 text-blue-600" />
                  دعم تسويقي متقدم
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                اعرف المزيد ←
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مستعد لبدء رحلة النجاح؟
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700">
                <Zap className="mr-2" size={20} />
                تواصل معنا الآن
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-900">
                <Eye className="mr-2" size={20} />
                استكشف جميع الخدمات
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Calendar className="mr-2" size={16} />
              الفعاليات القادمة
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              الفعاليات القادمة
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              اكتشف أهم الفعاليات والمعارض القادمة
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                معرض الصقور والصيد السعودي الدولي 2025
              </h3>
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>٢ - ١١ أكتوبر ٢٠٢٥</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">
                أكبر معرض للصقور والصيد في الشرق الأوسط
              </h4>
              <p className="text-orange-100 mb-6">
                معرض سنوي لعشاق الصقور والصيد، يعرض أفضل الصقور وأحدث المعدات والتقنيات في مجال الصيد والصقور
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
                <Button className="bg-pink-600 hover:bg-pink-700">
                  <Zap className="mr-2" size={16} />
                  سجل الآن
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                  <Eye className="mr-2" size={16} />
                  اعرف المزيد
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-2xl text-white">
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
              <p className="text-blue-100 mb-6">
                رحلة تعريفية للتعرف على شركات العقارات وبناء شراكات محلية في المملكة العربية السعودية مع فرص استثمارية حصرية
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
                <Button className="bg-green-600 hover:bg-green-700">
                  <Zap className="mr-2" size={16} />
                  سجل الآن
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Eye className="mr-2" size={16} />
                  اعرف المزيد
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Atlas Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-6">
              <Star className="mr-2" size={16} />
              لماذا أطلس الشرق؟
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              نختار أطلس الشرق لنجاح أعمالك
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              نتميز بخبرة فريدة وخدمات متكاملة تجعلنا الخيار الأمثل لشركائك التجاريين
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">خبرة استثنائية</h3>
              <p className="text-blue-300 text-sm mb-2">15+ سنة خبرة</p>
              <p className="text-gray-300 text-sm">
                أكثر من 15 عاماً من الخبرة في مجال المعارض والمؤتمرات الدولية، مع فهم عميق الثقافة الأعمال في الصين والمملكة العربية السعودية
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">شبكة علاقات قوية</h3>
              <p className="text-purple-300 text-sm mb-2">2000+ شريك صيني</p>
              <p className="text-gray-300 text-sm">
                شبكة واسعة تضم أكثر من 2000 شريك تجاري في الصين و 500 شركة سعودية، مما يضمن لك الوصول لأفضل الفرص التجارية
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">سجل نجاح متميز</h3>
              <p className="text-green-300 text-sm mb-2">98% معدل رضا</p>
              <p className="text-gray-300 text-sm">
                تفخر بتنظيم أكثر من 500 فعالية ناجحة، مع معدل رضا يصل إلى 98% من عملائنا، مما يجعلنا الخيار الموثوق لنجاح أعمالك
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">ابتكار مستمر</h3>
              <p className="text-pink-300 text-sm mb-2">تقنيات حديثة</p>
              <p className="text-gray-300 text-sm">
                تواكب أحدث التقنيات والاتجاهات في مجال المعارض، وتقدم حلول مبتكرة تضمن تجربة فريدة ومميزة لجميع المشاركين
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">دعم شامل 24/7</h3>
              <p className="text-orange-300 text-sm mb-2">24/7 دعم</p>
              <p className="text-gray-300 text-sm">
                فريق دعم متخصص متاح على مدار الساعة لتقديم المساعدة والدعم الفني، مما يضمن نجاح فعالياتك من البداية حتى النهاية
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">جودة عالية مضمونة</h3>
              <p className="text-green-300 text-sm mb-2">ISO 9001</p>
              <p className="text-gray-300 text-sm">
                تلتزم بأعلى معايير الجودة العالمية، مع شهادات اعتماد دولية وضمان رضا تام لجميع خدماتنا
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
