const Cart = require("../models/Cart");

// Add to Cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, name, price, image } = req.body;

    const existingItem = await Cart.findOne({
      user: req.user._id,
      productId,
    });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json({ success: true, message: "Quantity updated" });
    }

    const newItem = new Cart({
      user: req.user._id,
      productId,
      name,
      price,
      image,
    });

    await newItem.save();

    res.status(201).json({
      success: true,
      message: "Item added to cart",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

// Get User Cart
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user._id });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ success: false });
  }
};