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
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-lg font-semibold mb-8 border border-white/20">
              <ShoppingBag className="mr-3 rtl:mr-0 rtl:ml-3" size={20} />
              {t("products.title", "Atlas Al-Sharq Store")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("products.title", "Atlas Al-Sharq Store")}
            </h1>
            <p className="text-xl md:text-2xl text-atlas-gold-100/90 max-w-2xl mx-auto">
              {t("products.subtitle", "Discover our distinguished products")}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/95 backdrop-blur-md shadow-lg sticky top-[80px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-atlas-primary-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t("products.search", "البحث عن منتج...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-3 border-2 border-atlas-primary-200 rounded-xl focus:border-atlas-secondary-500 focus:ring-2 focus:ring-atlas-secondary-100 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Filter className="h-5 w-5 text-atlas-primary-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 border-2 border-atlas-primary-200 rounded-xl focus:border-atlas-secondary-500 focus:ring-2 focus:ring-atlas-secondary-100 transition-all duration-300 bg-white"
              >
                {categories.map((category) => (
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
      <section className="py-16 bg-atlas-brown-50">
        <div className="container mx-auto px-4">
          {error && products.length > 0 && (
            <div className="mb-6 text-center">
              <div className="inline-block px-4 py-2 rounded-xl bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm">
                {error}
              </div>
            </div>
          )}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-atlas-brown-600 mb-2">
                {t("products.noResults", "No products found")}
              </h3>
              <p className="text-atlas-brown-500">
                {t(
                  "products.noResultsDesc",
                  "Try changing your search or filter criteria",
                )}
              </p>
            </div>
          ) : (
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
                  className="card-modern overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={
                        product.image_url ||
                        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
                      }
                      alt={localizedName}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                      <button className="p-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all duration-300">
                        <Heart className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    {/* Company Logo */}
                    {product.company_logo && (
                      <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-2">
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
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-atlas-brown-700 bg-atlas-brown-50 px-3 py-1 rounded-full">
                        {localizedCategory}
                      </span>
                      <span className="text-xs text-atlas-brown-400 font-mono">
                        {product.barcode}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-atlas-dark mb-2">
                      {localizedName}
                    </h3>
                    <p className="text-atlas-brown-600 mb-4 line-clamp-2">
                      {localizedDesc}
                    </p>

                    {/* Company Name */}
                    {product.company_name && (
                      <p className="text-sm text-atlas-gold-600 font-medium mb-4">
                        {product.company_name}
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-atlas-dark">
                        ${product.price.toLocaleString()}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${inStock ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                        {inStock ? t("products.inStock", "In Stock") : t("products.outOfStock", "Out of Stock")}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Button
                        className="flex-1 btn-primary-gradient rounded-xl shadow-lg"
                        asChild
                      >
                        <Link href={`/products/${product.id}`}>
                          <Eye className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
                          {t("products.viewDetails", "View Details")}
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="px-4 border-2 border-atlas-gold-500 text-atlas-gold-500 hover:bg-atlas-gold-500 hover:text-white font-bold rounded-xl transition-all duration-300"
                        asChild
                      >
                        <Link href={`/scan/${product.barcode}`}>
                          <Zap className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );})}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
