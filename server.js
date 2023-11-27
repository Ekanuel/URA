const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// const taxpayerRoutes = require('./taxpayerRoutes'); // Import your routes
// const assetRoutes = require('./assetRoutes'); // Import your routes
const userRoutes = require('./userRoutes');

const app = express();
const port = process.env.port || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://admin:' + encodeURIComponent('admin@admin') + '@cluster0.htnqgcs.mongodb.net/ura?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.get('/taxpayers', userRoutes.loadTaxPayer);
app.get('/assets', userRoutes.loadAsset);

//handling registration routes
app.post('/taxpayers/registerTaxpayer', userRoutes.taxPayerRegistration);
app.post('/assets/registerAsset', userRoutes.assetRegistration);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
