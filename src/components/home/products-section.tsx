"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "منتج 1",
      description: "وصف مختصر للمنتج مع التفاصيل الأساسية.",
      price: "$299.99",
    },
    {
      id: 2,
      name: "منتج 2",
      description: "وصف مختصر للمنتج مع التفاصيل الأساسية.",
      price: "$399.99",
    },
    {
      id: 3,
      name: "منتج 3",
      description: "وصف مختصر للمنتج مع التفاصيل الأساسية.",
      price: "$199.99",
    },
    {
      id: 4,
      name: "منتج 4",
      description: "وصف مختصر للمنتج مع التفاصيل الأساسية.",
      price: "$499.99",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          icon={<Package className="h-5 w-5" />}
          fallbackBadge="المنتجات المميزة"
          fallbackTitle="منتجاتنا"
          fallbackSubtitle="اكتشف مجموعة متنوعة من المنتجات عالية الجودة"
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
                      تفاصيل المنتج
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
              عرض جميع المنتجات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
