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
  image: string
  category: string
  rating: number
  inStock: boolean
}

export default function ProductsPage() {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock products data with high-quality images
  const mockProducts: Product[] = [
    {
      id: 1,
      name: "هاتف ذكي متطور",
      description: "هاتف ذكي عالي الجودة مع أحدث التقنيات وكاميرا احترافية",
      price: 2999.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: "طابعة ليزر احترافية",
      description: "طابعة ليزر عالية السرعة والجودة للاستخدام المكتبي",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      category: "electronics",
      rating: 4.5,
      inStock: true
    },
    {
      id: 3,
      name: "طاولة مكتب أنيقة",
      description: "طاولة مكتب خشبية أنيقة مع تصميم عصري ومتينة",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      category: "home",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "كرسي مكتب مريح",
      description: "كرسي مكتب مريح مع دعم للظهر وضبط متعدد للموضع",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop",
      category: "home",
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: "دراجة رياضية",
      description: "دراجة رياضية متطورة مع شاشة رقمية وبرامج تدريب متنوعة",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      category: "sports",
      rating: 4.9,
      inStock: false
    },
    {
      id: 6,
      name: "مجموعة أدوات تجميل",
      description: "مجموعة شاملة من أدوات التجميل الطبيعية عالية الجودة",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
      category: "beauty",
      rating: 4.4,
      inStock: true
    }
  ]

  const categories = [
    { id: "all", name: t('products.categories.all') || 'جميع المنتجات' },
    { id: "electronics", name: t('products.categories.electronics') || 'الإلكترونيات' },
    { id: "home", name: t('products.categories.home') || 'المنزل' },
    { id: "sports", name: t('products.categories.sports') || 'الرياضة' },
    { id: "beauty", name: t('products.categories.beauty') || 'التجميل' }
  ]

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

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
              <p className="text-gray-600 mt-4">{t('common.loading', 'جاري التحميل...')}</p>
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
              {t('products.title', 'متجر أطلس الشرق')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('products.title', 'متجر أطلس الشرق')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {t('products.subtitle', 'اكتشف منتجاتنا المميزة')}
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
                placeholder={t('products.search', 'ابحث عن منتج...')}
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
                {t('products.noResults', 'لم يتم العثور على منتجات')}
              </h3>
              <p className="text-gray-500">
                {t('products.noResultsDesc', 'جرب تغيير معايير البحث أو التصفية')}
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
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                      <button className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300">
                        <Heart className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {t('products.outOfStock', 'نفذت الكمية')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-gray-600 text-sm mr-2 rtl:mr-0 rtl:ml-2">
                        ({product.rating})
                      </span>
                    </div>

                    {/* Price and Stock */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-gray-900">
                        {product.price.toLocaleString('ar-SA')} ريال
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock 
                          ? t('products.inStock', 'متوفر') 
                          : t('products.outOfStock', 'نفذت الكمية')
                        }
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        disabled={!product.inStock}
                        asChild
                      >
                        <Link href={`/products/${product.id}`}>
                          <Eye className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                          {t('products.viewDetails', 'عرض التفاصيل')}
                        </Link>
                      </Button>
                      <Button 
                        variant="outline"
                        className="px-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-2xl transition-all duration-300"
                        disabled={!product.inStock}
                      >
                        <Zap className="h-4 w-4" />
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
