const express = require('express');
const router = express.Router();

// Get all orders with product details and notes
router.get('/', async (req, res) => {
  try {
    const result = await req.db.query(`
      SELECT 
        o.*,
        json_agg(
          json_build_object(
            'id', oi.id,
            'product_id', oi.product_id,
            'product_name', p.name,
            'product_barcode', p.barcode,
            'product_image', p.image_url,
            'quantity', oi.quantity,
            'price', oi.price
          )
        ) FILTER (WHERE oi.id IS NOT NULL) as items,
        json_agg(
          json_build_object(
            'id', on.id,
            'note', on.note,
            'created_at', on.created_at
          )
        ) FILTER (WHERE on.id IS NOT NULL) as notes
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      LEFT JOIN order_notes on ON o.id = on.order_id
      GROUP BY o.id
      ORDER BY o.created_at DESC
    `);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get orders by status
router.get('/status/:status', async (req, res) => {
  try {
    const { status } = req.params;
    
    const result = await req.db.query(`
      SELECT 
        o.*,
        json_agg(
          json_build_object(
            'id', oi.id,
            'product_id', oi.product_id,
            'product_name', p.name,
            'product_barcode', p.barcode,
            'quantity', oi.quantity,
            'price', oi.price
          )
        ) FILTER (WHERE oi.id IS NOT NULL) as items,
        json_agg(
          json_build_object(
            'id', on.id,
            'note', on.note,
            'created_at', on.created_at
          )
        ) FILTER (WHERE on.id IS NOT NULL) as notes
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      LEFT JOIN order_notes on ON o.id = on.order_id
      WHERE o.status = $1
      GROUP BY o.id
      ORDER BY o.created_at DESC
    `, [status]);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching orders by status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get order by ID with full details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await req.db.query(`
      SELECT 
        o.*,
        json_agg(
          json_build_object(
            'id', oi.id,
            'product_id', oi.product_id,
            'product_name', p.name,
            'product_barcode', p.barcode,
            'product_image', p.image_url,
            'product_specifications', p.specifications,
            'quantity', oi.quantity,
            'price', oi.price
          )
        ) FILTER (WHERE oi.id IS NOT NULL) as items,
        json_agg(
          json_build_object(
            'id', on.id,
            'note', on.note,
            'created_at', on.created_at
          )
        ) FILTER (WHERE on.id IS NOT NULL) as notes
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      LEFT JOIN order_notes on ON o.id = on.order_id
      WHERE o.id = $1
      GROUP BY o.id
    `, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new order
router.post('/', async (req, res) => {
  const client = await req.db.connect();
  
  try {
    await client.query('BEGIN');
    
    const { 
      customer_name, 
      customer_email, 
      customer_phone, 
      company_name, 
      message, 
      items 
    } = req.body;
    
    // Create order
    const orderResult = await client.query(`
      INSERT INTO orders (
        customer_name, customer_email, customer_phone, company_name, 
        message, status, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, 'new', NOW(), NOW())
      RETURNING *
    `, [customer_name, customer_email, customer_phone, company_name, message]);
    
    const order = orderResult.rows[0];
    
    // Add order items
    if (items && items.length > 0) {
      for (const item of items) {
        await client.query(`
          INSERT INTO order_items (
            order_id, product_id, quantity, price, created_at, updated_at
          ) VALUES ($1, $2, $3, $4, NOW(), NOW())
        `, [order.id, item.product_id, item.quantity, item.price]);
      }
    }
    
    await client.query('COMMIT');
    
    // Return the complete order with items
    const completeOrder = await req.db.query(`
      SELECT 
        o.*,
        json_agg(
          json_build_object(
            'id', oi.id,
            'product_id', oi.product_id,
            'product_name', p.name,
            'product_barcode', p.barcode,
            'quantity', oi.quantity,
            'price', oi.price
          )
        ) FILTER (WHERE oi.id IS NOT NULL) as items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      WHERE o.id = $1
      GROUP BY o.id
    `, [order.id]);
    
    res.status(201).json(completeOrder.rows[0]);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.release();
  }
});

// Update order status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const validStatuses = ['new', 'processing', 'contacted', 'shipped', 'completed', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    
    const result = await req.db.query(`
      UPDATE orders 
      SET status = $1, updated_at = NOW()
      WHERE id = $2
      RETURNING *
    `, [status, id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add note to order (for customer management)
router.post('/:id/notes', async (req, res) => {
  try {
    const { id } = req.params;
    const { note } = req.body;
    
    // Check if order exists
    const orderCheck = await req.db.query('SELECT id FROM orders WHERE id = $1', [id]);
    if (orderCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    const result = await req.db.query(`
      INSERT INTO order_notes (order_id, note, created_at)
      VALUES ($1, $2, NOW())
      RETURNING *
    `, [id, note]);
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding note to order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get order notes
router.get('/:id/notes', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await req.db.query(`
      SELECT * FROM order_notes 
      WHERE order_id = $1 
      ORDER BY created_at DESC
    `, [id]);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching order notes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update order note
router.put('/notes/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    const { note } = req.body;
    
    const result = await req.db.query(`
      UPDATE order_notes 
      SET note = $1, updated_at = NOW()
      WHERE id = $2
      RETURNING *
    `, [note, noteId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete order note
router.delete('/notes/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    
    const result = await req.db.query(`
      DELETE FROM order_notes 
      WHERE id = $1 
      RETURNING *
    `, [noteId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }
    
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get orders by customer email
router.get('/customer/:email', async (req, res) => {
  try {
    const { email } = req.params;
    
    const result = await req.db.query(`
      SELECT 
        o.*,
        json_agg(
          json_build_object(
            'id', oi.id,
            'product_id', oi.product_id,
            'product_name', p.name,
            'product_barcode', p.barcode,
            'quantity', oi.quantity,
            'price', oi.price
          )
        ) FILTER (WHERE oi.id IS NOT NULL) as items,
        json_agg(
          json_build_object(
            'id', on.id,
            'note', on.note,
            'created_at', on.created_at
          )
        ) FILTER (WHERE on.id IS NOT NULL) as notes
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN products p ON oi.product_id = p.id
      LEFT JOIN order_notes on ON o.id = on.order_id
      WHERE o.customer_email = $1
      GROUP BY o.id
      ORDER BY o.created_at DESC
    `, [email]);
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching customer orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
