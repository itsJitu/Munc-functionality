const addproductModel = require("../models/addproduct.models");

const addproduct = async (req, res) => {
  await addproductModel.create(req.body);

  console.log("Add product api hit");

  res.json({
    message: "product added",
  });
};
const getproduct = async (req, res) => {
  try {
    const data = await addproductModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addproductControllers = {
  addproduct,
  getproduct,
};

module.exports = addproductControllers;
// module.exports = { addproduct };
