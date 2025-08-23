"use client";

import React from "react";
import { HeroSection } from "./home/hero-section";
import { AboutSection } from "./home/about-section";
import { ServicesSection } from "./home/services-section";
import { EventsSection } from "./home/events-section";
import { WhyAtlasSection } from "./home/why-atlas-section";

export function HomeHero() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <WhyAtlasSection />
    </main>
  );
}
