const express = require("express");
const router = express.Router();
const {
  getAllProductTesting,
  getAllProducts,
  createProduct,
} = require("../controllers/product");

router.get("/", getAllProducts);
router.post("/product", createProduct);
router.get("/testing", getAllProductTesting);

module.exports = router;
