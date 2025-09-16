"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
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
  Award,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
          });
        }, 5000);
      } else {
        alert(result.error || 'حدث خطأ في إرسال الرسالة');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-atlas-dark/60 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              <MessageSquare className="mr-2" size={16} />
              {t("contact.hero.badge", "نحن في خدمتك دائماً")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("contact.hero.title", "تواصل مع خبراء أطلس الشرق")}
            </h1>
            <p className="text-xl md:text-2xl text-atlas-gold-100/90 leading-relaxed mb-8">
              {t("contact.hero.subtitle", "شريكك الموثوق في رحلة النجاح")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 btn-primary-gradient"
              >
                <Phone className="mr-2" size={20} />
                {t("contact.hero.callNow", "تحدث مع خبير الآن")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-atlas-dark transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                {t("contact.hero.emailUs", "أرسل استفسارك")}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-dark">
                  معلومات التواصل
                </h2>
                <p className="text-xl text-atlas-brown-600 leading-relaxed">
                  تواصل معنا عبر الطرق التالية
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="card-modern p-6">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-atlas-gold-500 text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                      <Phone size={24} />
                    </div>
                    <div className="rtl:mr-4 rtl:ml-0">
                      <h3 className="text-xl font-bold text-atlas-dark mb-2">
                        اتصل بنا
                      </h3>
                      <p className="text-atlas-brown-600 mb-2">
                        متاحون للرد على استفساراتك
                      </p>
                      <a
                        href="tel:+966556447487"
                        className="text-2xl font-bold text-atlas-gold-600 hover:text-atlas-gold-700 transition-colors"
                      >
                        +966556447487
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-atlas-gold-500 text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                      <Mail size={24} />
                    </div>
                    <div className="rtl:mr-4 rtl:ml-0">
                      <h3 className="text-xl font-bold text-atlas-dark mb-2">
                        راسلنا عبر البريد الإلكتروني
                      </h3>
                      <p className="text-atlas-brown-600 mb-2">
                        نرد على استفساراتك خلال 24 ساعة
                      </p>
                      <a
                        href="mailto:contact@atlasecon.com"
                        className="text-xl font-semibold text-atlas-gold-600 hover:text-atlas-gold-700 transition-colors"
                      >
                        contact@atlasecon.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-atlas-gold-500 text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                      <MapPin size={24} />
                    </div>
                    <div className="rtl:mr-4 rtl:ml-0">
                      <h3 className="text-xl font-bold text-atlas-dark mb-2">
                        موقعنا الرئيسي
                      </h3>
                      <p className="text-atlas-brown-600 mb-2">
                        زُرنا في مقرنا الرئيسي
                      </p>
                      <p className="text-lg text-atlas-dark">
                        3468 محمد بن عبدالعزيز العجاجي، المخطط 2460
                        <br />
                        القيروان، الرياض 13532
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-modern p-6">
                  <div className="flex items-start">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-atlas-gold-500 text-white mr-4 shadow-md rtl:mr-0 rtl:ml-4">
                      <Clock size={24} />
                    </div>
                    <div className="rtl:mr-4 rtl:ml-0">
                      <h3 className="text-xl font-bold text-atlas-dark mb-2">
                        ساعات العمل
                      </h3>
                      <p className="text-atlas-brown-600 mb-2">
                        متواجدون لخدمتك
                      </p>
                      <div className="space-y-1 text-atlas-dark">
                        <p>
                          <strong>الأحد - الخميس:</strong>{" "}
                          8:00 AM - 6:00 PM
                        </p>
                        <p>
                          <strong>السبت:</strong>{" "}
                          9:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center p-6 bg-atlas-gold-100/50 rounded-xl">
                  <div className="text-3xl font-bold text-atlas-gold-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-atlas-brown-600">
                    دعم على مدار الساعة
                  </div>
                </div>
                <div className="text-center p-6 bg-atlas-gold-100/50 rounded-xl">
                  <div className="text-3xl font-bold text-atlas-gold-600 mb-2">
                    2h
                  </div>
                  <div className="text-sm text-atlas-brown-600">
                    رد سريع
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-modern p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-atlas-dark mb-4">
                  أرسل رسالتك
                </h3>
                <p className="text-atlas-brown-600">املأ النموذج وسنتواصل معك في أقرب وقت</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-atlas-dark mb-2">
                    تم إرسال رسالتك بنجاح!
                  </h4>
                  <p className="text-atlas-brown-600">
                    شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك خلال 24 ساعة.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-atlas-primary-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-atlas-primary-200 rounded-xl focus:ring-2 focus:ring-atlas-secondary-500 focus:border-transparent transition-all duration-300"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-atlas-primary-700 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-atlas-primary-200 rounded-xl focus:ring-2 focus:ring-atlas-secondary-500 focus:border-transparent transition-all duration-300"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-atlas-primary-700 mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-atlas-primary-200 rounded-xl focus:ring-2 focus:ring-atlas-secondary-500 focus:border-transparent transition-all duration-300"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-atlas-primary-700 mb-2">
                        اسم الشركة
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-atlas-primary-200 rounded-xl focus:ring-2 focus:ring-atlas-secondary-500 focus:border-transparent transition-all duration-300"
                        placeholder="أدخل اسم شركتك (اختياري)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-atlas-primary-700 mb-2">
                      موضوع الرسالة *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-atlas-primary-200 rounded-xl focus:ring-2 focus:ring-atlas-secondary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">
                        أدخل موضوع رسالتك
                      </option>
                      <option value="exhibitions">
                        المعارض
                      </option>
                      <option value="business-visits">
                        رحلات الأعمال
                      </option>
                      <option value="partnership">
                        شراكة
                      </option>
                      <option value="general">
                        عام
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-atlas-primary-700 mb-2">
                      تفاصيل رسالتك *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-atlas-primary-200 rounded-xl focus:ring-2 focus:ring-atlas-secondary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="أدخل تفاصيل رسالتك"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-semibold btn-primary-gradient rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2" size={20} />
                        إرسال الرسالة
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
      <section className="py-20 bg-atlas-brown-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-dark">
              لماذا تختارنا؟
            </h2>
            <p className="text-xl text-atlas-brown-600 max-w-3xl mx-auto">
              نحن شريكك الموثوق في رحلة النجاح
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 text-white mb-6 shadow-lg">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                رد سريع
              </h3>
              <p className="text-atlas-brown-600">
                نرد على جميع استفساراتكم في أقرب وقت ممكن
              </p>
            </div>

            <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 text-white mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                فريق خبير
              </h3>
              <p className="text-atlas-brown-600">
                فريق من الخبراء المتخصصين جاهز لخدمتك
              </p>
            </div>

            <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 text-white mb-6 shadow-lg">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                جودة عالية
              </h3>
              <p className="text-atlas-brown-600">
                نلتزم بتقديم خدمات عالية الجودة تفوق توقعاتك
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
