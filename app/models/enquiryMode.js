// models/enquirymodeModel.js
const mongoose = require('mongoose');

const enquirymodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  updatedBy: {
    type: String,
  },
});

const Enquirymode = mongoose.model('Enquirymode', enquirymodeSchema);

module.exports = Enquirymode;