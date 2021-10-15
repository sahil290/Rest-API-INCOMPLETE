const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url = "mongodb://localhost/FoodDBex";
//Middle Wares//
const cartRouter = require("./routers/cartRoute.js");
app.use("/cartRoute", cartRouter);
app.use(express.json());
// DB CONNECTION//

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
//CONNECTED TO DB//
con.on("open", () => {
  console.log("Connected");
});
app.listen(9000, () => {
  console.log("Server is running");
});
