"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function OrdersPage() {
  const { t } = useTranslation();
  const [orderNumber, setOrderNumber] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [orderResult, setOrderResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // New order form state
  const [newOrder, setNewOrder] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    companyName: "",
    message: "",
    productId: "",
    quantity: 1,
  });

  // Handle order tracking form submission
  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setOrderResult(null);

    // In a real implementation, this would make an API call to the backend
    // For now, we'll simulate a response after a delay
    setTimeout(() => {
      setIsLoading(false);

      // Simulate finding an order (only for demo purposes)
      if (orderNumber === "ORD12345" && orderEmail.includes("@")) {
        setOrderResult({
          id: "ORD12345",
          status: "processing",
          date: "2025-08-10",
          items: [
            { name: "Smart LED Panel", quantity: 2, price: 299.99 },
            { name: "Solar Water Heater", quantity: 1, price: 1299.99 },
          ],
          customer: {
            name: "Mohammed Al-Farsi",
            email: orderEmail,
            company: "Green Energy Solutions",
          },
        });
      } else {
        setError(t("orders.trackingError"));
      }
    }, 1500);
  };

  // Handle new order form submission
  const handleNewOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate form
    if (
      !newOrder.customerName ||
      !newOrder.customerEmail ||
      !newOrder.customerPhone
    ) {
      setError(t("orders.formError"));
      setIsLoading(false);
      return;
    }

    // In a real implementation, this would make an API call to the backend
    // For now, we'll simulate a response after a delay
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);

      // Reset form
      setNewOrder({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        companyName: "",
        message: "",
        productId: "",
        quantity: 1,
      });
    }, 1500);
  };

  // Handle input change for new order form
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Orders Hero */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("orders.title")}
          </h1>
          <p className="text-xl max-w-2xl">{t("orders.subtitle")}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Track Order Section */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">
              {t("orders.trackOrder")}
            </h2>

            {!orderResult ? (
              <form onSubmit={handleTrackOrder} className="space-y-4">
                <div>
                  <label
                    htmlFor="orderNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.orderNumber")}
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. ORD12345"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="orderEmail"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.email")}
                  </label>
                  <input
                    type="email"
                    id="orderEmail"
                    value={orderEmail}
                    onChange={(e) => setOrderEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("common.loading")}
                    </>
                  ) : (
                    t("orders.track")
                  )}
                </Button>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {t("orders.orderDetails")}
                  </h3>
                  <Button
                    variant="outline"
                    onClick={() => setOrderResult(null)}
                  >
                    {t("common.back")}
                  </Button>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        {t("orders.orderNumber")}
                      </p>
                      <p className="font-medium">{orderResult.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {t("orders.date")}
                      </p>
                      <p className="font-medium">{orderResult.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {t("orders.status")}
                      </p>
                      <p className="font-medium capitalize">
                        {orderResult.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {t("orders.customer")}
                      </p>
                      <p className="font-medium">{orderResult.customer.name}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">{t("orders.items")}</h4>
                  <div className="border rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t("orders.product")}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t("orders.quantity")}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t("orders.price")}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orderResult.items.map((item: any, index: number) => (
                          <tr key={index}>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.name}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                              {item.quantity}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                              ${item.price.toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">{t("orders.total")}</h4>
                  <p className="text-xl font-bold">
                    $
                    {orderResult.items
                      .reduce(
                        (sum: number, item: any) =>
                          sum + item.price * item.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* New Order Section */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">{t("orders.newOrder")}</h2>

            {formSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t("orders.thankYou")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("orders.orderReceived")}
                </p>
                <Button onClick={() => setFormSubmitted(false)}>
                  {t("orders.submitAnother")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleNewOrder} className="space-y-4">
                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.name")} *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={newOrder.customerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="customerEmail"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.email")} *
                  </label>
                  <input
                    type="email"
                    id="customerEmail"
                    name="customerEmail"
                    value={newOrder.customerEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="customerPhone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.phone")} *
                  </label>
                  <input
                    type="tel"
                    id="customerPhone"
                    name="customerPhone"
                    value={newOrder.customerPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.company")}
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={newOrder.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="productId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.product")}
                  </label>
                  <select
                    id="productId"
                    name="productId"
                    value={newOrder.productId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{t("orders.selectProduct")}</option>
                    <option value="1">Smart LED Panel</option>
                    <option value="2">Solar Water Heater</option>
                    <option value="3">Smart Home Hub</option>
                    <option value="4">Industrial Air Purifier</option>
                    <option value="5">Construction Safety Helmet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.quantity")}
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={newOrder.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("orders.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={newOrder.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("common.loading")}
                    </>
                  ) : (
                    t("orders.submit")
                  )}
                </Button>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            )}
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
