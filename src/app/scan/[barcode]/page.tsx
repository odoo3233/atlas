"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Package,
  AlertCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

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
}

export default function ScanBarcodePage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductByBarcode = async () => {
      try {
        setLoading(true);
        setError(null);

        const barcode = params?.barcode as string;
        if (!barcode) {
          throw new Error("Barcode not found");
        }
        const response = await fetch(
          `http://localhost:5001/api/products/barcode/${barcode}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Product not found");
          }
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        setProduct(data);

        // Auto-redirect to product page after a short delay
        setTimeout(() => {
          router.push(`/products/${data.id}`);
        }, 2000);
      } catch (err) {
        console.error("Error fetching product by barcode:", err);
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (params?.barcode) {
      fetchProductByBarcode();
    }
  }, [params?.barcode, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <div className="pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("products.scanningBarcode", "Scanning Barcode")}
              </h2>
              <p className="text-gray-600">
                {t("products.searchingProduct", "Searching for product...")}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <div className="pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {error === "Product not found"
                    ? "Product Not Found"
                    : "Error"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {error === "Product not found"
                    ? `No product found with barcode: ${params?.barcode || "unknown"}`
                    : error ||
                      "An error occurred while searching for the product"}
                </p>
                <div className="space-y-3">
                  <Link href="/products">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      {t("products.browseProducts", "Browse Products")}
                    </Button>
                  </Link>
                  <Link href="/barcode-scanner">
                    <Button variant="outline" className="w-full">
                      {t("products.tryAnotherBarcode", "Try Another Barcode")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("products.productFound", "Product Found!")}
              </h2>
              <p className="text-gray-600 mb-6">
                {t(
                  "products.redirectingToProduct",
                  "Redirecting to product page...",
                )}
              </p>
              <div className="space-y-3">
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {t("products.viewProductNow", "View Product Now")}
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    {t("products.browseMore", "Browse More Products")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
