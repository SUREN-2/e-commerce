import { Types } from 'mongoose';

interface OrderItem {
  product: Types.ObjectId; // Reference to Product
  quantity: number;
  price: number;
}

interface Address {
    user?: Types.ObjectId
    firstName: string;
    lastName?: string;
    address?: string;
    city: string;
    email: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
  }

export interface OrderDto {
  user: Types.ObjectId; // Reference to the User
  items: OrderItem[]; // Array of items in the order
  totalAmount: number; // Total amount for the order
  discount?: number; // Discount applied to the entire order (optional)
  finalAmount: number; // Total amount after applying discounts
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled'; // Order status options
  paymentMethod: 'COD' | 'Card' | 'PayPal' | 'UPI'; // Payment methods
  shippingOption: string; // Payment status
  address: Address; // Delivery address
  coupon?: string; // Reference to applied coupon (optional)
  orderedAt?: Date; // Date when the order was placed
  updatedAt?: Date; // Last updated timestamp
}
