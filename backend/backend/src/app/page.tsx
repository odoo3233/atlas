"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { EventsSection } from "@/components/home/events-section"
import { WhyAtlasSection } from "@/components/home/why-atlas-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <WhyAtlasSection />
      <Footer />
    </main>
  )
}
