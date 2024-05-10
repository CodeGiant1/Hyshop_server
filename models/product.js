const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: String,
  description: String,
  sku: String,
  price: Number,
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
  },
  quantityInStock: {
    type: Number,
    default: 0,
  },
  brand: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
