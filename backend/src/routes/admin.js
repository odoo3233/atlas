const express = require('express');
const router = express.Router();

// Admin middleware (يمكن إضافة authentication هنا)
const adminAuth = (req, res, next) => {
  // يمكن إضافة authentication logic هنا
  next();
};

// Add new product
router.post('/products', adminAuth, async (req, res) => {
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

    const result = await req.db.query(`
      INSERT INTO products (
        name, description, price, category, barcode, 
        image_url, specifications, company_name, company_logo, 
        created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
      RETURNING *
    `, [name, description, price, category, barcode, image_url, specifications, company_name, company_logo]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add new exhibition
router.post('/exhibitions', adminAuth, async (req, res) => {
  try {
    const {
      name,
      description,
      start_date,
      end_date,
      location,
      image_url,
      organizer
    } = req.body;

    const result = await req.db.query(`
      INSERT INTO exhibitions (
        name, description, start_date, end_date, 
        location, image_url, organizer, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
      RETURNING *
    `, [name, description, start_date, end_date, location, image_url, organizer]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update product
router.put('/products/:id', adminAuth, async (req, res) => {
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

    const result = await req.db.query(`
      UPDATE products SET 
        name = $1, description = $2, price = $3, category = $4,
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
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete product
router.delete('/products/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await req.db.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get database statistics
router.get('/stats', adminAuth, async (req, res) => {
  try {
    const productsCount = await req.db.query('SELECT COUNT(*) FROM products');
    const exhibitionsCount = await req.db.query('SELECT COUNT(*) FROM exhibitions');
    const ordersCount = await req.db.query('SELECT COUNT(*) FROM orders');
    const registrationsCount = await req.db.query('SELECT COUNT(*) FROM exhibition_registrations');

    res.json({
      products: parseInt(productsCount.rows[0].count),
      exhibitions: parseInt(exhibitionsCount.rows[0].count),
      orders: parseInt(ordersCount.rows[0].count),
      registrations: parseInt(registrationsCount.rows[0].count)
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
