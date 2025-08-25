"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Star,
  Heart,
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/ui/enhanced-image";

import Link from "next/link";
import { getProduct, createOrder } from "@/lib/api";
import { mockProducts } from "@/lib/mock-products";
import Image from "next/image";

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
  specifications?: Record<string, string>;
  created_at: string;
  updated_at: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [orderSubmitting, setOrderSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const productId = params?.id as string;
        if (!productId) {
          throw new Error("Product ID not found");
        }
        try {
          const data = await getProduct(productId);
          setProduct(data);
        } catch (e) {
          // Fallback to mock data
          const fallback = mockProducts.find((p) => String(p.id) === String(productId));
          if (fallback) {
            setProduct(fallback as any);
            // show product normally without error page
            setError(null);
          } else {
            throw e;
          }
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchProduct();
    }
  }, [params?.id]);

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
    ));
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-atlas-brown-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-atlas-gold-500 mx-auto"></div>
          <p className="mt-4 text-atlas-brown-600">
            {t("common.loading", "Loading product details...")}
          </p>
        </div>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center max-w-md mx-auto">
          <div className="card-modern p-8">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-red-900 mb-4">
              {error === "Product not found"
                ? t("products.errorNotFound", "Product Not Found")
                : t("products.errorLoading", "Error Loading Product")}
            </h1>
            <p className="text-red-700 mb-6">
              {error === "Product not found"
                ? t("products.notAvailable", "Sorry, the product you are looking for is not available")
                : error || t("common.error", "An error occurred while loading the product")}
            </p>
            <Link href="/products">
              <Button className="bg-red-600 hover:bg-red-700">
                {t("products.viewAllProducts", "View All Products")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Localized fields for fallback products
  if (!product) {
    return null;
  }

  const localizedName = (product as any)?.translations?.[i18n.language]?.name || product.name;
  const localizedDesc = (product as any)?.translations?.[i18n.language]?.description || product.description;
  const categoryKeyMap: Record<string, string> = {
    "Lighting": "lighting",
    "Renewable Energy": "renewableEnergy",
    "Smart Home": "smartHome",
    "Industrial": "industrial",
    "Safety Equipment": "safetyEquipment",
  };
  const categoryKey = categoryKeyMap[product.category];
  const localizedCategory = categoryKey ? (t(`products.categories.${categoryKey}`) as string) : product.category;

  return (
    <>
      <main className="py-12 bg-atlas-brown-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-atlas-gold-600 hover:text-atlas-gold-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{t("common.back", "Back to Products")}</span>
            </Link>
          </div>

          {/* Product Details */}
          <div className="card-modern overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <ProductImage
                  src={
                    product.image_url ||
                    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop"
                  }
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
                        alt={product.company_name || "Company"}
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
                  <span className="text-sm text-atlas-brown-700 capitalize bg-atlas-brown-50 px-3 py-1 rounded-full">
                    {localizedCategory}
                  </span>
                  <span className="text-xs text-atlas-brown-400 font-mono">
                    {product.barcode}
                  </span>
                </div>

                {/* Product Name */}
                <h1 className="text-3xl font-bold text-atlas-dark">
                  {localizedName}
                </h1>

                {/* Company Name */}
                {product.company_name && (
                  <p className="text-lg text-atlas-gold-600 font-medium">
                    {product.company_name}
                  </p>
                )}

                {/* Price */}
                <div className="text-3xl font-bold text-atlas-gold-600">
                  ${product.price.toLocaleString()}
                </div>

                {/* Description */}
                <p className="text-atlas-brown-600 leading-relaxed">
                  {localizedDesc}
                </p>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <label className="text-atlas-brown-700 font-medium">
                      {t("orders.quantity", "Quantity")}:
                    </label>
                    <div className="flex items-center border border-atlas-brown-200 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 hover:bg-atlas-brown-50 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-atlas-brown-200">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 hover:bg-atlas-brown-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {orderSuccess && (
                    <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-800">
                      {orderSuccess}
                    </div>
                  )}
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <Button
                      size="lg"
                      className="flex-1 btn-primary-gradient"
                      asChild
                    >
                      <Link href={`/orders/new?productId=${product.id}&quantity=${quantity}`}>
                        <ShoppingBag className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                        {t("products.placeOrder", "Place Order")}
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <Link href={`/scan/${product.barcode}`}>
                        {t("products.scanBarcode", "Scan Barcode")}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-atlas-brown-200">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Truck className="h-5 w-5 text-atlas-gold-600" />
                    <span className="text-sm text-atlas-brown-600">
                      {t("products.freeShipping", "Free Shipping")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-atlas-brown-600">
                      {t("products.warranty", "Warranty")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <RotateCcw className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-atlas-brown-600">
                      {t("products.freeReturn", "Free Return")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="border-t border-atlas-brown-200 p-8">
                <h3 className="text-xl font-semibold text-atlas-dark mb-6">
                  {t("products.specifications", "Specifications")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-atlas-brown-100"
                      >
                        <span className="text-atlas-brown-600">{key}</span>
                        <span className="font-medium text-atlas-dark">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Related Products Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-atlas-dark mb-6">
              {t("products.relatedProducts", "Related Products")}
            </h2>
            <div className="text-center py-8">
              <p className="text-atlas-brown-600">
                {t(
                  "products.relatedProductsDesc",
                  "Discover more products from our catalog",
                )}
              </p>
              <Link href="/products">
                <Button className="mt-4 btn-primary-gradient">
                  {t("products.viewAllProducts", "View All Products")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
