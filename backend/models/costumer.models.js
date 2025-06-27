const mongoose = require("mongoose");

const addcostumerSchema = mongoose.Schema(
  {
    customerFullName: {
      type: String,
    },
    CustomerAddress: {
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

const addcostumerModel = mongoose.model("customer-name", addcostumerSchema);

module.exports = addcostumerModel;
