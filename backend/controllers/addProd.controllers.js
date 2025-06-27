const addprodModel = require("../models/addprod.models");

const addprod = async (req, res) => {
  await addprodModel.create(req.body);

  console.log("Added products api hit");

  res.json({
    message: "products added",
  });
};

const getprod = async (req, res) => {
  try {
    const data = await addprodModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addprodControllers = {
  addprod,
  getprod,
};

module.exports = addprodControllers;
// module.exports = { addproduct };
