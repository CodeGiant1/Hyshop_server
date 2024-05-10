const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  supplierID: {
    type: String,
    required: true,
    unique: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
  contactPerson: String,
  email: String,
  phone: String,
  companyName: String,
  address: String,
});

module.exports = mongoose.model('Supplier', supplierSchema);
