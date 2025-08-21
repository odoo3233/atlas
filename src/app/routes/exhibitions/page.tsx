"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

// Mock exhibitions data (would come from API/database in real implementation)
const mockExhibitions = [
  {
    id: 1,
    name: "Saudi-China Tech Expo 2025",
    description: "Showcasing the latest technology innovations from China and Saudi Arabia with a focus on AI, robotics, and smart city solutions.",
    startDate: "2025-03-15",
    endDate: "2025-03-18",
    location: "Riyadh International Convention Center, Saudi Arabia",
    image: "/exhibitions/tech-expo.jpg",
    organizer: "Atlas Al-Sharq & China Tech Association",
    upcoming: true
  },
  {
    id: 2,
    name: "Saudi-China Manufacturing Forum",
    description: "Connecting manufacturing businesses from both countries for collaboration and knowledge exchange in industrial innovation.",
    startDate: "2025-05-10",
    endDate: "2025-05-12",
    location: "Jeddah Exhibition Center, Saudi Arabia",
    image: "/exhibitions/manufacturing-forum.jpg",
    organizer: "Atlas Al-Sharq & China Manufacturing Council",
    upcoming: true
  },
  {
    id: 3,
    name: "Green Energy Summit",
    description: "Exploring sustainable energy solutions and partnerships between Saudi Arabia and China in renewable energy technologies.",
    startDate: "2025-07-22",
    endDate: "2025-07-25",
    location: "KAFD Conference Center, Riyadh, Saudi Arabia",
    image: "/exhibitions/green-energy.jpg",
    organizer: "Atlas Al-Sharq & China Green Energy Association",
    upcoming: true
  },
  {
    id: 4,
    name: "Saudi-China Trade Fair 2024",
    description: "Annual trade fair showcasing products and services from both countries across multiple industries.",
    startDate: "2024-11-05",
    endDate: "2024-11-10",
    location: "Dhahran Expo, Dammam, Saudi Arabia",
    image: "/exhibitions/trade-fair.jpg",
    organizer: "Atlas Al-Sharq & China Trade Council",
    upcoming: false
  },
  {
    id: 5,
    name: "Healthcare Innovation Conference",
    description: "Bringing together healthcare professionals and companies to explore medical innovations and partnerships.",
    startDate: "2024-09-18",
    endDate: "2024-09-20",
    location: "King Abdullah Medical City, Makkah, Saudi Arabia",
    image: "/exhibitions/healthcare.jpg",
    organizer: "Atlas Al-Sharq & China Medical Association",
    upcoming: false
  }
]

export default function ExhibitionsPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")
  
  // Filter exhibitions based on selected filter
  const filteredExhibitions = mockExhibitions.filter(exhibition => {
    if (filter === "all") return true
    if (filter === "upcoming") return exhibition.upcoming
    if (filter === "past") return !exhibition.upcoming
    return true
  })

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Exhibitions Hero */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('exhibitions.title')}</h1>
          <p className="text-xl max-w-2xl">
            Discover our upcoming and past exhibitions and events connecting businesses 
            between China and Saudi Arabia. Register to attend or exhibit your products.
          </p>
        </div>
      </section>
      
      {/* Filter Tabs */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="min-w-[120px]"
            >
              All Events
            </Button>
            <Button 
              variant={filter === "upcoming" ? "default" : "outline"}
              onClick={() => setFilter("upcoming")}
              className="min-w-[120px]"
            >
              {t('exhibitions.upcoming')}
            </Button>
            <Button 
              variant={filter === "past" ? "default" : "outline"}
              onClick={() => setFilter("past")}
              className="min-w-[120px]"
            >
              {t('exhibitions.past')}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Exhibitions List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredExhibitions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No exhibitions found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredExhibitions.map((exhibition) => (
                <div key={exhibition.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-64 w-full bg-gray-200">
                    {/* In a real implementation, this would be an actual exhibition image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">Exhibition Image</span>
                    </div>
                    
                    {/* Upcoming badge */}
                    {exhibition.upcoming && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Upcoming
                      </div>
                    )}
                    
                    {/* Past badge */}
                    {!exhibition.upcoming && (
                      <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Past Event
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
                          {new Date(exhibition.startDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                          {' - '}
                          {new Date(exhibition.endDate).toLocaleDateString('en-US', { 
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
                          {exhibition.upcoming ? t('exhibitions.register') : 'View Details'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Exhibiting?</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you're interested in exhibiting your products or services at one of our upcoming events,
              please contact our exhibitions team for more information and booking details.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
