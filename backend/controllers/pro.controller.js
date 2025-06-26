import Product from "../models/pro.model.js";
import mongoose from "mongoose";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products, message: "Products fetched successfully" });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Error fetching products" });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const product = req.body;
  console.log(product);

  if (!product.name || !product.image || !product.price) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, message: "Product created successfully", data: newProduct });
    console.log(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, message: "Product creation failed" });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "No such product exists" });
    }
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, message: "Product deletion failed" });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "No such product exists" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true
    });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "No such product exists" });
    }
    res.status(200).json({ success: true, message: "Product updated successfully", data: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ success: false, message: "Product updation failed" });
  }
};
