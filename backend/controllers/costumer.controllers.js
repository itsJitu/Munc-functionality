const addcostumerModel = require("../models/costumer.models");

const addcostumer = async (req, res) => {
  await addcostumerModel.create(req.body);

  console.log("Add costumer api hit");

  res.json({
    message: "costumer added",
  });
};

const getcostumer = async (req, res) => {
  try {
    const data = await addcostumerModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addcostumerControllers = {
  addcostumer,
  getcostumer,
};

module.exports = addcostumerControllers;
// module.exports = { addproduct };
