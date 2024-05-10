const SaleDetail = require('../models/saleDetail');

// Create a new sale detail
exports.createSaleDetail = async (req, res) => {
  try {
    const saleDetail = await SaleDetail.create(req.body);
    res.status(201).json(saleDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all sale details
exports.getAllSaleDetails = async (req, res) => {
  try {
    const saleDetails = await SaleDetail.find();
    res.json(saleDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single sale detail by ID
exports.getSaleDetailById = async (req, res) => {
  try {
    const saleDetail = await SaleDetail.findById(req.params.saleDetailID);
    if (!saleDetail) {
      return res.status(404).json({ message: 'Sale detail not found' });
    }
    res.json(saleDetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a sale detail by ID
exports.updateSaleDetail = async (req, res) => {
  try {
    const updatedSaleDetail = await SaleDetail.findByIdAndUpdate(
      req.params.saleDetailID,
      req.body,
      { new: true }
    );
    res.json(updatedSaleDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a sale detail by ID
exports.deleteSaleDetail = async (req, res) => {
  try {
    await SaleDetail.findByIdAndDelete(req.params.saleDetailID);
    res.json({ message: 'Sale detail deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
