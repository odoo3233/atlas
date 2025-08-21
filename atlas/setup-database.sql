-- Atlas Al-Sharq Database Setup
-- Run this file in pgAdmin or psql

-- Create database (run this separately if database doesn't exist)
-- CREATE DATABASE atlas_db;

-- Create user (run this separately if user doesn't exist)
-- CREATE USER atlas_user WITH PASSWORD 'atlas_password';
-- GRANT ALL PRIVILEGES ON DATABASE atlas_db TO atlas_user;

-- Connect to the database
\c atlas_db;

-- Create tables
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
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  company_name VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_notes (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  note TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample products
INSERT INTO products (name, description, price, category, barcode, image_url, specifications, company_name, company_logo, created_at, updated_at)
VALUES
  ('Smart LED Panel', 'Energy-efficient LED panel with smart controls', 299.99, 'Lighting', 'ATLP001', '/products/led-panel.jpg', '{"dimensions": "60cm x 60cm", "power": "45W", "color": "White", "connectivity": "WiFi"}', 'Shenzhen Lighting Co.', '/logos/shenzhen-lighting.png', NOW(), NOW()),
  ('Industrial Robot Arm', 'Precision robotic arm for manufacturing', 15000.00, 'Automation', 'ATLP002', '/products/robot-arm.jpg', '{"payload": "10kg", "reach": "1.5m", "accuracy": "0.1mm", "axes": "6"}', 'Beijing Robotics Ltd.', '/logos/beijing-robotics.png', NOW(), NOW()),
  ('Solar Panel System', 'High-efficiency solar panel system', 2500.00, 'Renewable Energy', 'ATLP003', '/products/solar-panel.jpg', '{"power": "5kW", "efficiency": "22%", "warranty": "25 years", "type": "Monocrystalline"}', 'Shanghai Solar Tech', '/logos/shanghai-solar.png', NOW(), NOW()),
  ('Smart Home Hub', 'Central control system for smart homes', 199.99, 'Smart Home', 'ATLP004', '/products/smart-hub.jpg', '{"protocols": ["WiFi", "Zigbee", "Bluetooth"], "compatibility": "iOS/Android", "range": "100m"}', 'Hangzhou Smart Solutions', '/logos/hangzhou-smart.png', NOW(), NOW()),
  ('Medical Imaging Device', 'Advanced medical imaging equipment', 50000.00, 'Medical', 'ATLP005', '/products/medical-imaging.jpg', '{"resolution": "4K", "scan_time": "30s", "radiation": "Low", "applications": ["Cardiology", "Radiology"]}', 'Guangzhou Medical Equipment', '/logos/guangzhou-medical.png', NOW(), NOW())
ON CONFLICT (barcode) DO NOTHING;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_company ON products(company_name);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Grant permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO atlas_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO atlas_user;

-- Show created tables
\dt

-- Show sample data
SELECT * FROM products LIMIT 3;
