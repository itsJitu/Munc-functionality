const mongoose = require("mongoose");

const addproductSchema = mongoose.Schema(
  {
    invoiceno: {
      type: String,
    },
    invoicedate: {
      type: String,
    },
    invoiceDueDate: {
      type: String,
      required: false,
      default: "--"
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
    customerName: {
      type: String,
    },
    status: {
      type: String,
    },
    title: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const addproductModel = mongoose.model("invoice", addproductSchema);

module.exports = addproductModel;
