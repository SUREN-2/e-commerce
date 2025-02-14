import { Router } from "express"
import { productController } from "./product.module"

const productRoutes = Router();

productRoutes.get('/products', productController.getAllProductsController)
productRoutes.get('/discountProducts', productController.getAllDiscountProductsController)
productRoutes.post('/create',productController.createProduct)
productRoutes.get('/search/', productController.getProductByNameController)
productRoutes.get('/search/pcategory/', productController.getProductByParentCategoryController)
productRoutes.get('/search/ccategory/', productController.getProductByChildrenCategoryController)

export default productRoutes