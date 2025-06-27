const express = require("express");
const routes = express.Router();

const {
  addsalesPerson,
  getsalesPerson,
} = require("../controllers/salesman.controllers");



routes.post("/addsalesperson", addsalesPerson);
routes.get("/getsalesperson", getsalesPerson);


module.exports = routes;
