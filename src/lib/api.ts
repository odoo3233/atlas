// API Configuration
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://atlas-ha7k.onrender.com";

// Custom Error Types
export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

// API Client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    timeoutMs: number = 12000,
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      signal: controller.signal,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      clearTimeout(timeout);

      if (!response.ok) {
        throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
      }

      return await response.json();
    } catch (error: any) {
      console.error("API request failed:", error);
      if (error instanceof ApiError) {
        throw error;
      }
      if (error?.name === 'AbortError') {
        throw new NetworkError('Network request timed out');
      }
      throw new NetworkError('Network request failed');
    }
  }

  // Health Check
  async healthCheck() {
    return this.request<{
      status: string;
      database: string;
      tablesCount: number;
      environment: string;
    }>("/api/health");
  }

  // Products
  async getProducts() {
    return this.request<any[]>("/api/products");
  }

  async getProduct(id: string) {
    return this.request<any>(`/api/products/${id}`);
  }

  async getProductByBarcode(barcode: string) {
    return this.request<any>(`/api/products/barcode/${barcode}`);
  }

  async createProduct(productData: any) {
    return this.request<any>("/api/products", {
      method: "POST",
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(id: string, productData: any) {
    return this.request<any>(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(id: string) {
    return this.request<any>(`/api/products/${id}`, {
      method: "DELETE",
    });
  }

  // Orders
  async getOrders() {
    return this.request<any[]>("/api/orders");
  }

  async getOrder(id: string) {
    return this.request<any>(`/api/orders/${id}`);
  }

  async createOrder(orderData: any) {
    return this.request<any>("/api/orders", {
      method: "POST",
      body: JSON.stringify(orderData),
    });
  }

  async updateOrderStatus(id: string, status: string) {
    return this.request<any>(`/api/orders/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
  }

  // Exhibitions
  async getExhibitions() {
    return this.request<any[]>("/api/exhibitions");
  }

  async getExhibition(id: string) {
    return this.request<any>(`/api/exhibitions/${id}`);
  }

  async createExhibition(exhibitionData: any) {
    return this.request<any>("/api/exhibitions", {
      method: "POST",
      body: JSON.stringify(exhibitionData),
    });
  }

  async updateExhibition(id: string, exhibitionData: any) {
    return this.request<any>(`/api/exhibitions/${id}`, {
      method: "PUT",
      body: JSON.stringify(exhibitionData),
    });
  }

  async deleteExhibition(id: string) {
    return this.request<any>(`/api/exhibitions/${id}`, {
      method: "DELETE",
    });
  }

  // Barcode
  async generateBarcode(productId: string) {
    return this.request<any>("/api/barcode/generate", {
      method: "POST",
      body: JSON.stringify({ product_id: productId }),
    });
  }

  async scanBarcode(barcode: string) {
    return this.request<any>(`/api/barcode/scan/${barcode}`);
  }

  async getBarcodesForPrint() {
    return this.request<any>("/api/barcode/print");
  }

  async validateBarcode(barcode: string) {
    return this.request<any>(`/api/barcode/validate/${barcode}`);
  }
}

// Create and export API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// Export individual functions for convenience
export const {
  healthCheck,
  getProducts,
  getProduct,
  getProductByBarcode,
  createProduct,
  updateProduct,
  deleteProduct,
  getOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
  getExhibitions,
  getExhibition,
  createExhibition,
  updateExhibition,
  deleteExhibition,
  generateBarcode,
  scanBarcode,
  getBarcodesForPrint,
  validateBarcode,
} = apiClient;
