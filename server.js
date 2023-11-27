const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const taxpayerRoutes = require('./taxpayerRoutes'); // Import your routes
const assetRoutes = require('./assetRoutes'); // Import your routes


const app = express();
const port = process.env.port || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://admin:' + encodeURIComponent('admin@admin') + '@cluster0.htnqgcs.mongodb.net/ura?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/taxpayers', taxpayerRoutes);
app.use('/assets', assetRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
