const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Create a new supplier
router.post('/', supplierController.createSupplier);

// Get all suppliers
router.get('/', supplierController.getAllSuppliers);

// Get a single supplier by ID
router.get('/:supplierID', supplierController.getSupplierById);

// Update a supplier by ID
router.patch('/:supplierID', supplierController.updateSupplier);

// Delete a supplier by ID
router.delete('/:supplierID', supplierController.deleteSupplier);

module.exports = router;
