const Customer = require('../models/customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerID);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.customerID,
      req.body,
      { new: true }
    );
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.customerID);
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
