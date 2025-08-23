"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Barcode, Printer, Share2, ArrowLeft } from "lucide-react";

// Mock product data (would come from API/database in real implementation)
const mockProducts = [
  {
    id: "1",
    name: "Industrial Machinery XJ-5000",
    description:
      "High-performance industrial machinery for manufacturing plants with advanced automation features and energy-efficient operation.",
    price: 15000,
    category: "machinery",
    barcode: "ATLAS-PROD-001",
    image: "/products/product1.jpg",
    specifications: {
      dimensions: "2.5m x 1.8m x 2.2m",
      weight: "850 kg",
      power: "380V, 3-phase",
      capacity: "500 units/hour",
      warranty: "2 years",
    },
  },
  {
    id: "2",
    name: "Smart Factory Sensor Kit",
    description:
      "IoT sensors for smart factory monitoring and automation with real-time data collection and analysis capabilities.",
    price: 2500,
    category: "electronics",
    barcode: "ATLAS-PROD-002",
    image: "/products/product2.jpg",
    specifications: {
      sensors: "Temperature, Humidity, Vibration, Proximity",
      connectivity: "WiFi, Bluetooth, Ethernet",
      power: "24V DC or Battery (included)",
      range: "Up to 100m",
      warranty: "1 year",
    },
  },
  {
    id: "3",
    name: "Commercial Solar Panel System",
    description:
      "High-efficiency solar panels for commercial buildings with advanced energy conversion and storage solutions.",
    price: 8000,
    category: "energy",
    barcode: "ATLAS-PROD-003",
    image: "/products/product3.jpg",
    specifications: {
      panels: "20 x 350W Monocrystalline",
      efficiency: "22.5%",
      area: "40 sq.m",
      inverter: "10kW Grid-Tied",
      warranty: "25 years performance, 10 years product",
    },
  },
];

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const router = useRouter();
  const productId = (params?.id as string) || "";

  // Find the product by ID
  const product = mockProducts.find((p) => p.id === productId);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate API call
    try {
      // In a real implementation, this would be an API call to the backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setFormStatus("error");
    }
  };

  // Handle print barcode
  const handlePrintBarcode = () => {
    if (!product) return;

    // In a real implementation, this would generate a printable barcode
    window.print();
  };

  // If product not found
  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-20 flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">
            The product you are looking for does not exist.
          </p>
          <Link href="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>{t("products.title")}</span>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Image */}
              <div className="relative h-80 md:h-full bg-gray-100 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    <Barcode className="h-5 w-5 mr-2" />
                    <span>{product.barcode}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-2">USD</span>
                </div>

                <p className="text-gray-700 mb-6">{product.description}</p>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">
                    {t("products.specifications")}
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <dt className="text-gray-600 text-sm">
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                            </dt>
                            <dd className="font-medium">{value}</dd>
                          </div>
                        ),
                      )}
                    </dl>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handlePrintBarcode}
                    variant="outline"
                    className="flex items-center"
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Print Barcode
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button className="flex-1">{t("products.contactUs")}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t("orders.title")}
            </h2>

            {formStatus === "success" ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-700 mb-4">{t("orders.success")}</p>
                <Button onClick={() => setFormStatus("idle")}>
                  Submit Another Order
                </Button>
              </div>
            ) : formStatus === "error" ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-700 mb-2">
                  Error
                </h3>
                <p className="text-red-700 mb-4">{t("orders.error")}</p>
                <Button onClick={() => setFormStatus("idle")} variant="outline">
                  Try Again
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-md p-6 md:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {t("orders.form.name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {t("orders.form.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {t("orders.form.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {t("orders.form.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t("orders.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-600 text-sm">* Required fields</div>
                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="px-6"
                  >
                    {formStatus === "submitting"
                      ? "Submitting..."
                      : t("orders.form.submit")}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
