const mongoose = require("mongoose");

const addedProductsSchema = mongoose.Schema(
  {
    products: {
      type: String,
    },
    title: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    tax: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    totalAmount: {
        type: Number,
   }
  },
  {
    timestamps: true,
  }
);

const addedProductsModel = mongoose.model("addedProducts", addedProductsSchema);

module.exports = addedProductsModel;
