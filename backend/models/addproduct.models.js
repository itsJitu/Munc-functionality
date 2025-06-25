const mongoose = require("mongoose");

const addproductSchema = mongoose.Schema(
  {
    invoiceno: {
      type: String,
    },
    invoicedate: {
      type: Date,
    },
    invoiceDueDate: {
      type: Date,
    },
    invoiceRef: {
      type: Number,
    },
    notes: {
      type: String,
    },
    PayMethod: {
      type: String,
    },
    payAmout: {
      type: Number,
    },
    dueAmount: {
      type: Number,
    },
    productName: {
      type: String,
    },
    customer: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const addproductModel = mongoose.model("invoice", addproductSchema);

module.exports = addproductModel;
