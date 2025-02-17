import { Request, Response } from "express";
import { aysncHandler } from "../../middlewares/aysncHandler";
// import { ProductService } from "./product.service";
import { HTTPSTATUS } from "../../config/http.config";

import mongoose, { ObjectId } from "mongoose";
import {
  categorySchema,
  OrderSchema,
  productSchema,
  searchSchema,
} from "../../validators/validator";
import { AdminService } from "./admin.service";
import { Types } from "mongoose";

export class AdminController {
  private adminService: AdminService;

  constructor(adminService: AdminService) {
    this.adminService = adminService;
  }

  public getAllOrdersController = aysncHandler(
      async(req: Request,res: Response): Promise<any> => {
        const users = (req as any).user;

        // console.log('user called')
        
        const data = await this.adminService.getOrdersWithStats()
      return res.status(HTTPSTATUS.ACCEPTED).json({
              message : "Status Changed",
              data: data
      })
      }
  )

  public updateOrderStatusController = aysncHandler(
    async(req: Request,res: Response): Promise<any> => {
      const users = (req as any).user;

      const {orderId, orderStatus} = req.body
      // console.log('user called')
      
      const data = await this.adminService.updateOrderStatusById(orderId,orderStatus)
    return res.status(HTTPSTATUS.ACCEPTED).json({
            message : "User Orders Fetched",
            data: data
    })
    }
)

  // public getAllDiscountProductsController = aysncHandler(
  //     async(req: Request,res: Response): Promise<any> => {
  //         const data = await this.productService.getDiscountProductService()
  //     return res.status(HTTPSTATUS.ACCEPTED).json({
  //             message : "All Discount Products Fetched Successfully",
  //             data: data
  //     })
  //     }
  // )

  // public createOrder = aysncHandler(
  //   async (req: Request, res: Response): Promise<any> => {
  //     console.log("Order creation started...");
  
  //     // Parse request body
  //     const parsedData = OrderSchema.parse(req.body);
  
  //     // Extract user details from request
  //     const users = (req as any).user;
  //     console.log(`User ID:`, users.payload.userId);
  //     const userId = new Types.ObjectId(users.payload.userId);
  
  //     // Extract the address
  //     const address = parsedData.address;



  //     // Validate if address exists
  //     if (!address || typeof address !== "object") {
  //       return res.status(HTTPSTATUS.BAD_REQUEST).json({
  //         message: "Invalid address. Address is required for placing an order",
  //       });
  //     }

  //     const addressWithUser = { 
  //       ...address, 
  //       user: userId ,
  //       lastName: address.lastName ?? "" // Fixes TypeScript error
  //     };
  
  //     // Convert string IDs to ObjectId
  //     const formattedData = {
  //       ...parsedData,
  //       user: userId,
  //       orderedAt: parsedData.orderedAt
  //         ? new Date(parsedData.orderedAt)
  //         : new Date(),
  //       updatedAt: parsedData.updatedAt
  //         ? new Date(parsedData.updatedAt)
  //         : new Date(),
  //       items: parsedData.items.map((item) => {
  //         if (!Types.ObjectId.isValid(item.product)) {
  //           throw new Error(`Invalid Product ID: ${item.product}`);
  //         }
  //         return {
  //           ...item,
  //           product: new Types.ObjectId(item.product),
  //         };
  //       }),
  //     };
  
  //     // Pass formatted data and address to the service function
  //     const data = await this.orderService.createOrder(formattedData, addressWithUser);
  
  //     return res.status(HTTPSTATUS.CREATED).json({
  //       message: "Order created successfully",
  //       data: data,
  //     });
  //   }
  // );
  

  // public getProductByNameController = aysncHandler(
  //     async(req: Request, res: Response): Promise<any> => {

  //         const body = searchSchema.parse(req.query)

  //         const data = await this.productService.getProductByName(body.name);
  //     return res.status(HTTPSTATUS.OK).json({
  //             message : "fetched",
  //             data : data
  //         })
  //     }
  // )

  // public getProductByParentCategoryController = aysncHandler(
  //     async(req: Request, res: Response): Promise<any> => {
  //        console.log('fldld',req)
  //         const body = categorySchema.parse(req.query)

  //         console.log('from ',body.category)
  //         const data = await this.productService.getProductByParentCatergory(decodeURIComponent(body.category));
  //     return res.status(HTTPSTATUS.OK).json({
  //             message : "fetched",
  //             data : data
  //         })
  //     }
  // )

  // public getProductByChildrenCategoryController = aysncHandler(
  //     async(req: Request, res: Response): Promise<any> => {

  //         const body = categorySchema.parse(req.query)

  //         const data = await this.productService.getProductByChildrenCategory(decodeURIComponent(body.category));

  //     return res.status(HTTPSTATUS.OK).json({
  //             message : "fetched",
  //             data : data
  //         })
  //     }
  // )

  // public dummy = aysncHandler(
  //     async(req: Response, res: Response): Promise<any> => {
  //         const data = this.productService.createProduct
  //     }
  // )
}
