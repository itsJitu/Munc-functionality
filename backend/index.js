const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const addproductRoutes = require("./routes/addproduct.routes");
const addcostumerRoutes = require("./routes/costumer.routes");
const addprodRoutes = require("./routes/addprod.routes");
const addsalesPerson = require("./routes/salesPerson.routes")
const app = express();
const PORT = 8080;


//cors
const corsOptions = {
    origin : "http://localhost:5173",
    methods: "GET , POST , PUT , DELETE ,PATCH, HEAD",
    Credential:true,
};

//mongodb
mongoose
  .connect(
    "mongodb+srv://diwakarkumar9451:q25VWZnOQD6z7ea1@cluster0.cbg1gqz.mongodb.net/munc"
  )
  .then(() => console.log("database connected successfully"))
  .catch((error) => console.log(`${error}`));

//for json datatype
app.use(express.json());
app.use(cors(corsOptions));

//Api
app.use("/api", addproductRoutes);
app.use("/api", addcostumerRoutes);
app.use("/api", addprodRoutes);
app.use("/api", addsalesPerson);

app.listen(
  PORT,
  console.log(`server is up running at http://localhost:${PORT}`)
);
