const addproductModel = require("../models/addproduct.models");

const addproduct = async (req, res) => {

  await addproductModel.create(req.body);
  
  console.log("Add product api hit");
  
  res.json({
    message: "product added",
  });
};

const addproductControllers = {
    addproduct
};

module.exports = addproductControllers;
// module.exports = { addproduct };
