"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Award,
  Globe,
  Users,
  TrendingUp,
  Star,
  Zap,
  Target,
  Building,
  Clock,
} from "lucide-react";

export function EventsSection() {
  const { t } = useTranslation();

  const events = [
    {
      title: t(
        "exhibitions.falconExhibition.title",
        "معرض الصقور والصيد السعودي الدولي 2025",
      ),
      subtitle: t(
        "exhibitions.falconExhibition.subtitle",
        "أكبر معرض للصقور والصيد في الشرق الأوسط",
      ),
      description: t(
        "exhibitions.falconExhibition.description",
        "معرض الصقور الدولي هو حدث سنوي يجمع هواة الصيد بالصقور من جميع أنحاء العالم. يعرض أفضل أنواع الصقور وأحدث المعدات والتقنيات المستخدمة في الصيد بالصقور، مع تنظيم مسابقات ومزادات للصقور النادرة.",
      ),
      date: t("exhibitions.falconExhibition.date", "٢ - ١١ أكتوبر ٢٠٢٥"),
      location: "الرياض - مركز المعارض الدولي",
      stats: [
        {
          value: "+100",
          label: t(
            "exhibitions.falconExhibition.features.exhibitors",
            "عارض",
          ),
        },
        {
          value: "+50K",
          label: t(
            "exhibitions.falconExhibition.features.visitors",
            "زائر متوقع",
          ),
        },
        {
          value: "+30",
          label: t("exhibitions.falconExhibition.features.countries", "دولة"),
        },
        {
          value: "10",
          label: t(
            "exhibitions.falconExhibition.features.days",
            "أيام",
          ),
        },
      ],
      gradient: "from-orange-500 via-red-500 to-pink-600",
      learnMoreHref: "/exhibitions",
      registerHref: "/contact",
      registerText: t("exhibitions.registerNow", "سجل الآن"),
      registerVariant: "default",
      icon: Award,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          icon={<Calendar className="h-5 w-5" />}
          badgeKey="home.events.badge"
          titleKey="home.events.title"
          subtitleKey="home.events.description"
          fallbackBadge="الفعاليات القادمة"
          fallbackTitle="الفعاليات القادمة"
          fallbackSubtitle="اكتشف أهم الفعاليات والمعارض القادمة"
        />

        {/* Events Grid */}
        <div className="grid lg:grid-cols-1 gap-10 mb-16">
          {events.map((event, index) => (
            <div key={index} className="rounded-2xl p-8 glass text-foreground hover-lift">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center border border-border">
                    <event.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-lg mt-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 mb-10">
                <p className="text-2xl font-bold">{event.subtitle}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">{event.location}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {event.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="bg-background rounded-xl p-6 text-center border border-border">
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href={event.learnMoreHref}>
                    <Globe className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
                    {t(
                      "home.upcomingEvents.businessVisits.learnMore",
                      "اعرف المزيد",
                    )}
                    <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href={event.registerHref}>
                    <Zap className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
                    {event.registerText}
                    <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-secondary rounded-2xl p-10 text-foreground border border-border">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t("home.upcomingEvents.cta.title", "لا تفوت فرصة المشاركة")}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t(
                "home.upcomingEvents.cta.description",
                "سجل الآن في فعالياتنا القادمة واحصل على فرص استثمارية حصرية",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90" asChild>
                <Link href="/exhibitions">
                  <Calendar className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t("home.upcomingEvents.cta.viewAll", "عرض جميع الفعاليات")}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3" size={24} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Target className="mr-3 rtl:mr-0 rtl:ml-3" size={24} />
                  {t("home.upcomingEvents.cta.contact", "تواصل معنا")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
