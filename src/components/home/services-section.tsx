"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  Network,
  ArrowRight,
  Award,
  Globe,
  Building,
  Target,
  Zap,
  Star,
} from "lucide-react";

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Calendar,
      title: t("home.services.exhibitions", "تنظيم المعارض والفعاليات"),
      description: t(
        "home.services.exhibitionsDesc",
        "تنظيم معارض وفعاليات احترافية لعرض المنتجات والخدمات مع أحدث التقنيات والتصاميم",
      ),
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      features: [
        "تصميم أجنحة احترافية",
        "إدارة شاملة للفعاليات",
        "خدمات لوجستية متكاملة",
        "دعم تسويقي متقدم",
      ],
    },
    {
      icon: Users,
      title: t("home.services.business", "ربط رجال الأعمال"),
      description: t(
        "home.services.businessDesc",
        "ربط رجال الأعمال بين الصين والمملكة العربية السعودية للنمو المشترك وبناء شراكات استراتيجية",
      ),
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      features: [
        "لقاءات B2B مخصصة",
        "شبكة علاقات واسعة",
        "فرص استثمارية حصرية",
        "دعم قانوني واستشاري",
      ],
    },
    {
      icon: Network,
      title: t("home.services.trips", "تنظيم رحلات الأعمال"),
      description: t(
        "home.services.tripsDesc",
        "ترتيب رحلات أعمال للشركات للقاء شركاء محتملين واستكشاف فرص الاستثمار الجديدة",
      ),
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      features: [
        "برامج سفر مخصصة",
        "ترجمة فورية",
        "خدمات VIP شاملة",
        "متابعة ما بعد الرحلة",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full text-base font-semibold mb-6">
            <Award className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t("home.services.title", "خدماتنا المتخصصة")}
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("home.services.title", "خدماتنا المتخصصة")}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t(
              "home.services.subtitle",
              "نقدم مجموعة شاملة من الخدمات المتخصصة لربط الأعمال بين الصين والمملكة العربية السعودية",
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow border border-gray-100">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 text-white mb-6 mx-auto">
                <service.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 rounded-full bg-gray-900" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button size="lg" className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-black" asChild>
                <Link href="/services">
                  <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
                  {t("common.learnMore", "اعرف المزيد")}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={20} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-10 text-gray-900 border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t("home.services.cta.title", "مستعد لبدء رحلة النجاح؟")}
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              {t(
                "home.services.cta.description",
                "اكتشف كيف يمكن لخدماتنا المتخصصة أن تساعدك في تحقيق أهدافك التجارية",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-black" asChild>
                <Link href="/services">
                  <Globe className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t("home.services.cta.explore", "استكشف جميع الخدمات")}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Zap className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t("home.services.cta.contact", "تواصل معنا الآن")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
