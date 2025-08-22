const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

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

async function setupDatabase() {
  try {
    console.log('Connecting to database...');
    
    // Test connection
    const testResult = await pool.query('SELECT NOW()');
    console.log('✅ Database connected successfully');
    console.log('Database timestamp:', testResult.rows[0].now);
    
    // Read schema file
    const schemaPath = path.join(__dirname, 'src', 'db', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('📖 Reading schema file...');
    console.log('Schema file path:', schemaPath);
    
    // Execute schema
    console.log('🔧 Creating tables and inserting sample data...');
    await pool.query(schema);
    
    console.log('✅ Database setup completed successfully!');
    
    // Verify tables
    const tablesResult = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    console.log('📋 Created tables:');
    tablesResult.rows.forEach(row => {
      console.log(`  - ${row.table_name}`);
    });
    
    // Count records
    const productsCount = await pool.query('SELECT COUNT(*) FROM products');
    const exhibitionsCount = await pool.query('SELECT COUNT(*) FROM exhibitions');
    
    console.log(`📊 Sample data inserted:`);
    console.log(`  - Products: ${productsCount.rows[0].count}`);
    console.log(`  - Exhibitions: ${exhibitionsCount.rows[0].count}`);
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.error('Error details:', error);
  } finally {
    await pool.end();
  }
}

// Run setup
setupDatabase();
