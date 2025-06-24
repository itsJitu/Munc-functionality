const express = require("express");
const routes = express.Router();

const { addproduct } = require("../controllers/addproduct.controllers");

routes.post("/addproduct", addproduct);

module.exports = routes;
