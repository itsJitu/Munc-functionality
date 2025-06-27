const addsalesPersonModel = require("../models/addsalesPerson.models");

const addsalesPerson = async (req, res) => {
  await addsalesPersonModel.create(req.body);

  console.log("Add salesman api hit");

  res.json({
    message: "salesman Name added",
  });
};

const getsalesPerson = async (req, res) => {
  try {
    const data = await addsalesPersonModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addsalesPersonControllers = {
  addsalesPerson,
  getsalesPerson,
};

module.exports = addsalesPersonControllers;
// module.exports = { addproduct };
