const express = require("express");
const productRouter = express.Router();
const {productModel} = require("../models/product.model");


productRouter.get("/get-product", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 15;
    const data = await productModel.find().limit(limit);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

productRouter.post("/add-product",async (req,res)=>{
    try {
        console.log(req.body)
        const data = new  productModel(req.body);
        console.log(data)
        await data.save();
        await res.send('New Product Added Successfully');
    } catch (error) {
        res.send(error)
    }
});

module.exports = productRouter;