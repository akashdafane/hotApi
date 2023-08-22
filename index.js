// const express = require('express')
require("dotenv").config();
const connectDB = require("./db/conn");

// const product_routes = require("./routes/product");

// const app = express()

// // app.use(express.json())

// app.use("/api/products", product_routes)

// // app.get("/", async(req, res) => {
// //     res.send("Hello from the shree")
// // })

const PORT = process.env.PORT || 5000;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRoute = require("./routes/user");
const ProductRoute = require("./routes/product");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/user", UserRoute);
app.use("/api", ProductRoute);
// Replace 'your_database_url' with your actual MongoDB connection URL
// const DB_URL = "mongodb://127.0.0.1:27017/student"; // Example URL

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("eeee", error);
  }
};

start();
