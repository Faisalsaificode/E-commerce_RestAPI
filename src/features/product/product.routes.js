// import express
import express from "express"
import ProductController from "./product.controller";

// initialize express router
const router = express.Router();

const productController = new ProductController();

//all the paths to controller methods

router.get("/", ProductController.getAllProducts)
router.get("/", ProductController.addProduct)


export default router;