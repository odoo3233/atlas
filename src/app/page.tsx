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
  TrendingUp
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                <ShoppingBag className="mr-2" size={16} />
                منصة متكاملة للمعارض والتجارة الدولية
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                أطلس الشرق
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-blue-200 mt-2">
                  Atlas Al-Sharq
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                نربط الشركات والمستثمرين من خلال المعارض والفعاليات التجارية الدولية، 
                نقدم حلول متكاملة للتجارة والاستثمار بين الصين والمملكة العربية السعودية
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-900 hover:bg-blue-50">
                  <Calendar className="mr-2" size={20} />
                  استكشف المعارض
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-900">
                  <Phone className="mr-2" size={20} />
                  تواصل معنا
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-white/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <ShoppingBag className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">من نحن</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              شركة رائدة في مجال المعارض والتجارة الدولية، نربط الشركات بالأسواق العالمية 
              من خلال خدمات متكاملة ومتخصصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التجارة الدولية</h3>
              <p className="text-gray-600">
                نسهل عملية التبادل التجاري بين الشركات العالمية من خلال منصات متخصصة
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">المعارض والفعاليات</h3>
              <p className="text-gray-600">
                ننظم معارض وفعاليات تجارية دولية لتوفير فرص اللقاء والتعاون
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الاستشارات</h3>
              <p className="text-gray-600">
                نقدم استشارات متخصصة في مجال التجارة الدولية والاستثمار
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدماتنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية احتياجات عملائنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">إدارة المعارض</h3>
              <p className="text-gray-600 text-sm">
                تنظيم وإدارة المعارض التجارية الدولية
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ربط الشركات</h3>
              <p className="text-gray-600 text-sm">
                ربط الشركات بالمستثمرين والشركاء المحتملين
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">تطوير الأعمال</h3>
              <p className="text-gray-600 text-sm">
                استراتيجيات تطوير الأعمال والتوسع الدولي
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">الاستشارات</h3>
              <p className="text-gray-600 text-sm">
                استشارات متخصصة في التجارة الدولية
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">معرض منظم</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">شركة شريكة</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">دولة مشاركة</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              جاهز لبدء رحلتك التجارية؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              انضم إلينا اليوم واستفد من خبرتنا في مجال المعارض والتجارة الدولية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Calendar className="mr-2" size={20} />
                استكشف المعارض القادمة
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Phone className="mr-2" size={20} />
                تواصل معنا الآن
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
