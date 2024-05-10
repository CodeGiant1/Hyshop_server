const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { productname, description, price, quantityInStock, brand } =
      req.body;
    console.log('price', price);
    // Check if required fields are provided
    console.log('description', description);
    console.log('productName', productname);
    console.log('quantityInStock', quantityInStock);

    const product = await Product.create({
      productname,
      description,
      price,
      quantityInStock,
      brand,
    });
    // res.status(201).json(product);
    res.json({ data: product, status: 'success' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productID);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productID,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productID);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
