const mongoose = require('mongoose');

const saleDetailSchema = new mongoose.Schema({
  saleDetailID: {
    type: String,
    required: true,
    unique: true,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('SaleDetail', saleDetailSchema);
