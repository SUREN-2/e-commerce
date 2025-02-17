import { Router } from "express"

import { adminController } from "./admin.module";

const adminRoutes = Router();

// productRoutes.get('/products', productController.getAllProductsController)
// productRoutes.get('/discountProducts', productController.getAllDiscountProductsController)
adminRoutes.post('/updateStatus', adminController.updateOrderStatusController)
adminRoutes.get('/orders', adminController.getAllOrdersController)
// productRoutes.get('/search/', productController.getProductByNameController)
// productRoutes.get('/search/pcategory/', productController.getProductByParentCategoryController)
// productRoutes.get('/search/ccategory/', productController.getProductByChildrenCategoryController)

export default adminRoutes