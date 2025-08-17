"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  const products = [
    { id: 1, name: "منتج 1", description: "وصف مختصر للمنتج مع التفاصيل الأساسية.", price: "$299.99" },
    { id: 2, name: "منتج 2", description: "وصف مختصر للمنتج مع التفاصيل الأساسية.", price: "$399.99" },
    { id: 3, name: "منتج 3", description: "وصف مختصر للمنتج مع التفاصيل الأساسية.", price: "$199.99" },
    { id: 4, name: "منتج 4", description: "وصف مختصر للمنتج مع التفاصيل الأساسية.", price: "$499.99" }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            منتجاتنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة متنوعة من المنتجات عالية الجودة
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" size="sm" className="transform hover:scale-105 transition-all">
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
            <Button size="lg" className="transform hover:scale-105 transition-all">
              عرض جميع المنتجات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
