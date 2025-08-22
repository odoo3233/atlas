const express = require('express');
const router = express.Router();

// Generate barcode for product
router.post('/generate', async (req, res) => {
  try {
    const { product_id } = req.body;
    
    // Generate unique barcode
    const barcode = 'ATLAS' + Date.now() + Math.floor(Math.random() * 1000);
    
    const result = await req.db.query(`
      UPDATE products 
      SET barcode = $1, updated_at = NOW()
      WHERE id = $2
      RETURNING id, name, barcode
    `, [barcode, product_id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({
      success: true,
      barcode: result.rows[0].barcode,
      product: {
        id: result.rows[0].id,
        name: result.rows[0].name
      }
    });
  } catch (error) {
    console.error('Error generating barcode:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get product by barcode
router.get('/scan/:barcode', async (req, res) => {
  try {
    const { barcode } = req.params;
    
    const result = await req.db.query(`
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
    
    res.json({
      success: true,
      product: result.rows[0]
    });
  } catch (error) {
    console.error('Error scanning barcode:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all barcodes for printing
router.get('/print', async (req, res) => {
  try {
    const result = await req.db.query(`
      SELECT 
        id, name, barcode, category, company_name, company_logo
      FROM products 
      ORDER BY category, name
    `);
    
    res.json({
      success: true,
      barcodes: result.rows
    });
  } catch (error) {
    console.error('Error fetching barcodes for printing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get barcodes by category
router.get('/print/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    
    const result = await req.db.query(`
      SELECT 
        id, name, barcode, category, company_name, company_logo
      FROM products 
      WHERE category = $1
      ORDER BY name
    `, [category]);
    
    res.json({
      success: true,
      category: category,
      barcodes: result.rows
    });
  } catch (error) {
    console.error('Error fetching barcodes by category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get barcodes by company
router.get('/print/company/:company', async (req, res) => {
  try {
    const { company } = req.params;
    
    const result = await req.db.query(`
      SELECT 
        id, name, barcode, category, company_name, company_logo
      FROM products 
      WHERE company_name = $1
      ORDER BY category, name
    `, [company]);
    
    res.json({
      success: true,
      company: company,
      barcodes: result.rows
    });
  } catch (error) {
    console.error('Error fetching barcodes by company:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Validate barcode format
router.get('/validate/:barcode', async (req, res) => {
  try {
    const { barcode } = req.params;
    
    // Check if barcode exists
    const result = await req.db.query(`
      SELECT id, name, category, company_name
      FROM products 
      WHERE barcode = $1
    `, [barcode]);
    
    if (result.rows.length === 0) {
      return res.json({
        valid: false,
        message: 'Barcode not found'
      });
    }
    
    res.json({
      valid: true,
      product: result.rows[0]
    });
  } catch (error) {
    console.error('Error validating barcode:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get barcode statistics
router.get('/stats', async (req, res) => {
  try {
    const stats = await req.db.query(`
      SELECT 
        COUNT(*) as total_products,
        COUNT(DISTINCT category) as total_categories,
        COUNT(DISTINCT company_name) as total_companies,
        COUNT(CASE WHEN barcode IS NOT NULL THEN 1 END) as products_with_barcode
      FROM products
    `);
    
    const categoryStats = await req.db.query(`
      SELECT 
        category,
        COUNT(*) as product_count,
        COUNT(CASE WHEN barcode IS NOT NULL THEN 1 END) as barcode_count
      FROM products
      GROUP BY category
      ORDER BY product_count DESC
    `);
    
    const companyStats = await req.db.query(`
      SELECT 
        company_name,
        COUNT(*) as product_count,
        COUNT(CASE WHEN barcode IS NOT NULL THEN 1 END) as barcode_count
      FROM products
      WHERE company_name IS NOT NULL
      GROUP BY company_name
      ORDER BY product_count DESC
    `);
    
    res.json({
      success: true,
      overall: stats.rows[0],
      byCategory: categoryStats.rows,
      byCompany: companyStats.rows
    });
  } catch (error) {
    console.error('Error fetching barcode statistics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
