const mongoose = require('mongoose');
Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
    description: String,
    image: String,
    pricing: Number,
    shippingCost: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports =  Product ;
