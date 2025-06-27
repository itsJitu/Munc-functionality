const express = require("express");
const routes = express.Router();

const {
  addprod,
  getprod,
} = require("../controllers/addProd.controllers");



routes.post("/addprod", addprod);
routes.get("/getprod", getprod);


module.exports = routes;
