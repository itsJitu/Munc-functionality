const express = require("express");
const mongoose = require("mongoose");
const addproductRoutes = require("./routes/addproduct.routes");
const app = express();
const PORT = 8080;

//mongodb
mongoose
  .connect(
    "mongodb+srv://diwakarkumar9451:q25VWZnOQD6z7ea1@cluster0.cbg1gqz.mongodb.net/test"
  )
  .then(() => console.log("database connected successfully"))
  .catch((error) => console.log(`${error}`));

//for json datatype
app.use(express.json());

//Api
app.use("/api", addproductRoutes);

app.listen(
  PORT,
  console.log(`server is up running at http://localhost:${PORT}`)
);
