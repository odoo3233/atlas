"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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
  ArrowRight
} from "lucide-react"

export default function AboutPage() {
  const { t: tHome } = useTranslation('home')
  const { t: tContact } = useTranslation('contact')

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-eerie-black/60 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-ghost-white/20 text-ghost-white rounded-full text-sm font-medium mb-6">
              <Building2 className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
              {tHome('about.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {tHome('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {tHome('about.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-ghost-white text-eerie-black hover:bg-platinum transition-all duration-300">
                <Phone className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {tContact('hero.callNow')}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                <ArrowRight className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {tHome('about.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-palette-celestial-blue to-blue-600 text-white mr-4 shadow-lg rtl:mr-0 rtl:ml-4">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 rtl:mr-4">{tHome('about.vision.title')}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {tHome('about.vision.description')}
              </p>
              <div className="flex items-center text-palette-celestial-blue font-semibold">
                <span className="mr-2 rtl:mr-0 rtl:ml-2">→</span>
                {tHome('about.vision.learnMore')}
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mr-4 shadow-lg rtl:mr-0 rtl:ml-4">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 rtl:mr-4">{tHome('about.mission.title')}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {tHome('about.mission.description')}
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <span className="mr-2 rtl:mr-0 rtl:ml-2">→</span>
                {tHome('about.mission.learnMore')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-palette-celestial-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-palette-celestial-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white mr-4 shadow-lg rtl:mr-0 rtl:ml-4">
                <Building2 size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 rtl:mr-4">{tHome('about.company.title')}</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {tHome('about.company.description')}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-gradient-to-br from-palette-celestial-blue/10 to-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-palette-celestial-blue mb-1">15+</div>
                    <div className="text-sm text-gray-600">{tHome('about.stats.years')}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">{tHome('about.stats.events')}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <CheckCircle size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{tHome('about.company.features.experience')}</h4>
                    <p className="text-gray-600 text-sm">{tHome('about.company.features.experienceDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-palette-celestial-blue/10 rounded-xl border border-blue-100">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-palette-celestial-blue text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <Globe size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{tHome('about.company.features.network')}</h4>
                    <p className="text-gray-600 text-sm">{tHome('about.company.features.networkDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <Star size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{tHome('about.company.features.quality')}</h4>
                    <p className="text-gray-600 text-sm">{tHome('about.company.features.qualityDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <Shield size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{tHome('about.company.features.support')}</h4>
                    <p className="text-gray-600 text-sm">{tHome('about.company.features.supportDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {tHome('whyAtlas.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tHome('whyAtlas.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-palette-celestial-blue/5 to-blue-50 rounded-2xl border border-palette-celestial-blue/20 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-palette-celestial-blue text-white mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{tHome('whyAtlas.experience.title')}</h3>
              <p className="text-gray-600">{tHome('whyAtlas.experience.description')}</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-500/5 to-emerald-50 rounded-2xl border border-green-500/20 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500 text-white mb-6 shadow-lg">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{tHome('whyAtlas.network.title')}</h3>
              <p className="text-gray-600">{tHome('whyAtlas.network.description')}</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-500/5 to-indigo-50 rounded-2xl border border-purple-500/20 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500 text-white mb-6 shadow-lg">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{tHome('whyAtlas.quality.title')}</h3>
              <p className="text-gray-600">{tHome('whyAtlas.quality.description')}</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-500/5 to-amber-50 rounded-2xl border border-orange-500/20 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500 text-white mb-6 shadow-lg">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{tHome('whyAtlas.events.title')}</h3>
              <p className="text-gray-600">{tHome('whyAtlas.events.description')}</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-500/5 to-red-50 rounded-2xl border border-red-500/20 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500 text-white mb-6 shadow-lg">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{tHome('whyAtlas.support.title')}</h3>
              <p className="text-gray-600">{tHome('whyAtlas.support.description')}</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-teal-500/5 to-teal-50 rounded-2xl border border-teal-500/20 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500 text-white mb-6 shadow-lg">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{tHome('whyAtlas.innovation.title')}</h3>
              <p className="text-gray-600">{tHome('whyAtlas.innovation.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-palette-celestial-blue to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {tHome('about.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {tHome('about.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-palette-celestial-blue hover:bg-gray-100 transition-all duration-300">
              <Phone className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
              {tContact('hero.callNow')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-palette-celestial-blue transition-all duration-300">
              <Mail className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
              {tContact('hero.emailUs')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
