"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Camera,
  QrCode,
  ArrowLeft,
  Package,
  Building,
  Tag,
  ShoppingCart,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  barcode: string;
  image_url: string;
  specifications: any;
  company_name: string;
  company_logo: string;
}

export default function BarcodeScanner() {
  const { t } = useTranslation();
  const [scannedBarcode, setScannedBarcode] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBarcodeInput = async (barcode: string) => {
    if (!barcode.trim()) return;

    setLoading(true);
    setError("");
    setProduct(null);

    try {
      const response = await fetch(
        `http://localhost:5001/api/products/barcode/${barcode}`,
      );

      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setScannedBarcode(barcode);
      } else {
        setError("Barcode not found in database");
      }
    } catch (error) {
      setError("Error occurred while searching for product");
    } finally {
      setLoading(false);
    }
  };

  const handleManualInput = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const barcode = formData.get("barcode") as string;
    handleBarcodeInput(barcode);
  };

  const resetScan = () => {
    setProduct(null);
    setError("");
    setScannedBarcode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Barcode Scanner
          </h1>
          <p className="text-gray-600">
            Scan product barcode to view details and place orders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scanner Section */}
          <div className="space-y-6">
            {/* Manual Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <QrCode className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                Manual Barcode Input
              </h2>
              <form onSubmit={handleManualInput} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Barcode Number
                  </label>
                  <input
                    type="text"
                    name="barcode"
                    placeholder="Enter barcode number here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  {loading ? "Searching..." : "Search Product"}
                </Button>
              </form>
            </div>

            {/* Camera Scanner Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Camera className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                Camera Scanner
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Camera barcode scanning feature will be added soon
                </p>
                <Button variant="outline" disabled>
                  Enable Camera
                </Button>
              </div>
            </div>

            {/* Scan Status */}
            {product && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 ml-2 rtl:ml-0 rtl:mr-2" />
                  <div>
                    <h3 className="font-semibold text-green-800">
                      Product Found
                    </h3>
                    <p className="text-green-600 text-sm">
                      Barcode: {scannedBarcode}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={resetScan}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                >
                  New Scan
                </Button>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center">
                  <XCircle className="w-6 h-6 text-red-600 ml-2 rtl:ml-0 rtl:mr-2" />
                  <div>
                    <h3 className="font-semibold text-red-800">Search Error</h3>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
                <Button
                  onClick={resetScan}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {product ? (
              <>
                {/* Product Info */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.image_url || "/products/default-product.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {product.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-blue-600">
                        ${product.price.toLocaleString()}
                      </div>
                      <div className="flex items-center text-green-600">
                        <Package className="w-5 h-5 ml-1 rtl:ml-0 rtl:mr-1" />
                        <span className="font-medium">In Stock</span>
                      </div>
                    </div>

                    {/* Company Info */}
                    {product.company_name && (
                      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4 p-3 bg-gray-50 rounded-lg">
                        {product.company_logo && (
                          <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <Image
                              src={product.company_logo}
                              alt={product.company_name}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-800">
                            {product.company_name}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Barcode Info */}
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <p className="text-sm text-gray-500 mb-2">
                        Barcode Number
                      </p>
                      <p className="font-mono text-lg font-bold">
                        {product.barcode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                {product.specifications && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Tag className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                      Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b border-gray-100"
                          >
                            <span className="font-medium text-gray-700">
                              {key}
                            </span>
                            <span className="text-gray-600">
                              {value as string}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Order Button */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <ShoppingCart className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2" />
                    Order Product
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Click the button below to go to the product page and
                    complete your purchase
                  </p>
                  <Link href={`/products/${product.id}`}>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      Order Product Now
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center text-gray-500">
                  <QrCode className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    No Barcode Scanned
                  </h3>
                  <p className="text-gray-600">
                    Scan a product barcode or enter it manually to view details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
