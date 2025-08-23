require('dotenv').config({ path: './env.txt' });
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Import routes
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');
const exhibitionsRoutes = require('./routes/exhibitions');
const barcodeRoutes = require('./routes/barcode');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Database connection
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'atlas_db',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    } else {
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Make db pool available to routes
app.use((req, res, next) => {
  req.db = pool;
  next();
});

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/exhibitions', exhibitionsRoutes);
app.use('/api/barcode', barcodeRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Atlas Al-Sharq API is running');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: 'Connected'
  });
});

// Start server
app.listen(PORT, () => {
  });

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  // Close server & exit process
  // server.close(() => process.exit(1));
});
