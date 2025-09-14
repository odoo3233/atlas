"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  User,
  Building2,
  Award,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export function TestimonialsSection() {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: t("home.testimonials.testimonial1.name", "أحمد العبدالله"),
      position: t("home.testimonials.testimonial1.position", "المدير التنفيذي"),
      company: t("home.testimonials.testimonial1.company", "شركة الرياض للتجارة"),
      rating: 5,
      text: t("home.testimonials.testimonial1.text", "أطلس الشرق غيرت مسار أعمالنا بالكامل. من خلال معارضهم المتميزة، تمكنا من الوصول لأكثر من 500 شريك صيني جديد وزيادة مبيعاتنا بنسبة 300%."),
      image: "👨‍💼",
      results: t("home.testimonials.testimonial1.results", "300% زيادة في المبيعات")
    },
    {
      name: t("home.testimonials.testimonial2.name", "فاطمة الزهراني"), 
      position: t("home.testimonials.testimonial2.position", "مديرة التطوير"),
      company: t("home.testimonials.testimonial2.company", "مجموعة جدة الاستثمارية"),
      rating: 5,
      text: t("home.testimonials.testimonial2.text", "الخدمة الاستثنائية والاحترافية العالية جعلتنا نحقق شراكات استراتيجية مع أكبر الشركات الصينية. فريق أطلس الشرق محترف ومتفاني."),
      image: "👩‍💼",
      results: t("home.testimonials.testimonial2.results", "50+ شراكة جديدة")
    },
    {
      name: t("home.testimonials.testimonial3.name", "محمد الشهري"),
      position: t("home.testimonials.testimonial3.position", "رئيس مجلس الإدارة"), 
      company: t("home.testimonials.testimonial3.company", "شركة الشرق الأوسط للتكنولوجيا"),
      rating: 5,
      text: t("home.testimonials.testimonial3.text", "بفضل أطلس الشرق، تمكنا من دخول السوق الصيني بنجاح باهر. خبرتهم العميقة وشبكة علاقاتهم الواسعة كانت المفتاح لنجاحنا."),
      image: "👨‍💻",
      results: t("home.testimonials.testimonial3.results", "دخول ناجح للسوق الصيني")
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-200/50 rounded-2xl text-amber-700 font-bold text-lg mb-8 shadow-lg">
            <Award className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              شهادات عملائنا
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              قصص نجاح حقيقية
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            اكتشف كيف ساعدنا عملاءنا في تحقيق نجاحات استثنائية وبناء شراكات مربحة
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-200/50">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1 rtl:space-x-reverse mb-8">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed font-medium mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Results Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 rounded-2xl text-emerald-700 font-bold">
                <TrendingUp className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {testimonials[currentTestimonial].results}
              </div>
            </div>

            {/* Author Info */}
            <div className="text-center">
              <div className="text-6xl mb-4">{testimonials[currentTestimonial].image}</div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-lg text-gray-600 mb-1">
                {testimonials[currentTestimonial].position}
              </div>
              <div className="text-base text-gray-500 font-medium">
                {testimonials[currentTestimonial].company}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              <div className="flex space-x-2 rtl:space-x-reverse">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
