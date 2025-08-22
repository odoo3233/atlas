"use client"

import React from "react"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ShoppingBag,
  ArrowUp,
  Globe,
  Award,
  Users,
  Building
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-primary bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  أطلس الشرق
                </h3>
                <p className="text-lg text-gray-300 font-medium">
                  Atlas Al-Sharq
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              شركة رائدة في مجال المعارض والتجارة الدولية، نربط الشركات بالأسواق العالمية من خلال خدمات متكاملة ومتخصصة
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href="#" className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="p-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl hover:from-pink-700 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white mb-6">
              روابط سريعة
            </h4>
            <div className="space-y-4">
              <Link href="/about" className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-colors duration-300 group">
                <Building className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">من نحن</span>
              </Link>
              <Link href="/services" className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-colors duration-300 group">
                <Award className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">خدماتنا</span>
              </Link>
              <Link href="/exhibitions" className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-colors duration-300 group">
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">المعارض</span>
              </Link>
              <Link href="/products" className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-colors duration-300 group">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">متجر أطلس الشرق</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white mb-6">
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-blue-500/30">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-lg font-medium">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 flex items-center justify-center border border-green-500/30">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-lg font-medium">+966 11 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-purple-500/30">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-lg font-medium">info@atlas-alsharq.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 flex items-center justify-center border border-amber-500/30">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-lg font-medium">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white mb-6">
              النشرة الإخبارية
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              احصل على آخر الأخبار والعروض
            </p>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300"
                />
              </div>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-300 text-lg">
              جميع الحقوق محفوظة © 2025 أطلس الشرق
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
              <span className="font-semibold">العودة للأعلى</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
