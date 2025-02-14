import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";


const productService = new ProductService()

const productController = new ProductController(productService)


export {productController,productService}