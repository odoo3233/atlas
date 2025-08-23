// Product Types
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  barcode: string;
  image_url: string;
  specifications: Record<string, any>;
  company_name: string;
  company_logo: string;
  created_at: string;
  updated_at: string;
}

// Exhibition Types
export interface Exhibition {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  image_url: string;
  organizer: string;
  created_at: string;
  updated_at: string;
}

// Order Types
export interface Order {
  id: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  company_name: string;
  message: string;
  status: 'new' | 'pending' | 'processing' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
  notes?: OrderNote[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product?: Product;
  quantity: number;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface OrderNote {
  id: number;
  order_id: number;
  note: string;
  created_at: string;
}

// Exhibition Registration Types
export interface ExhibitionRegistration {
  id: number;
  exhibition_id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  created_at: string;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status: number;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  barcode: string;
  image_url: string;
  specifications: Record<string, any>;
  company_name: string;
  company_logo: string;
}

// User Types
export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'user';
  created_at: string;
  updated_at: string;
}

// Stats Types
export interface DashboardStats {
  products_count: number;
  exhibitions_count: number;
  orders_count: number;
  registrations_count: number;
}