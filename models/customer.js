const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerID: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: String,
  phone: {
    type: Number,
    required: true,
  },
  address: String,
});

module.exports = mongoose.model('Customer', customerSchema);
