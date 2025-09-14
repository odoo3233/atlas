"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
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
  Phone,
  Award,
  Globe
} from "lucide-react";

interface Exhibition {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  image_url?: string;
  organizer: string;
  created_at: string;
  updated_at: string;
}

export default function ExhibitionsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch exhibitions from backend API
  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://atlas-ha7k.onrender.com/api/exhibitions", { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch exhibitions");
        const data = await response.json();
        setExhibitions(data);
      } catch (err) {
        console.error("Error fetching exhibitions:", err);
        setError("Failed to load exhibitions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitions();
  }, []);

  // Filter exhibitions based on selected filter
  const filteredExhibitions = exhibitions.filter((exhibition) => {
    const endDate = new Date(exhibition.end_date);
    const today = new Date();
    const isUpcoming = endDate >= today;

    if (filter === "all") return true;
    if (filter === "upcoming") return isUpcoming;
    if (filter === "past") return !isUpcoming;
    return true;
  });

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-atlas-secondary-500 mx-auto"></div>
          <p className="text-atlas-primary-600 mt-4">{t('loading', { ns: 'common' }) || 'جاري التحميل...'}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-2xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            خطأ في تحميل المعارض
          </h2>
          <p className="text-red-700 mb-6">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700"
          >
            إعادة المحاولة
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Ultra Modern Exhibitions Hero */}
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
                <Calendar className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={24} />
                <span>معارض وفعاليات</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  المعارض والفعاليات
                </span>
                <br />
                <span className="text-white">التجارية الدولية</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-medium">
                اكتشف أهم المعارض والفعاليات التجارية الدولية التي تجمع بين الشركات السعودية والصينية
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                >
                  <Calendar className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                  <span>عرض الفعاليات</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <Users className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                  <span>سجل الآن</span>
                </Button>
              </div>
            </div>

            {/* Interactive Stats Dashboard */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">50+</div>
                <div className="text-white/80 font-medium">معرض سنوي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">شركة مشاركة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">10K+</div>
                <div className="text-white/80 font-medium">زائر سنوي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
                <div className="text-white/80 font-medium">معدل رضا</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Modern Filter Tabs */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                تصفح الفعاليات
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              اختر نوع الفعاليات التي تريد استكشافها
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button
              onClick={() => setFilter("all")}
              className={`group min-w-[160px] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                filter === "all" 
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:scale-105" 
                  : "bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105"
              }`}
            >
              <Globe className={`mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce ${filter === "all" ? "text-white" : "text-gray-600"}`} size={20} />
              <span>جميع الفعاليات</span>
            </Button>
            <Button
              onClick={() => setFilter("upcoming")}
              className={`group min-w-[160px] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                filter === "upcoming" 
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-2xl hover:shadow-3xl hover:scale-105" 
                  : "bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105"
              }`}
            >
              <Rocket className={`mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce ${filter === "upcoming" ? "text-white" : "text-gray-600"}`} size={20} />
              <span>الفعاليات القادمة</span>
            </Button>
            <Button
              onClick={() => setFilter("past")}
              className={`group min-w-[160px] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                filter === "past" 
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xl hover:shadow-3xl hover:scale-105" 
                  : "bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105"
              }`}
            >
              <Award className={`mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce ${filter === "past" ? "text-white" : "text-gray-600"}`} size={20} />
              <span>الفعاليات السابقة</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Revolutionary Exhibitions List */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {filteredExhibitions.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-gray-200/50 max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">لا توجد فعاليات متاحة حالياً</h3>
                <p className="text-gray-600 font-medium">
                  سنقوم بإضافة فعاليات جديدة قريباً
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredExhibitions.map((exhibition, index) => {
                const endDate = new Date(exhibition.end_date);
                const today = new Date();
                const isUpcoming = endDate >= today;

                return (
                  <div
                    key={exhibition.id}
                    className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-gray-200/50 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                      index % 3 === 1 ? 'from-emerald-500 to-teal-600' :
                      'from-amber-500 to-orange-600'
                    } opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

                    <div className="relative h-64 w-full bg-gray-200 overflow-hidden rounded-t-3xl">
                      {/* Exhibition Image */}
                      {exhibition.image_url ? (
                        <Image
                          src={exhibition.image_url}
                          alt={exhibition.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="text-center">
                            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <span className="text-gray-500 font-medium">صورة المعرض</span>
                          </div>
                        </div>
                      )}

                      {/* Status badge */}
                      <div className={`absolute top-6 right-6 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg ${
                        isUpcoming ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r from-gray-500 to-gray-600'
                      }`}>
                        {isUpcoming ? t("exhibitions.list.upcoming") : t("exhibitions.list.ended")}
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                        {exhibition.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                        {exhibition.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center text-gray-700">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">التاريخ</div>
                            <div className="text-sm text-gray-600">
                              {new Date(exhibition.start_date).toLocaleDateString(
                                "ar-SA",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                              {" - "}
                              {new Date(exhibition.end_date).toLocaleDateString(
                                "ar-SA",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mr-4 shadow-lg">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">الموقع</div>
                            <div className="text-sm text-gray-600">{exhibition.location}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-700">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mr-4 shadow-lg">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">المنظم</div>
                            <div className="text-sm text-gray-600">{exhibition.organizer}</div>
                          </div>
                        </div>
                      </div>

                      <Link href={`/exhibitions/${exhibition.id}`}>
                        <Button className={`w-full bg-gradient-to-r ${
                          index % 3 === 0 ? 'from-blue-500 to-purple-600' :
                          index % 3 === 1 ? 'from-emerald-500 to-teal-600' :
                          'from-amber-500 to-orange-600'
                        } text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group/btn`}>
                          <span className="flex items-center justify-center">
                            <TrendingUp className="mr-3 rtl:mr-0 rtl:ml-3 group-hover/btn:animate-bounce" size={20} />
                            <span>{isUpcoming ? t("exhibitions.list.registerNow") : t("exhibitions.list.viewDetails")}</span>
                            <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover/btn:translate-x-1 transition-transform" size={20} />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
              <span>مهتم بالمشاركة؟</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
              مهتم بالمشاركة في المعارض؟
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              إذا كنت مهتماً بالمشاركة في أحد معارضنا القادمة، يرجى التواصل مع فريق المعارض للحصول على مزيد من المعلومات وتفاصيل الحجز
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="group bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105" 
                >
                  <Phone className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                  <span>تواصل معنا</span>
                </Button>
              </Link>
              
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <Mail className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-pulse" size={24} />
                  <span>اعرف المزيد</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
