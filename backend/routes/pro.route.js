import express from "express";  
import { getProducts, updateProduct ,createProduct,deleteProduct } from "../controllers/pro.controller.js";


const router = express.Router() ;

// get method - to get all the products
router.get("/" , getProducts) ;

// post method - to create a product
router.post("/" , createProduct) ;

// delete the product
router.delete("/:id" , deleteProduct) ;

// update the product
router.put("/:id" , updateProduct) ;


export default router ;