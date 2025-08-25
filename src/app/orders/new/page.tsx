"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { mockProducts } from "@/lib/mock-products";

interface OrderFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  companyName: string;
  message: string;
  productId: string;
  quantity: number;
}

function NewOrderPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    companyName: "",
    message: "",
    productId: searchParams?.get("productId") || "",
    quantity: parseInt(searchParams?.get("quantity") || "1"),
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<OrderFormData>>({});

  const product = mockProducts.find(p => String(p.id) === formData.productId);

  useEffect(() => {
    if (formData.productId && product) {
      setFormData(prev => ({
        ...prev,
        message: `${t("orders.requestingProduct", "I am requesting")} ${formData.quantity}x ${product.name}`,
      }));
    }
  }, [formData.productId, formData.quantity, product, t]);

  const validateForm = (): boolean => {
    const newErrors: Partial<OrderFormData> = {};
    
    if (!formData.customerName.trim()) {
      newErrors.customerName = t("orders.nameRequired", "Name is required");
    }
    
    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = t("orders.emailRequired", "Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = t("orders.emailInvalid", "Please enter a valid email");
    }
    
    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = t("orders.phoneRequired", "Phone is required");
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t("orders.messageRequired", "Message is required");
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the order to your backend
      console.log("Order submitted:", formData);
      
      // Send email (in a real app, this would be done on the server)
      const emailData = {
        to: "contact@atlasecon.com",
        subject: `طلب منتج جديد - New Product Order`,
        body: `
          طلب منتج جديد / New Product Order
          
          معلومات العميل / Customer Information:
          الاسم / Name: ${formData.customerName}
          البريد الإلكتروني / Email: ${formData.customerEmail}
          الهاتف / Phone: ${formData.customerPhone}
          الشركة / Company: ${formData.companyName}
          
          تفاصيل الطلب / Order Details:
          المنتج / Product: ${product?.name || formData.productId}
          الكمية / Quantity: ${formData.quantity}
          السعر / Price: $${product?.price || 0}
          المجموع / Total: $${(product?.price || 0) * formData.quantity}
          
          الرسالة / Message:
          ${formData.message}
        `
      };
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert(t("common.error", "An error occurred"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof OrderFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-atlas-brown-50">
        <div className="text-center max-w-md mx-auto">
          <div className="card-modern p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-atlas-dark mb-4">
              {i18n.language === 'ar' ? 'تم استلام طلبك' : 'Your order has been received'}
            </h2>
            <p className="text-atlas-brown-600 mb-6">
              {t("orders.orderSuccess", "Thank you for your order. We will contact you soon to confirm the details.")}
            </p>
            <div className="space-y-3">
              <Link href="/products">
                <Button className="w-full btn-primary-gradient">
                  {t("products.browseMore", "Browse More Products")}
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  {t("common.backHome", "Back to Home")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="py-12 bg-atlas-brown-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href={product ? `/products/${product.id}` : "/products"}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-atlas-gold-600 hover:text-atlas-gold-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{t("common.back", "Back")}</span>
            </Link>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-modern p-8">
              <div className="text-center mb-8">
                <ShoppingBag className="h-12 w-12 text-atlas-gold-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-atlas-dark mb-2">
                  {t("orders.placeOrder", "Place Your Order")}
                </h1>
                <p className="text-atlas-brown-600">
                  {t("orders.fillForm", "Please fill out the form below to place your order")}
                </p>
              </div>

              {/* Product Summary */}
              {product && (
                <div className="bg-atlas-brown-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-atlas-dark mb-2">
                    {t("orders.orderSummary", "Order Summary")}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-atlas-brown-700">
                      {formData.quantity}x {product.name}
                    </span>
                    <span className="font-bold text-atlas-gold-600">
                      ${(product.price * formData.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Name */}
                <div>
                  <label className="flex items-center text-atlas-brown-700 font-medium mb-2">
                    <User className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t("orders.fullName", "Full Name")} *
                  </label>
                  <input
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => handleInputChange("customerName", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-atlas-gold-500 ${
                      errors.customerName ? "border-red-500" : "border-atlas-brown-200"
                    }`}
                    placeholder={t("orders.enterName", "Enter your full name")}
                  />
                  {errors.customerName && (
                    <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
                  )}
                </div>

                {/* Customer Email */}
                <div>
                  <label className="flex items-center text-atlas-brown-700 font-medium mb-2">
                    <Mail className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t("orders.email", "Email Address")} *
                  </label>
                  <input
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => handleInputChange("customerEmail", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-atlas-gold-500 ${
                      errors.customerEmail ? "border-red-500" : "border-atlas-brown-200"
                    }`}
                    placeholder={t("orders.enterEmail", "Enter your email address")}
                  />
                  {errors.customerEmail && (
                    <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>
                  )}
                </div>

                {/* Customer Phone */}
                <div>
                  <label className="flex items-center text-atlas-brown-700 font-medium mb-2">
                    <Phone className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t("orders.phone", "Phone Number")} *
                  </label>
                  <input
                    type="tel"
                    value={formData.customerPhone}
                    onChange={(e) => handleInputChange("customerPhone", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-atlas-gold-500 ${
                      errors.customerPhone ? "border-red-500" : "border-atlas-brown-200"
                    }`}
                    placeholder={t("orders.enterPhone", "Enter your phone number")}
                  />
                  {errors.customerPhone && (
                    <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="flex items-center text-atlas-brown-700 font-medium mb-2">
                    <Building className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t("orders.company", "Company Name")}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="w-full px-4 py-3 border border-atlas-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-atlas-gold-500"
                    placeholder={t("orders.enterCompany", "Enter your company name (optional)")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center text-atlas-brown-700 font-medium mb-2">
                    <MessageSquare className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t("orders.message", "Message")} *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-atlas-gold-500 resize-none ${
                      errors.message ? "border-red-500" : "border-atlas-brown-200"
                    }`}
                    placeholder={t("orders.enterMessage", "Enter your message or special requirements")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary-gradient text-lg py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 rtl:mr-0 rtl:ml-2"></div>
                        {t("orders.submitting", "Submitting Order...")}
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                        {t("orders.submitOrder", "Submit Order")}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function NewOrderPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center min-h-screen bg-atlas-brown-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-atlas-gold-500 mx-auto mb-4"></div>
          <p className="text-atlas-brown-600">جاري التحميل...</p>
        </div>
      </div>
    }>
      <NewOrderPageContent />
    </Suspense>
  );
}
