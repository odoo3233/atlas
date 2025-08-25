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

import Link from "next/link";
import { getProductByBarcode } from "@/lib/api";
import { mockProducts } from "@/lib/mock-products";

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
        try {
          const data = await getProductByBarcode(barcode);
          setProduct(data);
          setTimeout(() => {
            router.push(`/products/${data.id}`);
          }, 2000);
        } catch (e) {
          const fallback = mockProducts.find((p) => p.barcode === barcode);
          if (fallback) {
            setProduct(fallback as any);
            setTimeout(() => {
              router.push(`/products/${fallback.id}`);
            }, 2000);
          } else {
            setError("Product not found");
          }
        }
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
      <div className="flex-1 flex items-center justify-center min-h-screen bg-atlas-brown-50">
        <div className="text-center">
          <div className="card-modern p-8 max-w-md mx-auto">
            <Loader2 className="h-12 w-12 animate-spin text-atlas-gold-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-atlas-dark mb-4">
              {t("products.scanningBarcode", "Scanning Barcode")}
            </h2>
            <p className="text-atlas-brown-600">
              {t("products.searchingProduct", "Searching for product...")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center max-w-md mx-auto">
          <div className="card-modern p-8">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              {error === "Product not found"
                ? t("products.errorNotFound", "Product Not Found")
                : t("common.error", "Error")}
            </h2>
            <p className="text-red-700 mb-6">
              {error === "Product not found"
                ? t("products.notAvailable", "Sorry, the product you are looking for is not available")
                : error || t("common.error", "An error occurred while searching for the product")}
            </p>
            <div className="space-y-3">
              <Link href="/products">
                <Button className="w-full bg-red-600 hover:bg-red-700">
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
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-atlas-brown-50">
      <div className="text-center max-w-md mx-auto">
        <div className="card-modern p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-atlas-dark mb-4">
            {t("products.productFound", "Product Found!")}
          </h2>
          <p className="text-atlas-brown-600 mb-6">
            {t(
              "products.redirectingToProduct",
              "Redirecting to product page...",
            )}
          </p>
          <div className="space-y-3">
            <Link href={`/products/${product.id}`}>
              <Button className="w-full btn-primary-gradient">
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
  );
}
