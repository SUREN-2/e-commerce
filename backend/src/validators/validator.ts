import mongoose, { disconnect, Types } from "mongoose";
import { z } from "zod";


const emailSchema = z.string().trim().email().min(3).max(100)
const passwordSchema = z.string().trim().min(6).max(255)
const verificationCodeSchema = z.string().trim().min(1).max(25)

const AddressSchema = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  address: z.string().optional(),
  city: z.string(),
  email: emailSchema,
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  phone: z.string(),
});
export const productSchema = z.object({
    title: z.string().trim().min(1).max(255),  
    price: z.number().positive(),  
    discount: z.number().min(0).default(0),  
    tag: z.array(z.string().trim()).min(1),  
    flashSale: z.boolean().default(false),  
    status: z.enum(['Show', 'Hide']),  
    children: z.string().trim().min(1),  
    // createdAt: z.date().default(() => new Date()),  
    description: z.string().optional(),  
    image: z.string(),  
    originalPrice: z.number().positive(),  
    parent: z.string().trim().min(1),  // Assuming it's an ObjectId stored as a string  
    quantity: z.number().int().nonnegative(),  
    slug: z.string().trim().min(1),  
    type: z.string().trim().min(1),  
    unit: z.string().optional(),  
    // updatedAt: z.date().default(() => new Date()),  
    sku: z.string().default(''),  
    __v: z.number().default(0),  
});



const objectIdSchema = z
  .string()
  .regex(/^[a-f\d]{24}$/i, "Invalid ObjectId")
  .refine((id) => mongoose.Types.ObjectId.isValid(id), "Invalid ObjectId");

// Order Item Schema
export const OrderItemSchema = z.object({
  product: z.string().trim().min(1).max(255),
  quantity: z.number().int().positive("Quantity must be a positive integer"),
  price: z.number().positive("Price must be a positive number"),
  discount: z.number().min(0),
  total: z.number().positive(),
});

// Order Schema
export const OrderSchema = z.object({
  // user: objectIdSchema,
  items: z.array(OrderItemSchema).nonempty("Order must contain at least one item"),
  totalAmount: z.number().positive("Total amount must be a positive number"),
  discount: z.number().min(0, "Discount cannot be negative").optional(),
  finalAmount: z.number().positive("Final amount must be a positive number"),
  status: z.enum(["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"]),
  paymentMethod: z.enum(["COD", "Card", "PayPal", "UPI"]),
  shippingOption: z.string(),
  address: AddressSchema,
  coupon: z.string().optional(), // Ensure it's a valid ObjectId if provided
  orderedAt: z.string().datetime().optional(), // ISO date format
  updatedAt: z.string().datetime().optional(), // ISO date format
});

// Type inference for TypeScript
// export type Order = z.infer<typeof OrderSchema>;


// Define the Zod schema for query validation
export const searchSchema = z.object({
  name: z.string().min(1).max(100),
});

export const categorySchema = z.object({
    category: z.string().min(1).max(100),
  });


export const registerSchema = z.object({
    name : z.string().trim().min(1).max(255),
    email: emailSchema,
    password: passwordSchema,

})




export const loginSchema = z.object({
    email: emailSchema,
    password : passwordSchema,
    userAgent : z.string().optional()
})
    


