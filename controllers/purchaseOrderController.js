const PurchaseOrder = require('../models/purchaseOrder');

// Create a new purchase order
exports.createPurchaseOrder = async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrder.create(req.body);
    res.status(201).json(purchaseOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all purchase orders
exports.getAllPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find();
    res.json(purchaseOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single purchase order by ID
exports.getPurchaseOrderById = async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrder.findById(
      req.params.purchaseOrderID
    );
    if (!purchaseOrder) {
      return res.status(404).json({ message: 'Purchase order not found' });
    }
    res.json(purchaseOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a purchase order by ID
exports.updatePurchaseOrder = async (req, res) => {
  try {
    const updatedPurchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      req.params.purchaseOrderID,
      req.body,
      { new: true }
    );
    res.json(updatedPurchaseOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a purchase order by ID
exports.deletePurchaseOrder = async (req, res) => {
  try {
    await PurchaseOrder.findByIdAndDelete(req.params.purchaseOrderID);
    res.json({ message: 'Purchase order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
