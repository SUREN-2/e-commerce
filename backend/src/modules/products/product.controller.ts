import { Request, Response } from "express";
import { aysncHandler } from "../../middlewares/aysncHandler";
import { ProductService } from "./product.service";
import { HTTPSTATUS } from "../../config/http.config";
import { categorySchema, productSchema, searchSchema } from "../../validators/validator";


export class ProductController{

    private productService: ProductService;

    constructor(productService : ProductService){
        this.productService = productService
    }

    public getAllProductsController = aysncHandler(
        async(req: Request,res: Response): Promise<any> => {
            const data = await this.productService.getAllProductService()
        return res.status(HTTPSTATUS.ACCEPTED).json({
                message : "All Products Fetched Successfully",
                data: data
        })
        } 
    )

    public getAllDiscountProductsController = aysncHandler(
        async(req: Request,res: Response): Promise<any> => {
            const data = await this.productService.getDiscountProductService()
        return res.status(HTTPSTATUS.ACCEPTED).json({
                message : "All Discount Products Fetched Successfully",
                data: data
        })
        } 
    )

    public createProduct = aysncHandler(
        async(req: Request, res: Response): Promise<any> => {
            const body = productSchema.parse({...req.body})
            const data = await this.productService.createProduct(body)
            // console.log(data)
        return res.status(HTTPSTATUS.CREATED).json({
                message : "Product created Successfully",
                data : data
            })
        }
    )

    public getProductByNameController = aysncHandler(
        async(req: Request, res: Response): Promise<any> => {
           
            const body = searchSchema.parse(req.query)

            
            const data = await this.productService.getProductByName(body.name);
        return res.status(HTTPSTATUS.OK).json({
                message : "fetched",
                data : data
            })
        }
    )

    public getProductByParentCategoryController = aysncHandler(
        async(req: Request, res: Response): Promise<any> => {
           console.log('fldld',req)
            const body = categorySchema.parse(req.query)

            console.log('from ',body.category)
            const data = await this.productService.getProductByParentCatergory(decodeURIComponent(body.category));
        return res.status(HTTPSTATUS.OK).json({
                message : "fetched",
                data : data
            })
        }
    )

    public getProductByChildrenCategoryController = aysncHandler(
        async(req: Request, res: Response): Promise<any> => {
           
            const body = categorySchema.parse(req.query)

            
            const data = await this.productService.getProductByChildrenCategory(decodeURIComponent(body.category));
            
        return res.status(HTTPSTATUS.OK).json({
                message : "fetched",
                data : data
            })
        }
    )

    // public dummy = aysncHandler(
    //     async(req: Response, res: Response): Promise<any> => {
    //         const data = this.productService.createProduct
    //     }
    // )
}