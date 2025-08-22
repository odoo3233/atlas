"use client"

import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Search, Filter, ShoppingBag, Star, Heart, Eye, ArrowLeft, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

interface Product {
  id: number
  name: string
  description: string
  price: number
  image_url?: string
  category: string
  barcode: string
  company_name?: string
  company_logo?: string
  specifications?: any
  created_at: string
  updated_at: string
}

export default function ProductsPage() {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('https://atlas-ha7k.onrender.com/api/products')
        
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = [
    { id: "all", name: t('products.categories.all') || 'All Products' },
    { id: "Lighting", name: t('products.categories.lighting') || 'Lighting' },
    { id: "Renewable Energy", name: t('products.categories.renewableEnergy') || 'Renewable Energy' },
    { id: "Smart Home", name: t('products.categories.smartHome') || 'Smart Home' },
    { id: "Industrial", name: t('products.categories.industrial') || 'Industrial' },
    { id: "Safety Equipment", name: t('products.categories.safetyEquipment') || 'Safety Equipment' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : i < rating 
              ? "text-yellow-400 fill-current opacity-50" 
              : "text-gray-300"
        }`}
      />
    ))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        <div className="pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="spinner-modern h-12 w-12 mx-auto"></div>
              <p className="text-gray-600 mt-4">{t('common.loading', 'Loading...')}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        <div className="pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="text-red-500 text-2xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Products</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-lg font-semibold mb-8 border border-white/20">
              <ShoppingBag className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
              {t('products.title', 'Atlas Al-Sharq Store')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('products.title', 'Atlas Al-Sharq Store')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {t('products.subtitle', 'Discover our distinguished products')}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t('products.search', 'Search for a product...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                {t('products.noResults', 'No products found')}
              </h3>
              <p className="text-gray-500">
                {t('products.noResultsDesc', 'Try changing your search or filter criteria')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 overflow-hidden border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image_url || "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                      <button className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300">
                        <Heart className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    {/* Company Logo */}
                    {product.company_logo && (
                      <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-2">
                          <Image
                            src={product.company_logo}
                            alt={product.company_name || 'Company'}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {product.barcode}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Company Name */}
                    {product.company_name && (
                      <p className="text-sm text-blue-600 font-medium mb-4">
                        {product.company_name}
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-gray-900">
                        ${product.price.toLocaleString()}
                      </div>
                      <div className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        {t('products.inStock', 'In Stock')}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <Link href={`/products/${product.id}`}>
                          <Eye className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                          {t('products.viewDetails', 'View Details')}
                        </Link>
                      </Button>
                      <Button 
                        variant="outline"
                        className="px-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-2xl transition-all duration-300"
                        asChild
                      >
                        <Link href={`/scan/${product.barcode}`}>
                          <Zap className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
