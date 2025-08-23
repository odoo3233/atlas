const express = require('express');
const router = express.Router();

/**
 * @route   GET /api/exhibitions
 * @desc    Get all exhibitions
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const { upcoming } = req.query;
    
    let query = 'SELECT * FROM exhibitions';
    
    // Filter by upcoming status if specified
    if (upcoming === 'true') {
      query += ' WHERE end_date >= CURRENT_DATE ORDER BY start_date ASC';
    } else if (upcoming === 'false') {
      query += ' WHERE end_date < CURRENT_DATE ORDER BY start_date DESC';
    } else {
      query += ' ORDER BY start_date DESC';
    }
    
    const result = await req.db.query(query);
    
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/**
 * @route   GET /api/exhibitions/:id
 * @desc    Get exhibition by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await req.db.query(
      'SELECT * FROM exhibitions WHERE id = $1',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Exhibition not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/**
 * @route   POST /api/exhibitions
 * @desc    Create an exhibition
 * @access  Private (would require auth middleware in production)
 */
router.post('/', async (req, res) => {
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
    
    const result = await req.db.query(
      `INSERT INTO exhibitions 
       (name, description, start_date, end_date, location, image_url, organizer, created_at, updated_at) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW()) 
       RETURNING *`,
      [name, description, start_date, end_date, location, image_url, organizer]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/**
 * @route   PUT /api/exhibitions/:id
 * @desc    Update an exhibition
 * @access  Private (would require auth middleware in production)
 */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, 
      description, 
      start_date, 
      end_date, 
      location, 
      image_url,
      organizer 
    } = req.body;
    
    const result = await req.db.query(
      `UPDATE exhibitions 
       SET name = $1, 
           description = $2, 
           start_date = $3, 
           end_date = $4, 
           location = $5, 
           image_url = $6, 
           organizer = $7,
           updated_at = NOW()
       WHERE id = $8
       RETURNING *`,
      [name, description, start_date, end_date, location, image_url, organizer, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Exhibition not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/**
 * @route   DELETE /api/exhibitions/:id
 * @desc    Delete an exhibition
 * @access  Private (would require auth middleware in production)
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await req.db.query(
      'DELETE FROM exhibitions WHERE id = $1 RETURNING *',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Exhibition not found' });
    }
    
    res.json({ msg: 'Exhibition removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/**
 * @route   POST /api/exhibitions/:id/register
 * @desc    Register a visitor for an exhibition
 * @access  Public
 */
router.post('/:id/register', async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, 
      email, 
      phone, 
      company, 
      message 
    } = req.body;
    
    // Check if exhibition exists
    const exhibitionResult = await req.db.query(
      'SELECT * FROM exhibitions WHERE id = $1',
      [id]
    );
    
    if (exhibitionResult.rows.length === 0) {
      return res.status(404).json({ msg: 'Exhibition not found' });
    }
    
    // Register the visitor
    const result = await req.db.query(
      `INSERT INTO exhibition_registrations 
       (exhibition_id, name, email, phone, company, message, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, NOW()) 
       RETURNING *`,
      [id, name, email, phone, company, message]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/**
 * @route   GET /api/exhibitions/:id/registrations
 * @desc    Get all registrations for an exhibition
 * @access  Private (would require auth middleware in production)
 */
router.get('/:id/registrations', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await req.db.query(
      'SELECT * FROM exhibition_registrations WHERE exhibition_id = $1 ORDER BY created_at DESC',
      [id]
    );
    
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
