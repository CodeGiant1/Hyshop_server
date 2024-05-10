const express = require('express');
const router = express.Router();
const purchaseOrderController = require('../controllers/purchaseOrderController');

// Create a new purchase order
router.post('/', purchaseOrderController.createPurchaseOrder);

// Get all purchase orders
router.get('/', purchaseOrderController.getAllPurchaseOrders);

// Get a single purchase order by ID
router.get('/:purchaseOrderID', purchaseOrderController.getPurchaseOrderById);

// Update a purchase order by ID
router.patch('/:purchaseOrderID', purchaseOrderController.updatePurchaseOrder);

// Delete a purchase order by ID
router.delete('/:purchaseOrderID', purchaseOrderController.deletePurchaseOrder);

module.exports = router;
