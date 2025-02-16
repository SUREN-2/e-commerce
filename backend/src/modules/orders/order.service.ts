import { Types } from "mongoose";
import { config } from "../../config/app.config";
import OrdersModel from "../../database/models/orders.model";
import ProductModel from "../../database/models/product.model";
import SessionModel from "../../database/models/session.model";
import {UserModel,  Address, AddressModel } from "../../database/models/user.model";
import { ErrorCode } from "../../enums/error-code.enum";
import { LoginDto, RegisterDto } from "../../interface/auth.interface";
import { OrderDto } from "../../interface/order.interface";
import { ProductDto } from "../../interface/product.interface";
import { BadRequestException, UnauthorizedExecption } from "../../utils/catch-error";
import { calculateExpirationDate, ONE_DAY_IN_MS } from "../../utils/get-time";
import { accessTokenSignOptions, refreshTokenSignOptions, RefreshTPayload, signJwtToken, verifyJwtToken } from "../../utils/jwt";

export class OrderService{

    // public async getAllProductService(){
    //     const products = await ProductModel.find({})
    //     return products
    // }

    public async getUserOrders(userId : any){
        
        //   const { userId } = req.params;
      
          // Validate user existence
          const user = await UserModel.findById(userId);
          if (!user) {
            // return res.status(404).json({ message: "User not found" });
            throw new BadRequestException("User Not Found", ErrorCode.AUTH_USER_NOT_FOUND)
          }
      
          // Fetch all orders of the user
          const orders = await OrdersModel.find({ user: userId }).sort({ orderedAt: -1 });
      
          // Count orders by status
          const totalOrders = orders.length;
          const pendingOrders = orders.filter((order) => order.status === "Pending").length;
          const confirmedOrders = orders.filter((order) => order.status === "Confirmed").length;
          const shippedOrders = orders.filter((order) => order.status === "Shipped").length;
          const deliveredOrders = orders.filter((order) => order.status === "Delivered").length;

          const processingOrders = confirmedOrders + shippedOrders
        
      
          // Response object
          return {
            totalOrders,
            pendingOrders,
            processingOrders,
            deliveredOrders,
            orders, // Returning all order details
          };
        
      }

    public async createOrder(orderDto: OrderDto, address: Address) {
        try {
          console.log("Processing order for user:", orderDto.user);

      
          let addressId: Types.ObjectId;
      
          // Check if the address already exists
          const existingAddress = await AddressModel.findOne({
            
            ...address,
            user: orderDto.user,
          });
      
          if (existingAddress) {
            // Update existing address
            await AddressModel.updateOne({ _id: existingAddress._id }, { $set: address });
            addressId = existingAddress._id;
            console.log("Updated address:", existingAddress._id);
          } else {
            // Create a new address entry
            const newAddress = await AddressModel.create({ ...address, user: orderDto.user });
            addressId = newAddress._id;
            console.log("Created new address:", newAddress._id);
          }
      
          // Create new order with single address ID
          const newOrder = await OrdersModel.create({
            ...orderDto,
            address: addressId, // ✅ Store address ID
          });

          await UserModel.findByIdAndUpdate(orderDto.user, { $push: { orders: newOrder._id } });
      
          console.log("Order Created:", newOrder._id);
          return newOrder._id;
        } catch (error) {
          console.error("Error creating order:", error);
          throw error;
        }
      }

    // public async createOrder(orderDto : OrderDto){
    //     const {user} = orderDto;

    //     console.log('user',user)
        
    //     const existingUser = await UserModel.exists({user});

    //     // if(!existingUser){
    //     //     throw new BadRequestException(
    //     //         "User does not exist");
    //     // }

    //     const new_order = await OrdersModel.create(orderDto)

    //     console.log("Order Created")
    //     // console.log(new_product._id)

    //     return new_order._id;
    // }

    // public async getProductById(title: string){
    //     const product = await ProductModel.find({ slug: title })

    //     if(!product){
    //         throw new BadRequestException(
    //             "Product Not Exist");
    //     }

    //     return product
    // }

    // public async getProductByName(value: string) {

    //     const products = ProductModel.find({
    //       title: { $regex: new RegExp(value, "i") }, // Case-insensitive partial match
    //     });

    //     if(!products){
    //         throw new BadRequestException(
    //             "Product Not Exist");
    //     }
    //     console.log(products)

    //     return products
    //   }

    //   public async getProductByParentCatergory(value: string) {

        
    //     const products = ProductModel.find({
    //       parent: { $regex: new RegExp(value, "i") }, // Case-insensitive partial match
    //     });

    //     if(!products){
    //         throw new BadRequestException(
    //             "Product Not Exist");
    //     }

    //     return products
    //   }

    //   public async getProductByChildrenCategory(value: string) {

        
        
    //     const products = ProductModel.find({
    //       children: { $regex: new RegExp(value, "i") }, // Case-insensitive partial match
    //     });

       

    //     if(!products){
    //         throw new BadRequestException(
    //             "Product Not Exist");
    //     }

    //     return products
    //   }

    // public async register(registerData : RegisterDto){
    //     const {name,password,email} = registerData


    //     const existingUser = await UserModel.exists({email});

    //     if(existingUser){
    //         throw new BadRequestException(
    //             "User already exists with this email.",
    //             ErrorCode.AUTH_EMAIL_ALREADY_EXISTS);
    //     }

    //     const new_user = await UserModel.create({
    //         name,
    //         email,
    //         password
    //     });

    //     console.log("User created succesfully")
    // }

    // public async login(loginData: LoginDto){
    //     const {email,password,userAgent} = loginData;

    //     const user = await UserModel.findOne({email})

    //     if(!user){
    //         throw new BadRequestException("User not found",ErrorCode.AUTH_USER_NOT_FOUND)
    //     }

    //     const isPasswordIsValid = user.comparePassword(password);

    //     if(!isPasswordIsValid){
    //         throw new BadRequestException("Invalid email or password provided",ErrorCode.AUTH_USER_NOT_FOUND)
    //     }


    //     const session = await SessionModel.create({
    //         userId: user._id,
    //         userAgent,
    //     })

    //     const accessToken  = signJwtToken({
    //         userId : user._id,
    //         sessionId: session._id,
    //     });



    //     const refreshToken = signJwtToken({
    //             sessionId: session._id,
    //     },refreshTokenSignOptions);



    //     return {user,accessToken,refreshToken};

    // }

    // public async refreshToken(refreshToken: string){
    //     const {payload} = verifyJwtToken<RefreshTPayload>(refreshToken, {
    //         secret : refreshTokenSignOptions.secret
    //     })

    //     if(!payload){
    //         throw new UnauthorizedExecption("Invalid Refresh token")
    //     }

    //     const session = await SessionModel.findById(payload.sessionId)
    //     const now = Date.now()

    //     if(!session){
    //         throw new UnauthorizedExecption("Session doesn`t exist")
    //     }

    //     if(session.expiredAt.getTime() <= now){
    //         throw new UnauthorizedExecption("Session Expired")
    //     }

    //     const sessionRequireRefresh = session.expiredAt.getTime() - now <= ONE_DAY_IN_MS
        

    //     if(sessionRequireRefresh){
    //         session.expiredAt = calculateExpirationDate(config.JWT.REFRESH_EXPIRES_IN)
    //         await session.save();
    //     }
    //     const newRefreshToken =  sessionRequireRefresh ? signJwtToken({
    //         sessionId : session._id
    //     },
    //        refreshTokenSignOptions
    //     ) : undefined


    //     const accessToken = signJwtToken({
    //         userId: session.userId,
    //         sessionId: session._id
    //     },accessTokenSignOptions)

    //     return {
    //         accessToken,newRefreshToken
    //     }
    // }
}