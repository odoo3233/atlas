"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Search,
  Filter,
  ShoppingBag,
  Star,
  Heart,
  Eye,
  ArrowLeft,
  ArrowRight,
  Zap,
  Sparkles,
  TrendingUp,
  Shield,
  Award,
  Clock,
  Globe,
  Crown,
  CheckCircle,
  ArrowUp,
  Phone,
  Mail,
  Users,
  Building,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/api";
import { mockProducts as fallbackProducts } from "@/lib/mock-products";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  category: string;
  barcode: string;
  company_name?: string;
  company_logo?: string;
  specifications?: any;
  created_at: string;
  updated_at: string;
  inStock?: boolean;
  translations?: any;
}

export default function ProductsPage() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts();
        setProducts(Array.isArray(data) ? data : []);
        if (!Array.isArray(data) || data.length === 0) {
          setProducts(fallbackProducts as any);
          setError(
            t(
              "products.warningMockData",
              "Showing sample products due to temporary unavailability.",
            ) as string,
          );
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts(fallbackProducts as any);
        setError(
          t(
            "products.warningMockData",
            "Showing sample products due to a temporary connection issue.",
          ) as string,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [t]);

  const categories = [
    { id: "all", name: t("products.categories.all") || "All Products" },
    { id: "Lighting", name: t("products.categories.lighting") || "Lighting" },
    {
      id: "Renewable Energy",
      name: t("products.categories.renewableEnergy") || "Renewable Energy",
    },
    {
      id: "Smart Home",
      name: t("products.categories.smartHome") || "Smart Home",
    },
    {
      id: "Industrial",
      name: t("products.categories.industrial") || "Industrial",
    },
    {
      id: "Safety Equipment",
      name: t("products.categories.safetyEquipment") || "Safety Equipment",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-atlas-brown-50">
        <div className="text-center">
          <div className="spinner-modern h-12 w-12 mx-auto border-atlas-gold-500"></div>
          <p className="text-atlas-brown-600 mt-4">
            {t("common.loading", "Loading...")}
          </p>
        </div>
      </div>
    );
  }

  if (error && products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center">
          <div className="text-red-500 text-2xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            {t("products.errorLoading", "Error Loading Products")}
          </h2>
          <p className="text-red-700 mb-6">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700"
          >
            {t("products.tryAgain", "Try Again")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Ultra Modern Products Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-xl rounded-2xl text-lg font-bold mb-8 border border-white/20 shadow-2xl">
              <Sparkles className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse text-yellow-300" size={24} />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {t("products.hero.badge", "متجر أطلس الشرق الرائد")}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                {t("products.hero.title", "منتجات متميزة")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-blue-100/90 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              {t("products.hero.subtitle", "اكتشف مجموعة منتجاتنا المتنوعة والعالية الجودة")}
            </p>

            {/* Description */}
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t("products.hero.description", "نقدم لك أفضل المنتجات من الشركات الرائدة في الصين والمملكة العربية السعودية")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
              >
                <ShoppingBag className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                {t("products.hero.browseProducts", "تصفح المنتجات")}
                <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 group"
              >
                <Phone className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={20} />
                {t("products.hero.contactUs", "تواصل معنا")}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { icon: ShoppingBag, value: "500+", label: t("products.hero.stats.products", "منتج") },
                { icon: Building, value: "100+", label: t("products.hero.stats.companies", "شركة") },
                { icon: Star, value: "4.9", label: t("products.hero.stats.rating", "تقييم") },
                { icon: Shield, value: "100%", label: t("products.hero.stats.quality", "جودة") },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/15 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Modern Search and Filter Section */}
      <section className="relative py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 backdrop-blur-xl border-b border-blue-100/50 sticky top-[80px] z-40">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e0f2fe" fill-opacity="0.3"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">
                {t("products.filter.title", "ابحث عن منتجك المثالي")}
              </h2>
              <p className="text-lg text-blue-700/80">
                {t("products.filter.subtitle", "استخدم أدوات البحث المتقدمة للعثور على ما تحتاجه")}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Enhanced Search */}
              <div className="relative flex-1 w-full max-w-lg">
                <div className="relative group">
                  <Search className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6 group-hover:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    placeholder={t("products.search", "البحث عن منتج...")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-16 rtl:pl-6 rtl:pr-16 pr-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-500 text-lg font-medium placeholder:text-blue-400 shadow-lg hover:shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Enhanced Category Filter */}
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Filter className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-bold text-blue-900">
                    {t("products.filter.filterBy", "تصفية حسب")}:
                  </span>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-500 text-lg font-medium text-blue-900 shadow-lg hover:shadow-xl min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Filter Tags */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {[
                { id: "Lighting", name: t("products.categories.lighting", "الإضاءة"), icon: Star },
                { id: "Renewable Energy", name: t("products.categories.renewableEnergy", "الطاقة المتجددة"), icon: Zap },
                { id: "Smart Home", name: t("products.categories.smartHome", "المنزل الذكي"), icon: Globe },
                { id: "Industrial", name: t("products.categories.industrial", "الصناعي"), icon: Building },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105"
                      : "bg-white/60 text-blue-700 hover:bg-blue-50 hover:scale-105 border border-blue-200"
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Products Grid */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e0f2fe" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 relative z-10">
          {error && products.length > 0 && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 text-yellow-800 font-medium shadow-lg">
                <Shield className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse" size={20} />
                {error}
              </div>
            </div>
          )}
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <ShoppingBag className="h-16 w-16 text-blue-500 animate-bounce" />
              </div>
              <h3 className="text-4xl font-black text-blue-900 mb-4">
                {t("products.noResults", "لم نجد منتجات")}
              </h3>
              <p className="text-xl text-blue-700/80 mb-8 max-w-md mx-auto">
                {t(
                  "products.noResultsDesc",
                  "جرب تغيير معايير البحث أو التصفية",
                )}
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <RefreshCw className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
                {t("products.resetFilters", "إعادة تعيين الفلاتر")}
              </Button>
            </div>
          ) : (
            <>
              {/* Results Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">
                  {t("products.results.title", "منتجاتنا المتميزة")}
                </h2>
                <p className="text-lg text-blue-700/80">
                  {t("products.results.subtitle", `عثرنا على ${filteredProducts.length} منتج رائع`)}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => {
                const localizedName = (product as any).translations?.[i18n.language]?.name || product.name;
                const localizedDesc = (product as any).translations?.[i18n.language]?.description || product.description;
                const inStock = product.inStock !== undefined ? product.inStock : true;
                const categoryKeyMap: Record<string, string> = {
                  "Lighting": "lighting",
                  "Renewable Energy": "renewableEnergy",
                  "Smart Home": "smartHome",
                  "Industrial": "industrial",
                  "Safety Equipment": "safetyEquipment",
                };
                const categoryKey = categoryKeyMap[product.category] || undefined;
                const localizedCategory = categoryKey ? (t(`products.categories.${categoryKey}`) as string) : product.category;
                return (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-100/50"
                >
                  {/* Product Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={
                        product.image_url ||
                        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
                      }
                      alt={localizedName}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Favorite Button */}
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                      <button className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                        <Heart className="h-5 w-5 text-gray-600 group-hover/btn:text-red-500 group-hover/btn:animate-pulse" />
                      </button>
                    </div>

                    {/* Stock Status Badge */}
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                      <div className={`px-4 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-xl ${
                        inStock 
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                          : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                      }`}>
                        {inStock ? t("products.inStock", "متوفر") : t("products.outOfStock", "غير متوفر")}
                      </div>
                    </div>

                    {/* Company Logo */}
                    {product.company_logo && (
                      <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
                        <div className="w-14 h-14 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg p-3 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={product.company_logo}
                            alt={product.company_name || "Company"}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4">
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl text-sm font-bold shadow-lg backdrop-blur-xl">
                        {localizedCategory}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    {/* Product Name */}
                    <h3 className="text-2xl font-black text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {localizedName}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-blue-700/80 mb-6 line-clamp-3 leading-relaxed">
                      {localizedDesc}
                    </p>

                    {/* Company Name */}
                    {product.company_name && (
                      <div className="flex items-center mb-6">
                        <Building className="w-5 h-5 text-blue-500 mr-2 rtl:mr-0 rtl:ml-2" />
                        <p className="text-sm text-blue-600 font-semibold">
                          {product.company_name}
                        </p>
                      </div>
                    )}

                    {/* Price and Barcode */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-3xl font-black text-blue-900">
                        ${product.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-500/70 font-mono bg-blue-50 px-3 py-1 rounded-xl">
                        {product.barcode}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group/btn"
                        asChild
                      >
                        <Link href={`/products/${product.id}`}>
                          <Eye className="mr-3 rtl:mr-0 rtl:ml-3 group-hover/btn:animate-bounce" size={20} />
                          {t("products.viewDetails", "عرض التفاصيل")}
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="px-6 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-4 rounded-2xl transition-all duration-500 hover:scale-105 group/btn"
                        asChild
                      >
                        <Link href={`/scan/${product.barcode}`}>
                          <Zap className="group-hover/btn:animate-pulse" size={20} />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-500 pointer-events-none"></div>
                </div>
              );})}
            </div>
            </>
          )}
        </div>
      </section>

      {/* Ultra Modern CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-xl rounded-2xl text-lg font-bold mb-8 border border-white/20 shadow-2xl">
              <Sparkles className="mr-3 rtl:mr-0 rtl:ml-3 animate-pulse text-yellow-300" size={24} />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {t("products.cta.badge", "هل تبحث عن منتج معين؟")}
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {t("products.cta.title", "تواصل معنا اليوم")}
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t("products.cta.description", "فريقنا المتخصص جاهز لمساعدتك في العثور على المنتج المثالي لاحتياجاتك")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                asChild
              >
                <Link href="/contact">
                  <Phone className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={24} />
                  {t("products.cta.contactUs", "تواصل معنا")}
                  <ArrowRight className="ml-3 rtl:ml-0 rtl:mr-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold text-lg px-10 py-5 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 group"
                asChild
              >
                <Link href="/services">
                  <Users className="mr-3 rtl:mr-0 rtl:ml-3 group-hover:animate-bounce" size={20} />
                  {t("products.cta.ourServices", "خدماتنا")}
                </Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: t("products.cta.features.quality", "جودة مضمونة"), desc: t("products.cta.features.qualityDesc", "منتجات عالية الجودة من أفضل الشركات") },
                { icon: Clock, title: t("products.cta.features.support", "دعم 24/7"), desc: t("products.cta.features.supportDesc", "فريق دعم متاح على مدار الساعة") },
                { icon: Shield, title: t("products.cta.features.warranty", "ضمان شامل"), desc: t("products.cta.features.warrantyDesc", "ضمان شامل على جميع المنتجات") },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/15 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-10 h-10 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{feature.title}</h3>
                  <p className="text-blue-200/80 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
