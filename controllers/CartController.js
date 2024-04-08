// controllers/cartController.js
const Cart = require('../models/cart');

// Get all carts
exports.getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        if (carts.length === 0) {
            return res.status(404).json({ message: 'No carts found' });
        }
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single cart
exports.getCartById = async (req, res) => {
    try {
        console.log(req.params.id);
        const cart = await Cart.findById(req.params.id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new cart
exports.createCart = async (req, res) => {
    const cart = new Cart({
        productId: req.body.productId,
        quantity: req.body.quantity,
        userId: req.body.userId
    });

    try {
        const newCart = await cart.save();
        res.status(201).json({ message: 'A Item in Cart added successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a cart
exports.updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCart) {
            return res.status(404).json({ message: 'Item of cart not found' });
        }
        res.status(200).json({ message: 'A Item in Cart deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a cart
exports.deleteCart = async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id);
        if (!deletedCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json({ message: 'A Item in Cart deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
