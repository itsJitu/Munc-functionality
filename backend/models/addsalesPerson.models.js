const mongoose = require("mongoose");

const addsalesPersonSchema = mongoose.Schema(
  {
    salesMan: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const addsalesPersonModel = mongoose.model("salesman-name", addsalesPersonSchema);

module.exports = addsalesPersonModel;
