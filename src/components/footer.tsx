"use client"

import React from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">أطلس الشرق</h3>
            <p className="text-gray-400">
              منصة متكاملة للمعارض والفعاليات التجارية الدولية
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2">
              <li><Link href="/exhibitions" className="text-gray-400 hover:text-white">المعارض</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">المنتجات</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">الخدمات</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">من نحن</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">التواصل</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">التواصل</h4>
            <p className="text-gray-400">
              البريد الإلكتروني: info@atlas.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 أطلس الشرق. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
