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

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  inStock: boolean
  features?: string[]
  specifications?: Record<string, string>
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  // Mock products data
  const mockProducts: Product[] = [
    {
      id: 1,
      name: "منتج إلكتروني متطور",
      description: "منتج إلكتروني عالي الجودة مع أحدث التقنيات المتطورة. يتميز بأداء استثنائي وتصميم أنيق يناسب جميع الأذواق. مصنوع من أفضل المواد المستخدمة في الصناعة.",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
      category: "electronics",
      rating: 4.5,
      inStock: true,
      features: [
        "تقنية متطورة",
        "تصميم أنيق",
        "أداء استثنائي",
        "ضمان شامل",
        "دعم فني 24/7"
      ],
      specifications: {
        "الوزن": "500 جرام",
        "الأبعاد": "20 × 15 × 5 سم",
        "اللون": "أزرق",
        "الضمان": "سنتان",
        "الطاقة": "100 واط"
      }
    },
    {
      id: 2,
      name: "منتج منزلي أنيق",
      description: "منتج منزلي أنيق وعملي للاستخدام اليومي. مصمم بعناية ليوفر الراحة والأناقة في منزلك. سهل الاستخدام والصيانة.",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      category: "home",
      rating: 4.2,
      inStock: true,
      features: [
        "تصميم أنيق",
        "سهولة الاستخدام",
        "صيانة بسيطة",
        "متوافق مع جميع المنازل",
        "مواد عالية الجودة"
      ],
      specifications: {
        "الوزن": "2 كيلو جرام",
        "الأبعاد": "30 × 25 × 10 سم",
        "اللون": "أبيض",
        "الضمان": "سنة واحدة",
        "الاستخدام": "منزلي"
      }
    },
    {
      id: 3,
      name: "منتج رياضي متخصص",
      description: "منتج رياضي متخصص للممارسين المحترفين. مصمم لتحقيق أفضل أداء رياضي مع الحفاظ على الراحة والأمان.",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      category: "sports",
      rating: 4.8,
      inStock: false,
      features: [
        "أداء رياضي عالي",
        "راحة استثنائية",
        "أمان متقدم",
        "متانة عالية",
        "تصميم احترافي"
      ],
      specifications: {
        "الوزن": "1.5 كيلو جرام",
        "الأبعاد": "40 × 20 × 15 سم",
        "اللون": "أصفر",
        "الضمان": "3 سنوات",
        "الاستخدام": "رياضي"
      }
    },
    {
      id: 4,
      name: "منتج تجميلي طبيعي",
      description: "منتج تجميلي طبيعي 100% خالي من المواد الكيميائية الضارة. مصنوع من أفضل المكونات الطبيعية للحفاظ على جمالك وصحتك.",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop",
      category: "beauty",
      rating: 4.6,
      inStock: true,
      features: [
        "100% طبيعي",
        "خالي من المواد الكيميائية",
        "نتائج مضمونة",
        "مناسب لجميع أنواع البشرة",
        "رائحة طبيعية"
      ],
      specifications: {
        "الحجم": "100 مل",
        "المكونات": "طبيعية 100%",
        "اللون": "وردي",
        "الضمان": "سنة واحدة",
        "الاستخدام": "يومي"
      }
    }
  ]

  useEffect(() => {
    const productId = parseInt(params.id as string)
    const foundProduct = mockProducts.find(p => p.id === productId)
    
    if (foundProduct) {
      setProduct(foundProduct)
    }
    setLoading(false)
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
              <p className="mt-4 text-gray-600">جاري تحميل تفاصيل المنتج...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">المنتج غير موجود</h1>
              <p className="text-gray-600 mb-6">عذراً، المنتج الذي تبحث عنه غير متوفر</p>
              <Link href="/products">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  العودة لصفحة المنتجات
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
              <span>العودة للمنتجات</span>
            </Link>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px]"
                  placeholder="empty"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                    <Heart className="h-6 w-6 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold text-2xl">غير متوفر</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Category and Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize bg-gray-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>

                {/* Product Name */}
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="text-3xl font-bold text-blue-600">
                  ${product.price}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                {product.features && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">المميزات</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <label className="text-gray-700 font-medium">الكمية:</label>
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
                      disabled={!product.inStock}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <ShoppingBag className="h-5 w-5 ml-2 rtl:mr-2 rtl:ml-0" />
                      إضافة للسلة
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                    >
                      طلب سريع
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">شحن مجاني</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">ضمان شامل</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RotateCcw className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-gray-600">إرجاع مجاني</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="border-t border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">المواصفات</h3>
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

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">منتجات مشابهة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts
                .filter(p => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <ProductImage
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48"
                        placeholder="empty"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-600 font-bold">${relatedProduct.price}</span>
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {renderStars(relatedProduct.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
