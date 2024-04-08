// cart.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
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
    },
  ],
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
