# Atlas Al-Sharq Backend API

Backend API for Atlas Al-Sharq Exhibitions & Conferences website built with Node.js and Express.

## Features

- RESTful API endpoints for products, orders, exhibitions, and barcode management
- PostgreSQL database integration
- CORS enabled for cross-origin requests
- Environment variable configuration
- Health check endpoint

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/barcode/:barcode` - Get product by barcode
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/status/:status` - Get orders by status
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status

### Exhibitions
- `GET /api/exhibitions` - Get all exhibitions
- `GET /api/exhibitions/:id` - Get exhibition by ID
- `POST /api/exhibitions` - Create new exhibition
- `PUT /api/exhibitions/:id` - Update exhibition
- `DELETE /api/exhibitions/:id` - Delete exhibition

### Barcode
- `POST /api/barcode/generate` - Generate barcode for product
- `GET /api/barcode/scan/:barcode` - Get product by barcode
- `GET /api/barcode/print` - Get all barcodes for printing

## Environment Variables

Create a `.env` file with the following variables:

```env
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=atlas_db
DB_PASSWORD=postgres
DB_PORT=5432
NODE_ENV=development
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables
4. Start the server:
   ```bash
   npm start
   ```

## Development

For development with auto-restart:
```bash
npm run dev
```

## Health Check

Visit `/api/health` to check if the API is running properly.

## Deployment

This project is configured to deploy on Render:

1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Configure environment variables in Render dashboard
