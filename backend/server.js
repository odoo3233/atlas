require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Import routes
const productsRoutes = require('./src/routes/products');
const ordersRoutes = require('./src/routes/orders');
const exhibitionsRoutes = require('./src/routes/exhibitions');
const barcodeRoutes = require('./src/routes/barcode');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Database connection for Render
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.EXTERNAL_DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  // Fallback for local development
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'atlas_db',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

// Function to setup database tables
async function setupDatabase() {
  try {
    console.log('🔧 Setting up database tables...');
    
    // Read schema file
    const schemaPath = path.join(__dirname, 'src', 'db', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute schema
    await pool.query(schema);
    
    console.log('✅ Database tables created successfully!');
    
    // Verify tables
    const tablesResult = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    console.log('📋 Available tables:');
    tablesResult.rows.forEach(row => {
      console.log(`  - ${row.table_name}`);
    });
    
  } catch (error) {
    console.log('⚠️ Database setup warning:', error.message);
    console.log('Tables might already exist or there was a minor issue.');
  }
}

// Test database connection and setup tables
pool.query('SELECT NOW()', async (err, res) => {
  if (err) {
    console.error('Database connection error:', err.message);
    console.log('Database connection failed. Please check your environment variables.');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    console.log('DB_HOST:', process.env.DB_HOST || 'localhost');
    console.log('DB_NAME:', process.env.DB_NAME || 'atlas_db');
    console.log('DB_USER:', process.env.DB_USER || 'postgres');
  } else {
    console.log('Database connected successfully');
    console.log('Database timestamp:', res.rows[0].now);
    
    // Setup tables after successful connection
    await setupDatabase();
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
app.get('/api/health', async (req, res) => {
  try {
    // Test database connection
    const dbResult = await pool.query('SELECT NOW()');
    
    // Check if tables exist
    const tablesResult = await pool.query(`
      SELECT COUNT(*) as table_count
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      database: 'Connected',
      dbTimestamp: dbResult.rows[0].now,
      environment: process.env.NODE_ENV || 'development',
      tablesCount: parseInt(tablesResult.rows[0].table_count)
    });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({ 
      status: 'ERROR', 
      timestamp: new Date().toISOString(),
      database: 'Disconnected',
      error: error.message,
      environment: process.env.NODE_ENV || 'development'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Database URL: ${process.env.DATABASE_URL ? 'Set' : 'Not set'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection:', err);
});
