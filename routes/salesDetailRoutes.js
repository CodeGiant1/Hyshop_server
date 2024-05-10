const express = require('express');
const router = express.Router();
const saleDetailController = require('../controllers/saleDetailController');

// Create a new sale detail
router.post('/', saleDetailController.createSaleDetail);

// Get all sale details
router.get('/', saleDetailController.getAllSaleDetails);

// Get a single sale detail by ID
router.get('/:saleDetailID', saleDetailController.getSaleDetailById);

// Update a sale detail by ID
router.patch('/:saleDetailID', saleDetailController.updateSaleDetail);

// Delete a sale detail by ID
router.delete('/:saleDetailID', saleDetailController.deleteSaleDetail);

module.exports = router;
