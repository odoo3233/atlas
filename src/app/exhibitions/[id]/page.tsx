"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  CheckCircle,
  Building2,
  Phone,
  Mail,
  ArrowLeft,
  Clock,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock exhibition data
const exhibitions = {
  "1": {
    id: "1",
    title: {
      ar: "معرض الطاقة المتجددة الدولي",
      en: "International Green Energy Expo",
      zh: "国际绿色能源博览会",
    },
    description: {
      ar: "أكبر معرض للطاقة المتجددة في الشرق الأوسط، يجمع خبراء الطاقة النظيفة من جميع أنحاء العالم",
      en: "The largest renewable energy exhibition in the Middle East, bringing together clean energy experts from around the world",
      zh: "中东地区最大的可再生能源展览会，汇聚来自世界各地的清洁能源专家",
    },
    date: "2024-03-15",
    endDate: "2024-03-18",
    location: {
      ar: "مركز الرياض الدولي للمؤتمرات والمعارض",
      en: "Riyadh International Convention & Exhibition Center",
      zh: "利雅得国际会议展览中心",
    },
    image: "/exhibitions/green-energy.jpg",
    participants: 250,
    visitors: 15000,
    countries: 25,
    features: [
      {
        ar: "أحدث تقنيات الطاقة الشمسية",
        en: "Latest solar energy technologies",
        zh: "最新太阳能技术",
      },
      {
        ar: "حلول طاقة الرياح المتقدمة",
        en: "Advanced wind energy solutions",
        zh: "先进风能解决方案",
      },
      {
        ar: "تقنيات تخزين الطاقة",
        en: "Energy storage technologies",
        zh: "储能技术",
      },
      {
        ar: "شبكات الطاقة الذكية",
        en: "Smart energy grids",
        zh: "智能电网",
      },
    ],
    schedule: [
      {
        time: "09:00 - 10:00",
        title: {
          ar: "حفل الافتتاح",
          en: "Opening Ceremony",
          zh: "开幕式",
        },
      },
      {
        time: "10:00 - 12:00",
        title: {
          ar: "جولة في المعرض",
          en: "Exhibition Tour",
          zh: "展览参观",
        },
      },
      {
        time: "14:00 - 16:00",
        title: {
          ar: "ورش العمل التقنية",
          en: "Technical Workshops",
          zh: "技术研讨会",
        },
      },
      {
        time: "16:00 - 18:00",
        title: {
          ar: "لقاءات الأعمال",
          en: "Business Meetings",
          zh: "商务会议",
        },
      },
    ],
  },
  "2": {
    id: "2",
    title: {
      ar: "معرض التكنولوجيا والابتكار",
      en: "Technology & Innovation Expo",
      zh: "科技创新博览会",
    },
    description: {
      ar: "معرض يضم أحدث الابتكارات التقنية والحلول الذكية للمستقبل",
      en: "Exhibition featuring the latest technological innovations and smart solutions for the future",
      zh: "展示最新技术创新和未来智能解决方案的展览",
    },
    date: "2024-04-10",
    endDate: "2024-04-13",
    location: {
      ar: "مركز جدة للمعارض",
      en: "Jeddah Exhibition Center",
      zh: "吉达展览中心",
    },
    image: "/exhibitions/tech-expo.jpg",
    participants: 300,
    visitors: 20000,
    countries: 30,
    features: [
      {
        ar: "الذكاء الاصطناعي والتعلم الآلي",
        en: "AI and Machine Learning",
        zh: "人工智能和机器学习",
      },
      {
        ar: "إنترنت الأشياء",
        en: "Internet of Things (IoT)",
        zh: "物联网",
      },
      {
        ar: "تقنيات البلوك تشين",
        en: "Blockchain Technologies",
        zh: "区块链技术",
      },
      {
        ar: "الواقع المعزز والافتراضي",
        en: "AR/VR Technologies",
        zh: "AR/VR技术",
      },
    ],
    schedule: [
      {
        time: "09:00 - 10:30",
        title: {
          ar: "كلمة ترحيبية",
          en: "Welcome Address",
          zh: "欢迎致辞",
        },
      },
      {
        time: "10:30 - 12:30",
        title: {
          ar: "عروض الابتكار",
          en: "Innovation Presentations",
          zh: "创新展示",
        },
      },
      {
        time: "14:00 - 15:30",
        title: {
          ar: "ندوات تقنية",
          en: "Technical Seminars",
          zh: "技术研讨会",
        },
      },
      {
        time: "15:30 - 17:00",
        title: {
          ar: "شبكة أعمال",
          en: "Networking Session",
          zh: "网络会议",
        },
      },
    ],
  },
};

export default function ExhibitionDetail() {
  const params = useParams();
  const { t, i18n } = useTranslation("exhibitions");
  const exhibitionId = params?.id as string;
  const exhibition = exhibitions[exhibitionId as keyof typeof exhibitions];

  if (!exhibition) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-atlas-brown-50">
        <div className="text-center max-w-md mx-auto">
          <div className="card-modern p-8">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-red-900 mb-4">
              {t("exhibitionNotFound", "Exhibition Not Found")}
            </h1>
            <p className="text-red-700 mb-6">
              {t("exhibitionNotAvailable", "Sorry, the exhibition you are looking for is not available")}
            </p>
            <Link href="/exhibitions">
              <Button className="bg-red-600 hover:bg-red-700">
                {t("backToExhibitions", "Back to Exhibitions")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentLang = i18n.language as keyof typeof exhibition.title;

  return (
    <>
      <main className="py-12 bg-atlas-brown-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/exhibitions"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-atlas-gold-600 hover:text-atlas-gold-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{t("backToExhibitions", "Back to Exhibitions")}</span>
            </Link>
          </div>

          {/* Exhibition Header */}
          <div className="card-modern overflow-hidden mb-8">
            <div className="relative h-64 md:h-96">
              <Image
                src={exhibition.image}
                alt={exhibition.title[currentLang]}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-atlas-dark/50 flex items-end">
                <div className="p-6 text-white w-full">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {exhibition.title[currentLang]}
                  </h1>
                  <p className="text-xl text-atlas-gold-200">
                    {exhibition.description[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exhibition Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Date & Location */}
              <div className="card-modern p-6">
                <h2 className="text-2xl font-bold text-atlas-dark mb-6">
                  {t("eventDetails", "Event Details")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <Calendar className="h-6 w-6 text-atlas-gold-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-atlas-dark">
                        {t("date", "Date")}
                      </h3>
                      <p className="text-atlas-brown-600">
                        {new Date(exhibition.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : i18n.language === 'zh' ? 'zh-CN' : 'en-US')} - {new Date(exhibition.endDate).toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : i18n.language === 'zh' ? 'zh-CN' : 'en-US')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <MapPin className="h-6 w-6 text-atlas-gold-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-atlas-dark">
                        {t("location", "Location")}
                      </h3>
                      <p className="text-atlas-brown-600">
                        {exhibition.location[currentLang]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="card-modern p-6">
                <h2 className="text-2xl font-bold text-atlas-dark mb-6">
                  {t("highlights", "Exhibition Highlights")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exhibition.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-atlas-brown-700">{feature[currentLang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="card-modern p-6">
                <h2 className="text-2xl font-bold text-atlas-dark mb-6">
                  {t("schedule", "Daily Schedule")}
                </h2>
                <div className="space-y-4">
                  {exhibition.schedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-atlas-brown-50 rounded-lg">
                      <Clock className="h-5 w-5 text-atlas-gold-500" />
                      <div className="flex-1">
                        <div className="font-semibold text-atlas-dark">{item.time}</div>
                        <div className="text-atlas-brown-600">{item.title[currentLang]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-atlas-dark mb-4">
                  {t("statistics", "Exhibition Statistics")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Building2 className="h-5 w-5 text-atlas-gold-500" />
                      <span className="text-atlas-brown-600">{t("exhibitors", "Exhibitors")}</span>
                    </div>
                    <span className="font-bold text-atlas-dark">{exhibition.participants}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Users className="h-5 w-5 text-atlas-gold-500" />
                      <span className="text-atlas-brown-600">{t("expectedVisitors", "Expected Visitors")}</span>
                    </div>
                    <span className="font-bold text-atlas-dark">{exhibition.visitors.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Globe className="h-5 w-5 text-atlas-gold-500" />
                      <span className="text-atlas-brown-600">{t("countries", "Countries")}</span>
                    </div>
                    <span className="font-bold text-atlas-dark">{exhibition.countries}</span>
                  </div>
                </div>
              </div>

              {/* Registration CTA */}
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-atlas-dark mb-4">
                  {t("registerNow", "Register Now")}
                </h3>
                <p className="text-atlas-brown-600 mb-6">
                  {t("registerDescription", "Don't miss this opportunity to be part of this amazing event.")}
                </p>
                <div className="space-y-3">
                  <Button className="w-full btn-primary-gradient">
                    <Award className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t("registerAsExhibitor", "Register as Exhibitor")}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t("registerAsVisitor", "Register as Visitor")}
                  </Button>
                </div>
              </div>

              {/* Contact */}
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-atlas-dark mb-4">
                  {t("contactInfo", "Contact Information")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Phone className="h-5 w-5 text-atlas-gold-500" />
                    <span className="text-atlas-brown-600">+966 50 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Mail className="h-5 w-5 text-atlas-gold-500" />
                    <span className="text-atlas-brown-600">contact@atlasecon.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
