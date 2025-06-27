const express = require("express");
const routes = express.Router();

const {
  addcostumer,
  getcostumer,
} = require("../controllers/costumer.controllers");



routes.post("/addcostumer", addcostumer);
routes.get("/getcostumer", getcostumer);


module.exports = routes;
