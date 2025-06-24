const mongoose = require("mongoose");

const addproductSchema = mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    }
});

const addproductModel = mongoose.model("product", addproductSchema);

module.exports = addproductModel;