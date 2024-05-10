const Sale = require('../models/sale');

// Create a new sale
exports.createSale = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all sales
exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single sale by ID
exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.saleID);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.json(sale);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a sale by ID
exports.updateSale = async (req, res) => {
  try {
    const updatedSale = await Sale.findByIdAndUpdate(
      req.params.saleID,
      req.body,
      { new: true }
    );
    res.json(updatedSale);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a sale by ID
exports.deleteSale = async (req, res) => {
  try {
    await Sale.findByIdAndDelete(req.params.saleID);
    res.json({ message: 'Sale deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
