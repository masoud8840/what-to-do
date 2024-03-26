const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Allow-Access-Control-Origin", "*");
  res.setHeader(
    "Allow-Access-Control-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Allow-Access-Control-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", (req, res) => {
  console.log(req);
  res.status(200).json({ message: "Success" });
});

mongoose
  .connect("mongodb+srv://root:mZ09xflFqJCKUSzn@cluster0.fklaruz.mongodb.net/")
  .then((res) => {
    console.log("Mongoose Connected");
    app.listen(3000);
  })
  .catch((e) => {
    console.log("Mongoose Error");
  });
