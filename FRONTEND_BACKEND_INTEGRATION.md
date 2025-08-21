# Frontend-Backend Integration Documentation

## Overview

This document describes the complete integration between the Next.js frontend (port 3000) and Node.js/Express backend (port 5000) for the Atlas Al-Sharq project.

## 🚀 Quick Start

### 1. Start the Backend Server
```bash
cd backend
npm install
npm start
```
The backend will run on `http://localhost:5001`

### 2. Start the Frontend Server
```bash
npm install
npm run dev
```
The frontend will run on `http://localhost:3000`

### 3. Test the Connection
```bash
node test-connection.js
```

## 📋 API Endpoints

### Products API
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/barcode/:barcode` - Get product by barcode
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders API
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order

### Exhibitions API
- `GET /api/exhibitions` - Get all exhibitions

### Health Check
- `GET /api/health` - Server health status

## 🛠️ Frontend Pages

### 1. Products List Page (`/products`)
- **File**: `src/app/products/page.tsx`
- **Features**:
  - Fetches products from backend API
  - Search functionality
  - Category filtering
  - Product cards with images, prices, and company info
  - Links to product details and barcode scanning

### 2. Product Details Page (`/products/[id]`)
- **File**: `src/app/products/[id]/page.tsx`
- **Features**:
  - Fetches individual product from backend API
  - Displays product specifications
  - Company information
  - Add to cart functionality
  - Link to barcode scanning

### 3. Barcode Scanner Page (`/barcode-scanner`)
- **File**: `src/app/barcode-scanner/page.tsx`
- **Features**:
  - Manual barcode input
  - Product search by barcode
  - Product display with details
  - Link to product page

### 4. Barcode Scan Result Page (`/scan/[barcode]`)
- **File**: `src/app/scan/[barcode]/page.tsx`
- **Features**:
  - Auto-redirects to product page
  - Error handling for invalid barcodes
  - Loading states

## 🌐 Internationalization (i18n)

The application supports three languages:
- **English** (`en.json`)
- **Arabic** (`ar.json`)
- **Chinese** (`zh.json`)

### Product-related translations added:
- Product titles and descriptions
- Categories (Lighting, Renewable Energy, Smart Home, Industrial, Safety Equipment)
- UI elements (buttons, labels, messages)
- Error messages and loading states

## 🗄️ Database Schema

The backend uses PostgreSQL with the following product structure:

```sql
CREATE TABLE products (
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
```

## 📊 Sample Data

The database includes 5 sample products:
1. **Smart LED Panel** - Lighting category
2. **Solar Water Heater** - Renewable Energy category
3. **Smart Home Hub** - Smart Home category
4. **Industrial Air Purifier** - Industrial category
5. **Construction Safety Helmet** - Safety Equipment category

Each product includes:
- Name and description
- Price and category
- Unique barcode
- Company information
- Specifications (JSON format)
- Image URLs

## 🔧 Configuration

### Backend Configuration
- **Port**: 5001
- **Database**: PostgreSQL (atlas_db)
- **CORS**: Enabled for frontend access
- **Environment**: Uses `env.txt` for configuration

### Frontend Configuration
- **Port**: 3000
- **API Base URL**: `http://localhost:5001`
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS

## 🚨 Error Handling

### Frontend Error Handling
- Network errors with retry options
- Product not found messages
- Loading states for better UX
- Graceful fallbacks for missing data

### Backend Error Handling
- Database connection errors
- Invalid product ID/barcode responses
- CORS error prevention
- Proper HTTP status codes

## 🔍 Testing

### Manual Testing
1. Visit `http://localhost:3000/products` to see all products
2. Click on any product to view details
3. Use the barcode scanner to search by barcode
4. Test different languages using the language switcher

### Automated Testing
Run the connection test:
```bash
node test-connection.js
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend not starting**
   - Check if PostgreSQL is running
   - Verify database credentials in `env.txt`
       - Ensure port 5001 is available

2. **Frontend can't connect to backend**
       - Verify backend is running on port 5001
   - Check CORS configuration
   - Ensure no firewall blocking the connection

3. **Products not loading**
   - Check database connection
   - Verify sample data is inserted
   - Check browser console for errors

4. **Translation issues**
   - Verify translation files are properly formatted
   - Check if language switcher is working
   - Ensure all keys are present in all language files

### Debug Commands

```bash
# Check backend status
curl http://localhost:5001/api/health

# Check products API
curl http://localhost:5001/api/products

# Check specific product
curl http://localhost:5001/api/products/1

# Check barcode API
curl http://localhost:5001/api/products/barcode/ATLP001
```

## 📈 Performance Considerations

- Frontend uses Next.js Image optimization
- Backend implements proper database indexing
- API responses are cached where appropriate
- Lazy loading for product images
- Efficient database queries with proper joins

## 🔒 Security

- CORS properly configured for frontend domain
- Input validation on all API endpoints
- SQL injection prevention with parameterized queries
- No sensitive data exposed in API responses

## 📝 Future Enhancements

1. **Real-time Updates**: WebSocket integration for live product updates
2. **Advanced Search**: Full-text search with filters
3. **Image Upload**: Product image management
4. **User Authentication**: User accounts and favorites
5. **Shopping Cart**: Persistent cart functionality
6. **Payment Integration**: Online payment processing
7. **Mobile App**: React Native mobile application

## 🤝 Contributing

When adding new features:
1. Update API endpoints in backend
2. Add corresponding frontend pages
3. Update translation files for all languages
4. Add proper error handling
5. Test with the connection script
6. Update this documentation

---

**Last Updated**: December 2024
**Version**: 1.0.0
