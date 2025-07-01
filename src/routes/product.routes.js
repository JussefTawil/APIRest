const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authenticateToken = require('../middlewares/auth.middleware');
const authorizeRoles = require('../middlewares/role.middleware');

router.get('/', authenticateToken, productController.getAll);
router.get('/:id', authenticateToken, productController.getById);
router.post('/', authenticateToken, authorizeRoles('admin'), productController.create);
router.put('/:id', authenticateToken, authorizeRoles('admin'), productController.update);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), productController.delete);

module.exports = router; 