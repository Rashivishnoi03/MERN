const express = require("express");
const productsController = require('../controllers/productsControllers.js');
const productRouter = express.Router();

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct);


productRouter.route('/:id')
.put(productsController.replaceProducts)
module.exports = productRouter;