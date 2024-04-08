// order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
    quantity: {
        type: Number,
        default: 1,
        validate: {
          validator: function (value) {
            return value > 0;
          },
          message: "Minimum quantity is one",
        },
      },
    orderDate: Date
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
