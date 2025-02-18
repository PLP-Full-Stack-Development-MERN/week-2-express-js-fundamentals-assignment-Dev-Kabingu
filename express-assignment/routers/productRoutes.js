const express = require("express");
const productController = require ("../controllers/productController");

const productRouter = express.Router();

productRouter.get('/',productController.getProduct);
productRouter.post ('/', productController.createProduct);
productRoute.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;