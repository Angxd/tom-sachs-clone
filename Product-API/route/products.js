const express = require("express");
const multer = require("multer");
const Product = require("../model/Product");
const router = express.Router();
const fs = require("fs");
const upload = require("../middlewares/Upload");

/*
 * Displaying product data
 */
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.error("Error in fetching product information", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findOne({ id: productId });
    res.json(product);
  } catch (error) {
    console.error("Error in fetching product information", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ _id: id });
    res.json(product);
  } catch (error) {
    console.error("Error in fetching product information", error);

    res.status(500).json({ message: "Something has gone wrong" });
  }
});

/*
 * Create new product
 */
router.post("/", upload, async (req, res, next) => {
  try {
    const PORT = 5100;
    const protocol = req.protocol;
    const host = req.hostname;
    const fullUrl = `${protocol}://${host}:${PORT}`;

    const { id, name, price, quantity, images, description, alt } = req.body;

    //console.log("..files", req);

    const imagePaths = req.files.map((file) => fullUrl + "/" + file.path);

    const productInfo = new Product({
      id,
      name,
      price,
      quantity,
      images: imagePaths,
      description,
      alt,
    });
    await productInfo.save();

    res.json(productInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ err: err.message });
  }
});

/*
 * Editing product details
 */
router.put("/:productId", upload, async (req, res) => {
  try {
    const PORT = 5100;
    const protocol = req.protocol;
    const host = req.hostname;
    const fullUrl = `${protocol}://${host}:${PORT}`;

    const { id, name, price, quantity, images, description, alt } = req.body;
    const { productId } = req.params;

    const imagePaths = req.files?.map((file) => fullUrl + "/" + file.path);

    console.log("imagePaths", imagePaths);

    let product = await Product.findOne({ id: productId });

    const items = {
      id: id ?? product.id,
      name: name ?? product.name,
      price: price ?? product.price,
      quantity: quantity ?? product.quantity,
      images: imagePaths?.length ? imagePaths : product.images,
      description: description ?? product.description,
      alt: alt ?? product.alt,
    };

    console.log("items", items);

    product = await Product.updateOne({ id: productId }, { $set: items });

    let productUpdated = await Product.findOne({ id: id });
    res.json(productUpdated);
  } catch (error) {
    console.error("Error in updating product:", error);
    res.status(500).json({ message: "Something has gone wrong" });
  }
});

/*
 * Deleting product
 */
router.delete("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    await Product.deleteOne({ id: productId });

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error in getting product information", error);

    res.status(500).json({ message: "Error", error: error.message });
  }
});

module.exports = router;
