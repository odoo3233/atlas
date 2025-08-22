"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              أطلس الشرق
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              منصة متكاملة للمعارض والفعاليات التجارية الدولية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                استكشف المعارض
              </button>
              <button className="btn-outline">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">من نحن</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نعمل على ربط الشركات والمستثمرين من خلال المعارض والفعاليات التجارية الدولية
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
