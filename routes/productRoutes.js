const express = require('express');
const app = express();
const router = express.Router();
const productController = require('../controllers/productController');
app.use(express.json());
// Create a new product
app.post('/', productController.createProduct);

// Get all products
app.get('/', productController.getAllProducts);

// Get a single product by ID
app.get('/:productID', productController.getProductById);

// Update a product by ID
app.patch('/:productID', productController.updateProduct);

// Delete a product by ID
app.delete('/:productID', productController.deleteProduct);

module.exports = app;
