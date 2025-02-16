import { Router } from "express"

import { orderController } from "./order.module";


const orderRoutes = Router();

// productRoutes.get('/products', productController.getAllProductsController)
// productRoutes.get('/discountProducts', productController.getAllDiscountProductsController)
orderRoutes.post('/create', orderController.createOrder)
orderRoutes.get('/userorders', orderController.getUserOrderController)
// productRoutes.get('/search/', productController.getProductByNameController)
// productRoutes.get('/search/pcategory/', productController.getProductByParentCategoryController)
// productRoutes.get('/search/ccategory/', productController.getProductByChildrenCategoryController)

export default orderRoutes