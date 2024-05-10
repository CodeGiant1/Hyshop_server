const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
  orderDetailID: {
    type: String,
    required: true,
    unique: true,
  },
  orderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PurchaseOrder',
    required: true,
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

module.exports = mongoose.model('OrderDetail', orderDetailSchema);
