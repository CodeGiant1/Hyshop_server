const Supplier = require('../models/supplier');

// Create a new supplier
exports.createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single supplier by ID
exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.supplierID);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a supplier by ID
exports.updateSupplier = async (req, res) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.supplierID,
      req.body,
      { new: true }
    );
    res.json(updatedSupplier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a supplier by ID
exports.deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.supplierID);
    res.json({ message: 'Supplier deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
