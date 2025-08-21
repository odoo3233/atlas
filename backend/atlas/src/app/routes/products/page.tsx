"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Filter, Barcode } from "lucide-react"

// Mock product data (would come from API/database in real implementation)
const mockProducts = [
  {
    id: 1,
    name: "Industrial Machinery XJ-5000",
    description: "High-performance industrial machinery for manufacturing plants",
    price: 15000,
    category: "machinery",
    barcode: "ATLAS-PROD-001",
    image: "/products/product1.jpg"
  },
  {
    id: 2,
    name: "Smart Factory Sensor Kit",
    description: "IoT sensors for smart factory monitoring and automation",
    price: 2500,
    category: "electronics",
    barcode: "ATLAS-PROD-002",
    image: "/products/product2.jpg"
  },
  {
    id: 3,
    name: "Commercial Solar Panel System",
    description: "High-efficiency solar panels for commercial buildings",
    price: 8000,
    category: "energy",
    barcode: "ATLAS-PROD-003",
    image: "/products/product3.jpg"
  },
  {
    id: 4,
    name: "Medical Equipment Package",
    description: "Complete package of essential medical equipment for clinics",
    price: 12000,
    category: "medical",
    barcode: "ATLAS-PROD-004",
    image: "/products/product4.jpg"
  },
  {
    id: 5,
    name: "Construction Materials Bundle",
    description: "Premium construction materials for commercial projects",
    price: 5000,
    category: "construction",
    barcode: "ATLAS-PROD-005",
    image: "/products/product5.jpg"
  },
  {
    id: 6,
    name: "Office Automation System",
    description: "Complete office automation system for modern workplaces",
    price: 3500,
    category: "electronics",
    barcode: "ATLAS-PROD-006",
    image: "/products/product6.jpg"
  }
]

export default function ProductsPage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  
  // Filter products based on search term and category
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  
  // Get unique categories for filter
  const categories = Array.from(new Set(mockProducts.map(product => product.category)))

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Products Hero */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('products.title')}</h1>
          <p className="text-xl max-w-2xl">
            Browse our catalog of high-quality products from our partner companies. 
            Each product has a unique barcode for easy ordering at exhibitions.
          </p>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('products.search')}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="w-full md:w-64">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">{t('products.filter')} {t('products.category')}</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-64 w-full bg-gray-200">
                    {/* In a real implementation, this would be an actual product image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">Product Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        <Barcode className="h-4 w-4 mr-1" />
                        <span>{product.barcode}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">${product.price.toLocaleString()}</span>
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline">{t('products.details')}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Barcode Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded">
                    <Barcode className="h-24 w-24 text-gray-700" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold mb-4">Product Barcode System</h2>
                <p className="text-gray-600 mb-4">
                  Each product in our catalog has a unique barcode. When visiting our exhibitions, 
                  you can scan these barcodes with your smartphone to access detailed product information 
                  and place orders directly through our website.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-blue-700">
                    <strong>Exhibition Visitors:</strong> Scan any product barcode at our exhibitions 
                    to view detailed specifications and place orders. Our team will follow up with you 
                    to complete the transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
