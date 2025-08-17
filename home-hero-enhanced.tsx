"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  Award, 
  Target, 
  MessageSquare, 
  Building2, 
  Users, 
  Handshake,
  Star,
  Globe,
  Clock,
  Shield,
  Zap,
  Trophy
} from "lucide-react"

export function HomeHero() {
  const { t } = useTranslation()
  const [counters, setCounters] = useState({
    events: 0,
    partners: 0,
    countries: 0
  })

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targetCounters = { events: 500, partners: 1000, countries: 50 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          events: Math.floor(targetCounters.events * progress),
          partners: Math.floor(targetCounters.partners * progress),
          countries: Math.floor(targetCounters.countries * progress)
        })

        if (currentStep >= steps) {
          clearInterval(interval)
          setCounters(targetCounters)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-eerie-black via-primary to-eerie-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-ghost-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-ghost-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Main Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left Panel - Dark Stats */}
            <div className="bg-eerie-black/80 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/10">
              <h1 className="text-3xl lg:text-4xl font-bold mb-8">
                شريكك الاستراتيجي في نجاح أعمالك
              </h1>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-primary">+{counters.events}</div>
                  <div className="text-lg">فعالية منظمة</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-primary">+{counters.partners}</div>
                  <div className="text-lg">شريك تجاري</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-primary">+{counters.countries}</div>
                  <div className="text-lg">دولة مشاركة</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <Award className="h-5 w-5 text-green-400" />
                <span>ISO 9001</span>
                <span>•</span>
                <span>10 سنوات خبرة</span>
              </div>
            </div>

            {/* Right Panel - Blue Content */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white border border-white/20">
              <div className="bg-eerie-black/20 rounded-lg px-4 py-2 mb-6 inline-block">
                <span className="text-sm">شريكك الاستراتيجي في نجاح أعمالك</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                أطلس الشرق للمعارض والمؤتمرات
              </h2>
              
              <p className="text-xl mb-6">
                نربط الأعمال بين الصين والمملكة العربية السعودية
              </p>
              
              <p className="text-lg mb-8">
                نفتح لك أبواب الفرص التجارية بين أكبر اقتصادين في آسيا والشرق الأوسط
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/services">
                    استكشف خدماتنا
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/register">
                    سجل الآن
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-eerie-black to-primary bg-clip-text text-transparent">
              من نحن
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نربط الأعمال بين الصين والمملكة العربية السعودية من خلال خدمات متكاملة
            </p>
          </div>
          
          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white mr-4 shadow-lg">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">رؤيتنا</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                أن نكون الشريك الاستراتيجي الأول في ربط الأعمال بين الصين والمملكة العربية السعودية
              </p>
              <div className="flex items-center text-primary font-semibold">
                <span className="mr-2">→</span>
                <Link href="/about#vision">اعرف المزيد</Link>
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mr-4 shadow-lg">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">رسالتنا</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                تسهيل التواصل التجاري وبناء شراكات استراتيجية مستدامة بين البلدين
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <span className="mr-2">→</span>
                <Link href="/about#mission">اعرف المزيد</Link>
              </div>
            </div>

            {/* Company */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white mr-4 shadow-lg">
                  <Building2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">عن الشركة</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                شركة رائدة في مجال المعارض والمؤتمرات مع خبرة 10+ سنوات في السوق
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                <span className="mr-2">→</span>
                <Link href="/about#company">اعرف المزيد</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              خدماتنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم خدمات متكاملة لربط الأعمال بين الصين والمملكة العربية السعودية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - International Exhibitions */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 mx-auto shadow-lg">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">المعارض الدولية</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                تنظيم وإدارة المعارض الدولية المتخصصة في مختلف القطاعات التجارية والصناعية
              </p>
            </div>
            
            {/* Service 2 - Strategic Business Networks */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-6 mx-auto shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">الشبكات التجارية الاستراتيجية</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                بناء وتطوير شبكات تجارية استراتيجية بين الشركات الصينية والسعودية
              </p>
            </div>
            
            {/* Service 3 - Strategic Partnership Development */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white mb-6 mx-auto shadow-lg">
                <Handshake size={32} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">تطوير الشراكات الاستراتيجية</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                تطوير وإدارة الشراكات الاستراتيجية طويلة المدى بين المؤسسات والشركات
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              الفعاليات القادمة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اكتشف أهم الفعاليات والفرص التجارية القادمة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Business Visit Card */}
            <div className="bg-gradient-to-br from-green-600 to-blue-500 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  زيارة رجال الأعمال السعوديين للصين
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>نوفمبر ٢٠٢٥</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg font-semibold">
                  رحلة استكشافية لفرص الاستثمار العقاري
                </p>
                <p className="text-white/90">
                  رحلة تعريفية للتعرف على الشركات العقارية وبناء شراكات لهم محليا في السعودية.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">+15</div>
                  <div className="text-sm">شركة</div>
                </div>
                <div className="bg-blue-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">+12</div>
                  <div className="text-sm">شراكة متوقعة</div>
                </div>
                <div className="bg-blue-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">تشندو</div>
                  <div className="text-sm">مدينة</div>
                </div>
                <div className="bg-blue-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">+15</div>
                  <div className="text-sm">مقعد للرؤساء التنفيذيين</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-white/90 font-semibold transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/business-visits">
                    اعرف المزيد
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-red-500 hover:border-red-500 font-semibold transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/register">
                    المقاعد محدودة
                  </Link>
                </Button>
              </div>
            </div>

            {/* Falcon Exhibition Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  معرض الصقور والصيد السعودي الدولي 2025
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>٢ - ١١ أكتوبر ٢٠٢٥</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg font-semibold">
                  أكبر معرض للصقور والصيد في الشرق الأوسط
                </p>
                <p className="text-white/90">
                  معرض الصقور الدولي هو حدث سنوي يجمع هواة الصيد بالصقور من جميع أنحاء العالم. يعرض أفضل أنواع الصقور وأحدث المعدات والتقنيات المستخدمة في الصيد بالصقور.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">+50</div>
                  <div className="text-sm">شركة صينية</div>
                </div>
                <div className="bg-orange-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">+50K</div>
                  <div className="text-sm">زائر متوقع</div>
                </div>
                <div className="bg-orange-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">5</div>
                  <div className="text-sm">مدن صينية</div>
                </div>
                <div className="bg-orange-400/20 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">+50</div>
                  <div className="text-sm">شركة صينية</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-400 text-white hover:bg-orange-500 font-semibold transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/falcon-exhibition">
                    سجل الآن
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-blue-400 hover:border-blue-400 font-semibold transform hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/location">
                    <MapPin className="h-4 w-4 mr-2" />
                    مركز الرياض للمعارض
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              منتجاتنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اكتشف مجموعة متنوعة من المنتجات عالية الجودة
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Cards - Horizontal Layout */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">منتج {item}</h3>
                  <p className="text-gray-600 mb-4">وصف مختصر للمنتج مع التفاصيل الأساسية.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">$299.99</span>
                    <Link href={`/products/${item}`}>
                      <Button variant="outline" size="sm" className="transform hover:scale-105 transition-all">
                        تفاصيل المنتج
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="transform hover:scale-105 transition-all">
                عرض جميع المنتجات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Atlas Al-Sharq Section */}
      <section className="py-20 bg-gradient-to-br from-eerie-black via-primary to-eerie-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-ghost-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ghost-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              لماذا أطلس الشرق؟
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4">
              نتميز بخبرة واسعة وشبكة علاقات قوية في مجال المعارض والمؤتمرات
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              نربط الأعمال بين أكبر اقتصادين في آسيا والشرق الأوسط
            </p>
          </div>
          
          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Expertise */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ghost-white/20 text-ghost-white mr-4">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">الخبرة</h3>
                  <p className="text-ghost-white/80 text-sm">10+ سنوات خبرة</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                خبرة واسعة في مجال المعارض والمؤتمرات مع أكثر من 500 فعالية منظمة
              </p>
            </div>
            
            {/* Network */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ghost-white/20 text-ghost-white mr-4">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">الشبكة</h3>
                  <p className="text-ghost-white/80 text-sm">+1000 شريك تجاري</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                شبكة علاقات قوية مع أكثر من 1000 شريك تجاري في 50 دولة
              </p>
            </div>
            
            {/* Success */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ghost-white/20 text-ghost-white mr-4">
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">النجاح</h3>
                  <p className="text-ghost-white/80 text-sm">+500 فعالية ناجحة</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                سجل حافل بالنجاحات مع أكثر من 500 فعالية منظمة بنجاح
              </p>
            </div>
            
            {/* Innovation */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ghost-white/20 text-ghost-white mr-4">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">الابتكار</h3>
                  <p className="text-ghost-white/80 text-sm">تقنيات حديثة</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                استخدام أحدث التقنيات والطرق الحديثة في تنظيم الفعاليات
              </p>
            </div>
            
            {/* Support */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ghost-white/20 text-ghost-white mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">الدعم</h3>
                  <p className="text-ghost-white/80 text-sm">دعم 24/7</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                دعم متواصل على مدار الساعة لجميع عملائنا وشركائنا
              </p>
            </div>
            
            {/* Quality */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ghost-white/20 text-ghost-white mr-4">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">الجودة</h3>
                  <p className="text-ghost-white/80 text-sm">ISO 9001</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                معايير جودة عالية مع شهادة ISO 9001 في إدارة الجودة
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ابدأ رحلتك معنا اليوم
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              انضم إلى شبكة شركائنا واستفد من خبرتنا الواسعة في مجال المعارض والمؤتمرات
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-ghost-white text-eerie-black hover:bg-platinum transition-all duration-300 transform hover:scale-105 font-semibold"
              asChild
            >
              <Link href="/contact">
                تواصل معنا الآن
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
