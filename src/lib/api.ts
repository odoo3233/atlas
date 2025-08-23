import { Product, Exhibition, Order, ApiResponse, DashboardStats } from '@/types';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://atlas-ha7k.onrender.com';

// API Client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  // Health Check
  async healthCheck() {
    return this.request<{
      status: string;
      database: string;
      tablesCount: number;
      environment: string;
    }>('/api/health');
  }

  // Admin Stats
  async getAdminStats() {
    return this.request<DashboardStats>('/api/admin/stats');
  }

  // Products
  async getProducts() {
    return this.request<Product[]>('/api/products');
  }

  async getProduct(id: string) {
    return this.request<Product>(`/api/products/${id}`);
  }

  async getProductByBarcode(barcode: string) {
    return this.request<Product>(`/api/products/barcode/${barcode}`);
  }

  async createProduct(productData: Partial<Product>) {
    return this.request<Product>('/api/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(id: string, productData: Partial<Product>) {
    return this.request<Product>(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(id: string) {
    return this.request<{ message: string }>(`/api/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Orders
  async getOrders() {
    return this.request<Order[]>('/api/orders');
  }

  async getOrder(id: string) {
    return this.request<Order>(`/api/orders/${id}`);
  }

  async createOrder(orderData: Partial<Order>) {
    return this.request<Order>('/api/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async updateOrderStatus(id: string, status: Order['status']) {
    return this.request<Order>(`/api/orders/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  // Exhibitions
  async getExhibitions() {
    return this.request<Exhibition[]>('/api/exhibitions');
  }

  async getExhibition(id: string) {
    return this.request<Exhibition>(`/api/exhibitions/${id}`);
  }

  async createExhibition(exhibitionData: Partial<Exhibition>) {
    return this.request<Exhibition>('/api/exhibitions', {
      method: 'POST',
      body: JSON.stringify(exhibitionData),
    });
  }

  async updateExhibition(id: string, exhibitionData: Partial<Exhibition>) {
    return this.request<Exhibition>(`/api/exhibitions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(exhibitionData),
    });
  }

  async deleteExhibition(id: string) {
    return this.request<{ message: string }>(`/api/exhibitions/${id}`, {
      method: 'DELETE',
    });
  }

  // Barcode
  async generateBarcode(productId: string) {
    return this.request<any>('/api/barcode/generate', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId }),
    });
  }

  async scanBarcode(barcode: string) {
    return this.request<any>(`/api/barcode/scan/${barcode}`);
  }

  async getBarcodesForPrint() {
    return this.request<any>('/api/barcode/print');
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
