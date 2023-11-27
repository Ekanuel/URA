const mongoose = require('mongoose');

const taxpayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  expectedAnnualIncome: {
    type: Number,
    required: true,
  },
  tin: {
    type: String,
    required: true,
    unique: true,
  },
});

const Taxpayer = mongoose.model('Taxpayer', taxpayerSchema);

module.exports = Taxpayer;

const express = require('express');
const router = express.Router();
const Taxpayer = require('./taxpayerModel'); // Import your model

router.post('/registerTaxpayer', async (req, res) => {
  try {
    const newTaxpayer = new Taxpayer(req.body);
    const savedTaxpayer = await newTaxpayer.save();
    res.status(201).json(savedTaxpayer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


// asset module
const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  estimatedCost: {
    type: Number,
    required: true,
  },
  ownerTIN: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Fixed', 'Movable'],
    required: true,
  },
  assetCode: {
    type: String,
    required: true,
    unique: true,
  },
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;

const express = require('express');
const Asset = require('./assetModel'); // Import your model

router.post('/registerAsset', async (req, res) => {
  try {
    const newAsset = new Asset(req.body);
    const savedAsset = await newAsset.save();
    res.status(201).json(savedAsset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

