const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'atlas_db',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'يرجى إدخال البريد الإلكتروني وكلمة المرور' });
    }

    // For demo purposes, using a hardcoded admin account
    // In production, this should query from a users table
    const ADMIN_EMAIL = 'admin@atlas-alsharq.com';
    const ADMIN_PASSWORD = '$2b$10$xVWHJ6YKq9LTmWZPnE3Z3O8wKlHNK7L5ZLgCcYJzQg0M8F9VZLqXa'; // hashed password for 'Admin@123'
    
    if (email !== ADMIN_EMAIL) {
      return res.status(401).json({ error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, ADMIN_PASSWORD);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        id: 1, 
        email: ADMIN_EMAIL, 
        role: 'admin' 
      },
      process.env.JWT_SECRET || 'default-secret',
      { expiresIn: '7d' }
    );

    // Return user data and token
    res.json({
      token,
      user: {
        id: 1,
        email: ADMIN_EMAIL,
        name: 'مدير النظام',
        role: 'admin'
      }
    });

  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في الخادم' });
  }
});

// Verify token endpoint
router.get('/verify', async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'لم يتم توفير رمز المصادقة' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
    
    res.json({
      user: {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role
      }
    });

  } catch (error) {
    res.status(401).json({ error: 'رمز المصادقة غير صالح' });
  }
});

// Logout endpoint (optional - mainly for clearing server-side sessions if implemented)
router.post('/logout', (req, res) => {
  res.json({ message: 'تم تسجيل الخروج بنجاح' });
});

module.exports = router;