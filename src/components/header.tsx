"use client"

import React from "react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            أطلس الشرق
          </Link>
          
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              الرئيسية
            </Link>
            <Link href="/exhibitions" className="text-gray-700 hover:text-blue-600 transition-colors">
              المعارض
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              المنتجات
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              التواصل
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-blue-600 transition-colors">
              الإدارة
            </Link>
          </nav>
          
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
