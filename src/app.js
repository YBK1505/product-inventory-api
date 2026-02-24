const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use(require('./middleware/errorHandler'));

module.exports = app;
