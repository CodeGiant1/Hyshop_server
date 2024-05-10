const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

// Create a new sale
router.post('/', saleController.createSale);

// Get all sales
router.get('/', saleController.getAllSales);

// Get a single sale by ID
router.get('/:saleID', saleController.getSaleById);

// Update a sale by ID
router.patch('/:saleID', saleController.updateSale);

// Delete a sale by ID
router.delete('/:saleID', saleController.deleteSale);

module.exports = router;
