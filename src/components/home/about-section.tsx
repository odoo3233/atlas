"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Calendar,
  Globe,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Building,
  Target,
  Heart,
} from "lucide-react";

export function AboutSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t("home.about.features.experience", "15+ سنة خبرة"),
      description: t(
        "home.about.features.experienceDesc",
        "خبرة عميقة في تنظيم الفعاليات التجارية الدولية",
      ),
    },
    {
      icon: Globe,
      title: t("home.about.features.network", "2000+ شريك صيني"),
      description: t(
        "home.about.features.networkDesc",
        "علاقات وثيقة مع الشركات الصينية والسعودية",
      ),
    },
    {
      icon: Award,
      title: t("home.about.features.success", "98% معدل رضا"),
      description: t(
        "home.about.features.successDesc",
        "معايير جودة عالمية في جميع خدماتنا",
      ),
    },
    {
      icon: Heart,
      title: t("home.about.features.support", "دعم متواصل"),
      description: t(
        "home.about.features.supportDesc",
        "دعم فني وإداري على مدار الساعة",
      ),
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full text-base font-semibold mb-6">
            <Building className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
            {t("home.about.title", "من نحن")}
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold heading-primary text-always-black mb-4">
            {t("home.about.subtitle", "شركة أطلس الشرق للمعارض والمؤتمرات")}
          </h2>

          {/* Description */}
          <p className="text-lg text-readable text-force-light-theme max-w-3xl mx-auto">
            {t(
              "home.about.description",
              "نفخر بخبرة 15+ عاماً في مجال المعارض والتجارة الدولية، نقدم حلول مبتكرة لربط الشركات السعودية بالأسواق الصينية والعالمية",
            )}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 shadow border border-border">
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-4 mx-auto"
              >
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 heading-secondary text-always-black">
                {feature.title}
              </h3>
              <p className="text-readable text-center text-force-light-theme">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-background rounded-2xl p-8 shadow border border-border mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold heading-primary text-always-black mb-1">15+</div>
              <div className="text-sm font-medium text-readable text-force-light-theme">
                {t("home.about.stats.years", "سنوات الخبرة")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold heading-primary text-always-black mb-1">500+</div>
              <div className="text-sm font-medium text-readable text-force-light-theme">
                {t("home.about.stats.events", "فعالية منظمة")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold heading-primary text-always-black mb-1">2000+</div>
              <div className="text-sm font-medium text-readable text-force-light-theme">
                {t("home.about.features.network", "شريك صيني")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold heading-primary text-always-black mb-1">98%</div>
              <div className="text-sm font-medium text-readable text-force-light-theme">
                {t("home.about.features.success", "معدل رضا")}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-background rounded-2xl p-10 shadow border border-border">
            <h3 className="text-3xl font-bold heading-primary text-always-black mb-4">
              {t("home.about.cta.title", "تواصل معنا اليوم")}
            </h3>
            <p className="text-lg text-readable text-force-light-theme mb-6 max-w-2xl mx-auto">
              {t(
                "home.about.cta.description",
                "نحن هنا لمساعدتك في تحقيق أهدافك التجارية. تواصل معنا الآن للحصول على استشارة مجانية",
              )}
            </p>
            <Button
              size="lg"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90"
              asChild
            >
              <Link href="/contact">
                <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                {t("home.about.cta.button", "احصل على استشارة مجانية")}
                <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
