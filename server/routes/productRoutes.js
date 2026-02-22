const express = require("express");
const router = express.Router();   // ✅ THIS WAS MISSING

const { getProducts, getSingleProduct } = require("../controllers/productController");

// Get all products
router.get("/products", getProducts);

// Get single product
router.get("/products/:id", getSingleProduct);

module.exports = router;   // ✅ Export router