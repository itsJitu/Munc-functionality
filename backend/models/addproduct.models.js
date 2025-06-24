const mongoose = require("mongoose");

const addproductSchema = mongoose.Schema(
  {
    invoiceid: {
      type: String,
    },
    productname: {
      type: String,
    },
    customer: {
      type: String,
    },
    orderDate: {
      type: String,
    },
    totalamount: {
      type: Number,
    },
    status: {
      type: String,
    },
    dueamout: {
      type: Number,
    },
    duedate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const addproductModel = mongoose.model("product", addproductSchema);

module.exports = addproductModel;
