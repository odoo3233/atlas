"use client";

import React from "react";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { EventsSection } from "@/components/home/events-section";
import { WhyAtlasSection } from "@/components/home/why-atlas-section";
import { ProductsSection } from "@/components/home/products-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <EventsSection />
      <WhyAtlasSection />
      <ProductsSection />
    </>
  );
}
