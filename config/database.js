const mongoose = require('mongoose');
require('dotenv').config();
// Connect to MongoDB
mongoose
  .connect(process.env.APP_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define your schemas and models
const Product = require('../models/product');
const Customer = require('../models/customer');
const Sale = require('../models/sale');
const SaleDetail = require('../models/saleDetail');
const PurchaseOrder = require('../models/purchaseOrder');
const OrderDetail = require('../models/orderDetail');
const Supplier = require('../models/supplier');

// Export your models
module.exports = {
  Product,
  Customer,
  Sale,
  SaleDetail,
  PurchaseOrder,
  OrderDetail,
  Supplier,
};

module.exports = mongoose.connection;
