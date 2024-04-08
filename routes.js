 
// Routes for the application
const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Pragnesh API is working ',
        message: 'Welcome to the world of Pragnesh',
    });
});

const userController = require('./controllers/UserController');

// Routes for users
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Routes for products
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// Routes for orders
router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

// Routes for cart
router.get('/carts', cartController.getAllCarts);
router.get('/carts/:id', cartController.getCartById);
router.post('/carts', cartController.createCart);
router.put('/carts/:id', cartController.updateCart);
router.delete('/carts/:id', cartController.deleteCart);

// Export API routes
module.exports = router;