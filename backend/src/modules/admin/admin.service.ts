import { Types } from "mongoose";
import { config } from "../../config/app.config";
import OrdersModel from "../../database/models/orders.model";
import ProductModel from "../../database/models/product.model";
import SessionModel from "../../database/models/session.model";
import {
  UserModel,
  Address,
  AddressModel,
} from "../../database/models/user.model";
import { ErrorCode } from "../../enums/error-code.enum";
import { LoginDto, RegisterDto } from "../../interface/auth.interface";
import { OrderDto } from "../../interface/order.interface";

import {
  BadRequestException,
  UnauthorizedExecption,
} from "../../utils/catch-error";

export class AdminService {
  public async updateOrderStatusById(orderId: string, orderStatus: string){
    const order = await OrdersModel.findByIdAndUpdate(orderId, { status: orderStatus }, { new: true });

    // if (!order) {
    //     return res.status(404).json({ message: 'Order not found' });
    // }
    
  }

  public async getUserOrders(userId: any) {
    //   const { userId } = req.params;

    // Validate user existence
    const user = await UserModel.findById(userId);
    if (!user) {
      // return res.status(404).json({ message: "User not found" });
      throw new BadRequestException(
        "User Not Found",
        ErrorCode.AUTH_USER_NOT_FOUND
      );
    }

    // Fetch all orders of the user
    const orders = await OrdersModel.find({ user: userId }).sort({
      orderedAt: -1,
    });

    // Count orders by status
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(
      (order) => order.status === "Pending"
    ).length;
    const confirmedOrders = orders.filter(
      (order) => order.status === "Confirmed"
    ).length;
    const shippedOrders = orders.filter(
      (order) => order.status === "Shipped"
    ).length;
    const deliveredOrders = orders.filter(
      (order) => order.status === "Delivered"
    ).length;

    const processingOrders = confirmedOrders + shippedOrders;

    // Response object
    return {
      totalOrders,
      pendingOrders,
      processingOrders,
      deliveredOrders,
      orders, // Returning all order details
    };
  }

  public async getOrdersWithStats() {
    try {
        console.log("Fetching orders from the database...");

        // Fetch all orders from the database and populate user details
        const orders = await OrdersModel.find().populate("user", "name email");

        // Log fetched orders to debug if necessary
        console.log("Orders fetched:", orders);

        if (!orders || orders.length === 0) {
            return {
                message: "No orders found",
                totalOrders: 0,
                totalRevenue: 0,
                pendingOrders: 0,
                confirmedOrders: 0,
                shippedOrders: 0,
                deliveredOrders: 0,
                cancelledOrders: 0,
                orders: [],
            };
        }

        // Total number of orders
        const totalOrders = orders.length;

        // Total revenue from all orders (sum of `finalAmount`)
        const totalRevenue = orders.reduce((sum, order) => sum + (order?.finalAmount || 0), 0);

        // Order status counts
        const orderStatusCounts = {
            pendingOrders: 0,
            confirmedOrders: 0,
            shippedOrders: 0,
            deliveredOrders: 0,
            cancelledOrders: 0,
        };

        orders.forEach(order => {
            if (!order || !order.status) return; // Skip invalid orders

            switch (order.status) {
                case "Pending":
                    orderStatusCounts.pendingOrders++;
                    break;
                case "Confirmed":
                    orderStatusCounts.confirmedOrders++;
                    break;
                case "Shipped":
                    orderStatusCounts.shippedOrders++;
                    break;
                case "Delivered":
                    orderStatusCounts.deliveredOrders++;
                    break;
                case "Cancelled":
                    orderStatusCounts.cancelledOrders++;
                    break;
            }
        });

        const processingOrders = orderStatusCounts.pendingOrders + orderStatusCounts.shippedOrders + orderStatusCounts.confirmedOrders

        console.log("Processed orders successfully");

        const ordersWithAddressDetails = await Promise.all(
          orders.map(async (order) => {
              const address = await AddressModel.findById(order.address); // Fetch address by ID
              return {
                  ...order.toObject(),
                  address: address ? address : null, // Add the full address or null if not found
              };
          })
      );

      return {
          processingOrders : processingOrders || 0,
          totalOrders: totalOrders || 0,
          totalRevenue: totalRevenue || 0,
          pendingOrders: orderStatusCounts?.pendingOrders ?? 0,
          confirmedOrders: orderStatusCounts?.confirmedOrders ?? 0,
          shippedOrders: orderStatusCounts?.shippedOrders ?? 0,
          deliveredOrders: orderStatusCounts?.deliveredOrders ?? 0,
          cancelledOrders: orderStatusCounts?.cancelledOrders ?? 0,
          orders: ordersWithAddressDetails, // Include orders with populated address details
      };
    } catch (error) {
        console.error("Error fetching orders:", error);
        return {
            message: "Error fetching orders",
            totalOrders: 0,
            totalRevenue: 0,
            pendingOrders: 0,
            confirmedOrders: 0,
            shippedOrders: 0,
            deliveredOrders: 0,
            cancelledOrders: 0,
            orders: [],
        };
    }
}

  // public async createOrder(orderDto: OrderDto, address: Address) {
  //   try {
  //     console.log("Processing order for user:", orderDto.user);

  //     let addressId: Types.ObjectId;

  //     // Check if the address already exists
  //     const existingAddress = await AddressModel.findOne({
  //       ...address,
  //       user: orderDto.user,
  //     });

  //     if (existingAddress) {
  //       // Update existing address
  //       await AddressModel.updateOne(
  //         { _id: existingAddress._id },
  //         { $set: address }
  //       );
  //       addressId = existingAddress._id;
  //       console.log("Updated address:", existingAddress._id);
  //     } else {
  //       // Create a new address entry
  //       const newAddress = await AddressModel.create({
  //         ...address,
  //         user: orderDto.user,
  //       });
  //       addressId = newAddress._id;
  //       console.log("Created new address:", newAddress._id);
  //     }

  //     // Create new order with single address ID
  //     const newOrder = await OrdersModel.create({
  //       ...orderDto,
  //       address: addressId, // ✅ Store address ID
  //     });

  //     await UserModel.findByIdAndUpdate(orderDto.user, {
  //       $push: { orders: newOrder._id },
  //     });

  //     console.log("Order Created:", newOrder._id);
  //     return newOrder._id;
  //   } catch (error) {
  //     console.error("Error creating order:", error);
  //     throw error;
  //   }
  // }

  // import Order from "../models/Order.js"; // Import Order Model
  // import { Request, Response } from "express";

  // Get Orders and Order Statistics
  // public async getOrdersWithStats() {
  //   try {

  //     console.log('from here')
  //     // Fetch all orders from the database
  //     const orders = await OrdersModel.find().populate("user", "name email"); // Populate user details

  //     if (!orders || orders.length === 0) {
  //       return {
  //         message: "No orders found",
  //         totalOrders: 0,
  //         totalRevenue: 0,
  //         pendingOrders: 0,
  //         confirmedOrders: 0,
  //         shippedOrders: 0,
  //         deliveredOrders: 0,
  //         cancelledOrders: 0,
  //         orders: [],
  //       };
  //     }

  //     // Calculate total number of orders
    
  //     // Calculate total revenue (sum of all finalAmount)
  //   // Ensure orders is always an array before reducing
  //   const totalOrders = orders.length;

  //   // Total revenue from all orders (using `finalAmount`)
  //   const totalRevenue = orders.reduce((sum, order) => sum + (order.finalAmount || 0), 0);

  //   // Count orders by status
  //   const orderStatusCounts = {
  //     pendingOrders: 0,
  //     confirmedOrders: 0,
  //     shippedOrders: 0,
  //     deliveredOrders: 0,
  //     cancelledOrders: 0,
  //   };

  //   orders.forEach(order => {
  //     if (order?.status === "Pending") orderStatusCounts.pendingOrders++;
  //     if (order?.status === "Confirmed") orderStatusCounts.confirmedOrders++;
  //     if (order?.status === "Shipped") orderStatusCounts.shippedOrders++;
  //     if (order?.status === "Delivered") orderStatusCounts.deliveredOrders++;
  //     if (order?.status === "Cancelled") orderStatusCounts.cancelledOrders++;
  //   });

  //   console.log('to',totalOrders)

  //   console.log('tr',totalRevenue)

  //   console.log('skdksjs',orderStatusCounts)

  //   console.log('orders',orders)

  //   return {
  //     totalOrders: totalOrders || 0,
  //     totalRevenue: totalRevenue || 0,
  //     pendingOrders: orderStatusCounts?.pendingOrders || 0,
  //     confirmedOrders: orderStatusCounts?.confirmedOrders || 0,
  //     shippedOrders: orderStatusCounts?.shippedOrders || 0,
  //     deliveredOrders: orderStatusCounts?.deliveredOrders || 0,
     
  //     orders: Array.isArray(orders) ? orders : [], // Ensure orders is always an array
  //   };
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //   }
  // }

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
