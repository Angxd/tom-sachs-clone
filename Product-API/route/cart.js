const express = require("express");
const Cart = require("../model/Cart");
const router = express.Router();
const fs = require("fs");
const auth = require("../middlewares/auth");

// display cart information according to user
router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.find({
      status: { $ne: "INACTIVE" },
      user: req.user.id,
    })
      .populate({ path: "product" })
      .populate({ path: "user" });
    res.json(cart);
  } catch (error) {
    console.error("Error in fetching cart information", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

// display cart information
router.get("/all", async (req, res) => {
  try {
    const cart = await Cart.find()
      .populate({ path: "product" })
      .populate({ path: "user" });
    res.json(cart);
  } catch (error) {
    console.error("Error in fetching cart information", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

// add product to cart
router.post("/", auth, async (req, res, next) => {
  try {
    const { product, quantity, size, user, status } = req.body;

    const cartInfo = new Cart({
      product,
      quantity,
      size,
      user,
      status,
    });

    let setStatus = cartInfo.status;
    const checkStatus = setStatus === "ACTIVE" ? "ACTIVE" : "INACTIVE";

    cartInfo.status = checkStatus;

    await cartInfo.save();

    res.json(cartInfo);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

// update cart
router.put("/:productId", auth, async (req, res) => {
  try {
    const { product, quantity, size, user, status } = req.body;
    const { productId } = req.params;

    let cart = await Cart.findOne({ _Id: productId });

    const cartInfo = {
      product: product ?? Cart.products,
      quantity: quantity ?? Cart.quantity,
      size: size ?? Cart.size,
      user: user ?? Cart.user,
      status: status ?? Cart.status,
    };

    cart = await Cart.updateOne({ _id: productId }, { $set: cartInfo });

    let updatedCart = await Cart.findOne({ _id: productId });
    res.json(updatedCart);
  } catch (error) {
    console.error("Error in updating cart product:", error.message);
    res.status(500).json({ error: error.message });
  }
});
//delete cart products
router.delete("/:cartId", auth, async (req, res) => {
  try {
    const { cartId } = req.params;

    await Cart.deleteOne({ _id: cartId });

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error in getting product information", error);

    res.status(500).json({ message: "Error", error: error.message });
  }
});

module.exports = router;
