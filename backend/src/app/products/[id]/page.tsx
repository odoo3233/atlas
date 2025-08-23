"use client"

import React, { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Star, Heart, ShoppingBag, Truck, Shield, RotateCcw, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductImage } from "@/components/ui/enhanced-image"
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
  specifications?: Record<string, string>
  created_at: string
  updated_at: string
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const productId = params.id as string
        const response = await fetch(`http://localhost:5001/api/products/${productId}`)
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Product not found')
          }
          throw new Error('Failed to fetch product')
        }
        
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProduct()
    }
  }, [params.id])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
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
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">{t('common.loading', 'Loading product details...')}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {error === 'Product not found' ? 'Product Not Found' : 'Error Loading Product'}
              </h1>
              <p className="text-gray-600 mb-6">
                {error === 'Product not found' 
                  ? 'Sorry, the product you are looking for is not available'
                  : error || 'An error occurred while loading the product'
                }
              </p>
              <Link href="/products">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/products" className="inline-flex items-center space-x-2 rtl:space-x-reverse text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>{t('common.back', 'Back to Products')}</span>
            </Link>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <ProductImage
                  src={product.image_url || "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop"}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px]"
                  placeholder="empty"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                    <Heart className="h-6 w-6 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                {/* Company Logo */}
                {product.company_logo && (
                  <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2">
                      <Image
                        src={product.company_logo}
                        alt={product.company_name || 'Company'}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Category and Barcode */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize bg-gray-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {product.barcode}
                  </span>
                </div>

                {/* Product Name */}
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>

                {/* Company Name */}
                {product.company_name && (
                  <p className="text-lg text-blue-600 font-medium">
                    {product.company_name}
                  </p>
                )}

                {/* Price */}
                <div className="text-3xl font-bold text-blue-600">
                  ${product.price.toLocaleString()}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <label className="text-gray-700 font-medium">{t('orders.quantity', 'Quantity')}:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <Button
                      size="lg"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <ShoppingBag className="h-5 w-5 ml-2 rtl:mr-2 rtl:ml-0" />
                      {t('products.addToCart', 'Add to Cart')}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <Link href={`/scan/${product.barcode}`}>
                        {t('products.scanBarcode', 'Scan Barcode')}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">{t('products.freeShipping', 'Free Shipping')}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">{t('products.warranty', 'Warranty')}</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RotateCcw className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-gray-600">{t('products.freeReturn', 'Free Return')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="border-t border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('products.specifications', 'Specifications')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Products Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('products.relatedProducts', 'Related Products')}</h2>
            <div className="text-center py-8">
              <p className="text-gray-600">{t('products.relatedProductsDesc', 'Discover more products from our catalog')}</p>
              <Link href="/products">
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                  {t('products.viewAllProducts', 'View All Products')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
