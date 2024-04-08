 
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

// Export API routes
module.exports = router;