"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Target,
  Award,
  CheckCircle,
  Globe,
  Star,
  Shield,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const { t: tHome } = useTranslation("home");
  const { t: tContact } = useTranslation("contact");

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-atlas-dark/60 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              <Building2 className="mr-2 rtl:mr-0 rtl:ml-2" size={16} />
              {tHome("about.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {tHome("about.title")}
            </h1>
            <p className="text-xl md:text-2xl text-atlas-gold-100/90 leading-relaxed mb-8">
              {tHome("about.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 btn-primary-gradient"
              >
                <Phone className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {tContact("hero.callNow")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-atlas-dark transition-all duration-300"
              >
                <ArrowRight className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {tHome("about.learnMore")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="card-modern p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-atlas-gold-600 to-atlas-gold-400 text-white mr-4 shadow-lg rtl:mr-0 rtl:ml-4">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-atlas-dark rtl:mr-4">
                  {tHome("about.vision.title")}
                </h3>
              </div>
              <p className="text-atlas-brown-700 text-lg leading-relaxed mb-4">
                {tHome("about.vision.description")}
              </p>
              <div className="flex items-center text-atlas-gold-600 font-semibold">
                <span className="mr-2 rtl:mr-0 rtl:ml-2">→</span>
                {tHome("about.vision.learnMore")}
              </div>
            </div>

            {/* Mission */}
            <div className="card-modern p-8">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-atlas-dark to-atlas-brown-700 text-white mr-4 shadow-lg rtl:mr-0 rtl:ml-4">
                  <Award size={28} />
                </div>
                <h3 className="text-2xl font-bold text-atlas-dark rtl:mr-4">
                  {tHome("about.mission.title")}
                </h3>
              </div>
              <p className="text-atlas-brown-700 text-lg leading-relaxed mb-4">
                {tHome("about.mission.description")}
              </p>
              <div className="flex items-center text-atlas-gold-600 font-semibold">
                <span className="mr-2 rtl:mr-0 rtl:ml-2">→</span>
                {tHome("about.mission.learnMore")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 bg-atlas-brown-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-atlas-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-atlas-gold-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="card-modern p-8">
            <div className="flex items-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-atlas-dark to-atlas-brown-800 text-white mr-4 shadow-lg rtl:mr-0 rtl:ml-4">
                <Building2 size={28} />
              </div>
              <h3 className="text-3xl font-bold text-atlas-dark rtl:mr-4">
                {tHome("about.company.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-atlas-brown-700 text-lg leading-relaxed mb-6">
                  {tHome("about.company.description")}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-atlas-gold-100/50 rounded-xl">
                    <div className="text-3xl font-bold text-atlas-gold-600 mb-1">
                      15+
                    </div>
                    <div className="text-sm text-atlas-brown-600">
                      {tHome("about.stats.years")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-atlas-gold-100/50 rounded-xl">
                    <div className="text-3xl font-bold text-atlas-gold-600 mb-1">
                      500+
                    </div>
                    <div className="text-sm text-atlas-brown-600">
                      {tHome("about.stats.events")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start p-4 bg-atlas-brown-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-atlas-gold-500 text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <CheckCircle size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-atlas-dark mb-2 text-lg">
                      {tHome("about.company.features.experience")}
                    </h4>
                    <p className="text-atlas-brown-600 text-sm">
                      {tHome("about.company.features.experienceDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-atlas-brown-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-atlas-gold-500 text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <Globe size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-atlas-dark mb-2 text-lg">
                      {tHome("about.company.features.network")}
                    </h4>
                    <p className="text-atlas-brown-600 text-sm">
                      {tHome("about.company.features.networkDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-atlas-brown-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-atlas-gold-500 text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <Star size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-atlas-dark mb-2 text-lg">
                      {tHome("about.company.features.quality")}
                    </h4>
                    <p className="text-atlas-brown-600 text-sm">
                      {tHome("about.company.features.qualityDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-atlas-brown-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-atlas-gold-500 text-white mr-4 mt-1 shadow-md rtl:mr-0 rtl:ml-4">
                    <Shield size={20} />
                  </div>
                  <div className="rtl:mr-4">
                    <h4 className="font-bold text-atlas-dark mb-2 text-lg">
                      {tHome("about.company.features.support")}
                    </h4>
                    <p className="text-atlas-brown-600 text-sm">
                      {tHome("about.company.features.supportDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-dark">
              {tHome("whyAtlas.title")}
            </h2>
            <p className="text-xl text-atlas-brown-600 max-w-3xl mx-auto">
              {tHome("whyAtlas.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-atlas-gold-500 text-white mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {tHome("whyAtlas.experience.title")}
              </h3>
              <p className="text-atlas-brown-600">
                {tHome("whyAtlas.experience.description")}
              </p>
            </div>

            <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-atlas-gold-500 text-white mb-6 shadow-lg">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {tHome("whyAtlas.network.title")}
              </h3>
              <p className="text-atlas-brown-600">
                {tHome("whyAtlas.network.description")}
              </p>
            </div>

            <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-atlas-gold-500 text-white mb-6 shadow-lg">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {tHome("whyAtlas.quality.title")}
              </h3>
              <p className="text-atlas-brown-600">
                {tHome("whyAtlas.quality.description")}
              </p>
            </div>

             <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-atlas-gold-500 text-white mb-6 shadow-lg">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {tHome("whyAtlas.events.title")}
              </h3>
              <p className="text-atlas-brown-600">
                {tHome("whyAtlas.events.description")}
              </p>
            </div>

             <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-atlas-gold-500 text-white mb-6 shadow-lg">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {tHome("whyAtlas.support.title")}
              </h3>
              <p className="text-atlas-brown-600">
                {tHome("whyAtlas.support.description")}
              </p>
            </div>

             <div className="card-modern text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-atlas-gold-500 text-white mb-6 shadow-lg">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-atlas-dark mb-4">
                {tHome("whyAtlas.innovation.title")}
              </h3>
              <p className="text-atlas-brown-600">
                {tHome("whyAtlas.innovation.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 cta-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {tHome("about.cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {tHome("about.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-atlas-dark hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
              {tContact("hero.callNow")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-atlas-dark transition-all duration-300"
            >
              <Mail className="mr-2 rtl:mr-0 rtl:ml-2" size={20} />
              {tContact("hero.emailUs")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
