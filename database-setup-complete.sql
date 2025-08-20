-- Complete Database Setup Script for Atlas Al-Sharq
-- Run this script to create the database and all tables

-- 1. Create the database (run this first)
CREATE DATABASE atlas_db;

-- 2. Connect to the database (run this after creating the database)
-- \c atlas_db;

-- 3. Create all tables and sample data

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  barcode VARCHAR(100) UNIQUE NOT NULL,
  image_url VARCHAR(255),
  specifications JSONB,
  company_name VARCHAR(255),
  company_logo VARCHAR(255),
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

-- Exhibitions table
CREATE TABLE IF NOT EXISTS exhibitions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  organizer VARCHAR(255),
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

-- Exhibition registrations table
CREATE TABLE IF NOT EXISTS exhibition_registrations (
  id SERIAL PRIMARY KEY,
  exhibition_id INTEGER NOT NULL REFERENCES exhibitions(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP NOT NULL
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  company_name VARCHAR(255),
  message TEXT,
  status VARCHAR(50) NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

-- Order notes table
CREATE TABLE IF NOT EXISTS order_notes (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  note TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_barcode ON products(barcode);
CREATE INDEX IF NOT EXISTS idx_products_company ON products(company_name);
CREATE INDEX IF NOT EXISTS idx_exhibitions_dates ON exhibitions(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);
CREATE INDEX IF NOT EXISTS idx_exhibition_registrations_exhibition_id ON exhibition_registrations(exhibition_id);
CREATE INDEX IF NOT EXISTS idx_order_notes_order_id ON order_notes(order_id);

-- Sample data for products
INSERT INTO products (name, description, price, category, barcode, image_url, specifications, company_name, company_logo, created_at, updated_at)
VALUES 
  ('Smart LED Panel', 'Energy-efficient LED panel with smart controls', 299.99, 'Lighting', 'ATLP001', '/products/led-panel.jpg', '{"dimensions": "60cm x 60cm", "power": "45W", "color": "White", "connectivity": "WiFi"}', 'Shenzhen Lighting Co.', '/logos/shenzhen-lighting.png', NOW(), NOW()),
  ('Solar Water Heater', 'Eco-friendly solar water heating system', 1299.99, 'Renewable Energy', 'ATLS002', '/products/solar-heater.jpg', '{"capacity": "200L", "panels": 2, "material": "Stainless Steel"}', 'Green Energy Solutions', '/logos/green-energy.png', NOW(), NOW()),
  ('Smart Home Hub', 'Central control system for smart home devices', 199.99, 'Smart Home', 'ATLH003', '/products/smart-hub.jpg', '{"compatibility": "Zigbee, Z-Wave, WiFi", "voice": "Alexa, Google Assistant"}', 'TechSmart Systems', '/logos/techsmart.png', NOW(), NOW()),
  ('Industrial Air Purifier', 'Heavy-duty air purification system for industrial use', 2499.99, 'Industrial', 'ATLA004', '/products/air-purifier.jpg', '{"coverage": "500sqm", "filter": "HEPA H13", "noise": "45dB"}', 'Industrial Solutions Ltd.', '/logos/industrial-solutions.png', NOW(), NOW()),
  ('Construction Safety Helmet', 'Advanced safety helmet with communication features', 89.99, 'Safety Equipment', 'ATLH005', '/products/safety-helmet.jpg', '{"material": "ABS", "weight": "380g", "features": "Bluetooth communication"}', 'Safety First Equipment', '/logos/safety-first.png', NOW(), NOW());

-- Sample data for exhibitions
INSERT INTO exhibitions (name, description, start_date, end_date, location, image_url, organizer, created_at, updated_at)
VALUES 
  ('Saudi-China Tech Expo 2025', 'Showcasing the latest technology innovations from China and Saudi Arabia', '2025-03-15', '2025-03-18', 'Riyadh International Convention Center, Saudi Arabia', '/exhibitions/tech-expo.jpg', 'Atlas Al-Sharq & China Tech Association', NOW(), NOW()),
  ('Saudi-China Manufacturing Forum', 'Connecting manufacturing businesses from both countries', '2025-05-10', '2025-05-12', 'Jeddah Exhibition Center, Saudi Arabia', '/exhibitions/manufacturing-forum.jpg', 'Atlas Al-Sharq & China Manufacturing Council', NOW(), NOW()),
  ('Green Energy Summit', 'Exploring sustainable energy solutions and partnerships', '2025-07-22', '2025-07-25', 'KAFD Conference Center, Riyadh, Saudi Arabia', '/exhibitions/green-energy.jpg', 'Atlas Al-Sharq & China Green Energy Association', NOW(), NOW()),
  ('Saudi-China Trade Fair 2024', 'Annual trade fair showcasing products and services', '2024-11-05', '2024-11-10', 'Dhahran Expo, Dammam, Saudi Arabia', '/exhibitions/trade-fair.jpg', 'Atlas Al-Sharq & China Trade Council', NOW(), NOW()),
  ('Healthcare Innovation Conference', 'Bringing together healthcare professionals and companies', '2024-09-18', '2024-09-20', 'King Abdullah Medical City, Makkah, Saudi Arabia', '/exhibitions/healthcare.jpg', 'Atlas Al-Sharq & China Medical Association', NOW(), NOW());

-- Add new columns to existing products table (if needed)
ALTER TABLE products ADD COLUMN IF NOT EXISTS company_name VARCHAR(255);
ALTER TABLE products ADD COLUMN IF NOT EXISTS company_logo VARCHAR(255);

-- Update existing products with company information
UPDATE products SET company_name = 'Shenzhen Lighting Co.', company_logo = '/logos/shenzhen-lighting.png' WHERE id = 1;
UPDATE products SET company_name = 'Green Energy Solutions', company_logo = '/logos/green-energy.png' WHERE id = 2;
UPDATE products SET company_name = 'TechSmart Systems', company_logo = '/logos/techsmart.png' WHERE id = 3;
UPDATE products SET company_name = 'Industrial Solutions Ltd.', company_logo = '/logos/industrial-solutions.png' WHERE id = 4;
UPDATE products SET company_name = 'Safety First Equipment', company_logo = '/logos/safety-first.png' WHERE id = 5;

-- Grant permissions (optional - for additional security)
-- CREATE USER atlas_user WITH PASSWORD 'atlas_password';
-- GRANT ALL PRIVILEGES ON DATABASE atlas_db TO atlas_user;
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO atlas_user;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO atlas_user;
