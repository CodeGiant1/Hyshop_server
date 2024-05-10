const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
    unique: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Supplier',
    required: true,
  },
});

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
