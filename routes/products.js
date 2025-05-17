const express = require('express');
const router = express.Router();
const {
  createProduct, updateProduct, deleteProduct,
  getAllProducts, getProduct
} = require('../controllers/productController');
const protect = require('../middleware/auth');
const checkRole = require('../middleware/roleCheck');

// Public Routes
router.get('/', getAllProducts);
router.get('/:id', getProduct);

// Admin-only Routes
router.post('/', protect, checkRole('admin'), createProduct);
router.put('/:id', protect, checkRole('admin'), updateProduct);
router.delete('/:id', protect, checkRole('admin'), deleteProduct);

module.exports = router;
