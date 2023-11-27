const mongoose = require('mongoose');

// creating schemas

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


// turning schemas to modules
const Taxpayer = mongoose.model('Taxpayer', taxpayerSchema);
const Asset = mongoose.model('Asset', assetSchema);

module.exports = {
    Taxpayer,
    Asset
}