"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function ProductsSection() {
  const { t } = useTranslation();
  const products = [
    {
      id: 1,
      name: t("home.products.sample1.name", "منتج 1"),
      description: t("home.products.sample1.description", "وصف مختصر للمنتج مع التفاصيل الأساسية."),
      price: "$299.99",
    },
    {
      id: 2,
      name: t("home.products.sample2.name", "منتج 2"),
      description: t("home.products.sample2.description", "وصف مختصر للمنتج مع التفاصيل الأساسية."),
      price: "$399.99",
    },
    {
      id: 3,
      name: t("home.products.sample3.name", "منتج 3"),
      description: t("home.products.sample3.description", "وصف مختصر للمنتج مع التفاصيل الأساسية."),
      price: "$199.99",
    },
    {
      id: 4,
      name: t("home.products.sample4.name", "منتج 4"),
      description: t("home.products.sample4.description", "وصف مختصر للمنتج مع التفاصيل الأساسية."),
      price: "$499.99",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          icon={<Package className="h-5 w-5" />}
          badgeKey="products.badge"
          titleKey="products.title"
          subtitleKey="products.subtitle"
          fallbackBadge={t("home.products.badge", "المنتجات المميزة")}
          fallbackTitle={t("home.products.title", "منتجاتنا")}
          fallbackSubtitle={t("home.products.subtitle", "اكتشف مجموعة متنوعة من المنتجات عالية الجودة")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="rounded-xl overflow-hidden card-elevated hover-lift">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-secondary animate-pulse"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 heading-secondary">{product.name}</h3>
                <p className="text-readable mb-4 leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                  <Link href={`/products/${product.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover-lift"
                    >
                      {t("home.products.viewDetails", "تفاصيل المنتج")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="hover-lift">
              {t("home.products.viewAll", "عرض جميع المنتجات")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
