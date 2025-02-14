import { z } from "zod";


const emailSchema = z.string().trim().email().min(3).max(100)
const passwordSchema = z.string().trim().min(6).max(255)
const verificationCodeSchema = z.string().trim().min(1).max(25)


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
    


