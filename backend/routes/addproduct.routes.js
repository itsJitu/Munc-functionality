const express = require("express");
const routes = express.Router();

const {
  addproduct,
  getproduct,
} = require("../controllers/addproduct.controllers");



routes.post("/addproduct", addproduct);
routes.get("/addproduct", getproduct);


module.exports = routes;
