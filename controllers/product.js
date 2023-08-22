const ProductData = require("../models/product");

// Retrieve all users from the database.
const getAllProducts = async (req, res) => {
  try {
    const user = await ProductData.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create and Save a new user
const createProduct = async (req, res) => {
  if (
    !req.body.name &&
    !req.body.price &&
    !req.body.featured &&
    !req.body.rating &&
    !req.body.createdAt &&
    !req.body.company
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const product = new ProductData({
    name: req.body.name,
    price: req.body.price,
    featured: req.body.featured,
    rating: req.body.rating,
    createdAt: req.body.createdAt,
    company: req.body.company,
  });

  await product
    .save()
    .then((data) => {
      res.send({
        message: "Product created successfully!!",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });
};


const getAllProductTesting = async (req, res) => {
  res.status(200).json({
    msg: "I am getAllProductTesting",
  });
};

module.exports = {
  getAllProducts,
  getAllProductTesting,
  createProduct,
};
