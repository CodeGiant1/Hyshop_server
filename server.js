// server.js
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./config/database'); // Import your database connection
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const saleRoutes = require('./routes/saleRoutes');
const salesDetailRoutes = require('./routes/salesDetailRoutes');
const purchaseOrderRoutes = require('./routes/purchaseOrderRoutes');
// const orderDetailRoutes = require('./routes/orderDetailRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const ProductService = require('./services/productService');

const app = express();

// Use the existing database connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Middleware
  app.use(express.json());

  app.post('/products', async (req, res) => {
    try {
      // Destructure properties from req.body
      const { productname, description, price, quantityInStock, brand } =
        req.body;

      // Log the received data for debugging
      console.log('Received data:', req.body);

      // Call ProductService to create the product
      const product = await ProductService.createProduct({
        productname,
        description,
        price,
        quantityInStock,
        brand,
      });

      // Send the created product as response
      res.status(201).json({ data: product, status: 'success' });
    } catch (err) {
      // Handle errors
      console.error('Error creating product:', err);
      res.status(400).json({ message: err.message });
    }
  });

  // Routes
  app.use('/api/products', productRoutes);
  app.use('/api/customers', customerRoutes);
  app.use('/api/sales', saleRoutes);
  app.use('/api/sale-details', salesDetailRoutes);
  app.use('/api/purchase-orders', purchaseOrderRoutes);
  // app.use('/api/order-details', orderDetailRoutes);
  app.use('/api/suppliers', supplierRoutes);

  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
