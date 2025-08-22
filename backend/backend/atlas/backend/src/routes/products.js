const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'atlas_alsharq',
  password: 'your_password',
  port: 5432,
});

// Get all products with specifications and company info
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.*,
        json_agg(
          json_build_object(
            'id', o.id,
            'customer_name', o.customer_name,
            'customer_email', o.customer_email,
            'customer_phone', o.customer_phone,
            'company_name', o.company_name,
            'message', o.message,
            'status', o.status,
            'created_at', o.created_at,
            'notes', (
              SELECT json_agg(
                json_build_object(
                  'id', on.id,
                  'note', on.note,
                  'created_at', on.created_at
                )
              ) FROM order_notes on WHERE on.order_id = o.id
            )
          )
        ) FILTER (WHERE o.id IS NOT NULL) as orders
      FROM products p
      LEFT JOIN order_items oi ON p.id = oi.product_id
      LEFT JOIN orders o ON oi.order_id = o.id
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get product by ID with orders
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query(`
      SELECT 
        p.*,
        json_agg(
          json_build_object(
            'id', o.id,
            'customer_name', o.customer_name,
            'customer_email', o.customer_email,
            'customer_phone', o.customer_phone,
            'company_name', o.company_name,
            'message', o.message,
            'status', o.status,
            'quantity', oi.quantity,
            'created_at', o.created_at,
            'notes', (
              SELECT json_agg(
                json_build_object(
                  'id', on.id,
                  'note', on.note,
                  'created_at', on.created_at
                )
              ) FROM order_notes on WHERE on.order_id = o.id
            )
          )
        ) FILTER (WHERE o.id IS NOT NULL) as orders
      FROM products p
      LEFT JOIN order_items oi ON p.id = oi.product_id
      LEFT JOIN orders o ON oi.order_id = o.id
      WHERE p.id = $1
      GROUP BY p.id
    `, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get product by barcode
router.get('/barcode/:barcode', async (req, res) => {
  try {
    const { barcode } = req.params;
    
    const result = await pool.query(`
      SELECT 
        p.*,
        json_agg(
          json_build_object(
            'id', o.id,
            'customer_name', o.customer_name,
            'customer_email', o.customer_email,
            'customer_phone', o.customer_phone,
            'company_name', o.company_name,
            'message', o.message,
            'status', o.status,
            'quantity', oi.quantity,
            'created_at', o.created_at,
            'notes', (
              SELECT json_agg(
                json_build_object(
                  'id', on.id,
                  'note', on.note,
                  'created_at', on.created_at
                )
              ) FROM order_notes on WHERE on.order_id = o.id
            )
          )
        ) FILTER (WHERE o.id IS NOT NULL) as orders
      FROM products p
      LEFT JOIN order_items oi ON p.id = oi.product_id
      LEFT JOIN orders o ON oi.order_id = o.id
      WHERE p.barcode = $1
      GROUP BY p.id
    `, [barcode]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching product by barcode:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new product
router.post('/', async (req, res) => {
  try {
    const { 
      name, 
      description, 
      price, 
      category, 
      barcode, 
      image_url, 
      specifications,
      company_name,
      company_logo 
    } = req.body;
    
    // Generate unique barcode if not provided
    let finalBarcode = barcode;
    if (!finalBarcode) {
      finalBarcode = 'ATLAS' + Date.now() + Math.floor(Math.random() * 1000);
    }
    
    const result = await pool.query(`
      INSERT INTO products (
        name, description, price, category, barcode, image_url, 
        specifications, company_name, company_logo, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
      RETURNING *
    `, [name, description, price, category, finalBarcode, image_url, specifications, company_name, company_logo]);
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating product:', error);
    if (error.code === '23505') { // Unique violation
      return res.status(400).json({ error: 'Barcode already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, 
      description, 
      price, 
      category, 
      barcode, 
      image_url, 
      specifications,
      company_name,
      company_logo 
    } = req.body;
    
    const result = await pool.query(`
      UPDATE products 
      SET name = $1, description = $2, price = $3, category = $4, 
          barcode = $5, image_url = $6, specifications = $7, 
          company_name = $8, company_logo = $9, updated_at = NOW()
      WHERE id = $10
      RETURNING *
    `, [name, description, price, category, barcode, image_url, specifications, company_name, company_logo, id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating product:', error);
    if (error.code === '23505') { // Unique violation
      return res.status(400).json({ error: 'Barcode already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generate barcode for product
router.post('/:id/generate-barcode', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Generate unique barcode
    const barcode = 'ATLAS' + Date.now() + Math.floor(Math.random() * 1000);
    
    const result = await pool.query(`
      UPDATE products 
      SET barcode = $1, updated_at = NOW()
      WHERE id = $2
      RETURNING *
    `, [barcode, id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ barcode: result.rows[0].barcode });
  } catch (error) {
    console.error('Error generating barcode:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get product orders with customer management
router.get('/:id/orders', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query(`
      SELECT 
        o.*,
        oi.quantity,
        json_agg(
          json_build_object(
            'id', on.id,
            'note', on.note,
            'created_at', on.created_at
          )
        ) FILTER (WHERE on.id IS NOT NULL) as notes
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN order_notes on ON o.id = on.order_id
      WHERE oi.product_id = $1
      GROUP BY o.id, oi.quantity
      ORDER BY o.created_at DESC
    `, [id]);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching product orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
