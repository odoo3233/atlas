"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

interface Exhibition {
  id: number
  name: string
  description: string
  start_date: string
  end_date: string
  location: string
  image_url?: string
  organizer: string
  created_at: string
  updated_at: string
}

export default function ExhibitionsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch exhibitions from backend API
  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('https://atlas-ha7k.onrender.com/api/exhibitions')
        
        if (!response.ok) {
          throw new Error('Failed to fetch exhibitions')
        }
        
        const data = await response.json()
        setExhibitions(data)
      } catch (err) {
        console.error('Error fetching exhibitions:', err)
        setError('Failed to load exhibitions. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchExhibitions()
  }, [])
  
  // Filter exhibitions based on selected filter
  const filteredExhibitions = exhibitions.filter(exhibition => {
    const endDate = new Date(exhibition.end_date)
    const today = new Date()
    const isUpcoming = endDate >= today
    
    if (filter === "all") return true
    if (filter === "upcoming") return isUpcoming
    if (filter === "past") return !isUpcoming
    return true
  })

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">جاري التحميل...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-2xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">خطأ في تحميل المعارض</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              إعادة المحاولة
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Exhibitions Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Calendar className="mr-2" size={16} />
              معارض وفعاليات
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              المعارض والفعاليات
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              اكتشف أهم المعارض والفعاليات التجارية الدولية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100">
                <Calendar className="mr-2" size={20} />
                عرض الفعاليات
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900">
                <Users className="mr-2" size={20} />
                سجل الآن
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="min-w-[120px]"
            >
              جميع الفعاليات
            </Button>
            <Button 
              variant={filter === "upcoming" ? "default" : "outline"}
              onClick={() => setFilter("upcoming")}
              className="min-w-[120px]"
            >
              الفعاليات القادمة
            </Button>
            <Button 
              variant={filter === "past" ? "default" : "outline"}
              onClick={() => setFilter("past")}
              className="min-w-[120px]"
            >
              الفعاليات السابقة
            </Button>
          </div>
        </div>
      </section>
      
      {/* Exhibitions List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredExhibitions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">لا توجد فعاليات متاحة حالياً</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredExhibitions.map((exhibition) => {
                const endDate = new Date(exhibition.end_date)
                const today = new Date()
                const isUpcoming = endDate >= today
                
                return (
                  <div key={exhibition.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-64 w-full bg-gray-200">
                      {/* Exhibition Image */}
                      {exhibition.image_url ? (
                        <Image
                          src={exhibition.image_url}
                          alt={exhibition.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-500">صورة المعرض</span>
                        </div>
                      )}
                      
                      {/* Upcoming badge */}
                      {isUpcoming && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          الفعاليات القادمة
                        </div>
                      )}
                      
                      {/* Past badge */}
                      {!isUpcoming && (
                        <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          الفعاليات السابقة
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{exhibition.name}</h3>
                      <p className="text-gray-600 mb-4">{exhibition.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                          <span>
                            {new Date(exhibition.start_date).toLocaleDateString('ar-SA', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                            {' - '}
                            {new Date(exhibition.end_date).toLocaleDateString('ar-SA', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-start text-gray-700">
                          <MapPin className="h-5 w-5 mr-2 mt-1 text-blue-600" />
                          <span>{exhibition.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="h-5 w-5 mr-2 text-blue-600" />
                          <span>{exhibition.organizer}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Link href={`/exhibitions/${exhibition.id}`}>
                          <Button>
                            {isUpcoming ? 'سجل الآن' : 'عرض التفاصيل'}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">مهتم بالمشاركة في المعارض؟</h2>
            <p className="text-lg text-gray-700 mb-8">
              إذا كنت مهتماً بالمشاركة في أحد معارضنا القادمة، يرجى التواصل مع فريق المعارض للحصول على مزيد من المعلومات وتفاصيل الحجز.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">تواصل معنا</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">اعرف المزيد</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
