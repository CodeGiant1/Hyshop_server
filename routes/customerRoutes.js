const express = require('express');
const router = express.Router();
const customerController = require('../controllers/custormerController');

// Create a new customer
router.post('/', customerController.createCustomer);

// Get all customers
router.get('/', customerController.getAllCustomers);

// Get a single customer by ID
router.get('/:customerID', customerController.getCustomerById);

// Update a customer by ID
router.patch('/:customerID', customerController.updateCustomer);

// Delete a customer by ID
router.delete('/:customerID', customerController.deleteCustomer);

module.exports = router;
