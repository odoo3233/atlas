"use client"

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Building2, 
  Globe,
  CheckCircle,
  Star,
  Users,
  Award
} from "lucide-react"

export default function ContactPage() {
  const { t } = useTranslation('contact')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-eerie-black/60 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-ghost-white/20 text-ghost-white rounded-full text-sm font-medium mb-6">
              <MessageSquare className="mr-2" size={16} />
              {t('hero.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-ghost-white text-eerie-black hover:bg-platinum transition-all duration-300">
                <Phone className="mr-2" size={20} />
                {t('hero.callNow')}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                <Mail className="mr-2" size={20} />
                {t('hero.emailUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  {t('contact.info.title')}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('contact.info.description')}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                                 {/* Phone */}
                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
                   <div className="flex items-start">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500 text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                       <Phone size={24} />
                     </div>
                     <div className="rtl:mr-4 rtl:ml-0">
                       <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.info.phone.title')}</h3>
                       <p className="text-gray-600 mb-2">{t('contact.info.phone.subtitle')}</p>
                       <a href="tel:+966501234567" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
                         +966 50 123 4567
                       </a>
                     </div>
                   </div>
                 </div>

                 {/* Email */}
                 <div className="bg-gradient-to-r from-blue-50 to-palette-celestial-blue/10 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                   <div className="flex items-start">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-palette-celestial-blue text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                       <Mail size={24} />
                     </div>
                     <div className="rtl:mr-4 rtl:ml-0">
                       <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.info.email.title')}</h3>
                       <p className="text-gray-600 mb-2">{t('contact.info.email.subtitle')}</p>
                       <a href="mailto:info@atlasalsharq.com" className="text-xl font-semibold text-palette-celestial-blue hover:text-blue-700 transition-colors">
                         info@atlasalsharq.com
                       </a>
                     </div>
                   </div>
                 </div>

                 {/* Address */}
                 <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
                   <div className="flex items-start">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500 text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                       <MapPin size={24} />
                     </div>
                     <div className="rtl:mr-4 rtl:ml-0">
                       <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.info.address.title')}</h3>
                       <p className="text-gray-600 mb-2">{t('contact.info.address.subtitle')}</p>
                       <p className="text-lg text-gray-800">
                         {t('contact.info.address.street')}<br />
                         {t('contact.info.address.city')}
                       </p>
                     </div>
                   </div>
                 </div>

                 {/* Working Hours */}
                 <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
                   <div className="flex items-start">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500 text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                       <Clock size={24} />
                     </div>
                     <div className="rtl:mr-4 rtl:ml-0">
                       <h3 className="text-xl font-bold text-gray-800 mb-2">{t('contact.info.hours.title')}</h3>
                       <p className="text-gray-600 mb-2">{t('contact.info.hours.subtitle')}</p>
                       <div className="space-y-1 text-gray-800">
                         <p><strong>{t('contact.info.hours.weekdays')}:</strong> 8:00 AM - 6:00 PM</p>
                         <p><strong>{t('contact.info.hours.weekend')}:</strong> 9:00 AM - 4:00 PM</p>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center p-6 bg-gradient-to-br from-palette-celestial-blue/10 to-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-palette-celestial-blue mb-2">24/7</div>
                  <div className="text-sm text-gray-600">{t('contact.stats.support')}</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">2h</div>
                  <div className="text-sm text-gray-600">{t('contact.stats.response')}</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('contact.form.title')}</h3>
                <p className="text-gray-600">{t('contact.form.subtitle')}</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{t('contact.form.success.title')}</h4>
                  <p className="text-gray-600">{t('contact.form.success.message')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-palette-celestial-blue focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-palette-celestial-blue focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-palette-celestial-blue focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-palette-celestial-blue focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.companyPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-palette-celestial-blue focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t('contact.form.subjectPlaceholder')}</option>
                      <option value="exhibitions">{t('contact.form.subjects.exhibitions')}</option>
                      <option value="business-visits">{t('contact.form.subjects.businessVisits')}</option>
                      <option value="partnership">{t('contact.form.subjects.partnership')}</option>
                      <option value="general">{t('contact.form.subjects.general')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-palette-celestial-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-palette-celestial-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {t('contact.form.sending')}
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2" size={20} />
                        {t('contact.form.send')}
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Contact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {t('contact.whyChoose.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-6 shadow-lg">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.whyChoose.fast.title')}</h3>
              <p className="text-gray-600">{t('contact.whyChoose.fast.description')}</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-palette-celestial-blue to-blue-600 text-white mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.whyChoose.expert.title')}</h3>
              <p className="text-gray-600">{t('contact.whyChoose.expert.description')}</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white mb-6 shadow-lg">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contact.whyChoose.quality.title')}</h3>
              <p className="text-gray-600">{t('contact.whyChoose.quality.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
