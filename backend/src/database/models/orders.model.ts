import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to Product
  quantity: { type: Number, required: true }, // Quantity of the product
  price: { type: Number, required: true }, // Price of the product at the time of order
  discount: { type: Number, default: 0 }, // Discount on the product
  total: { type: Number, required: true }, // Total price for this item (price * quantity - discount)
});

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User
    items: { type: [OrderItemSchema], required: true }, // Array of items in the order
    totalAmount: { type: Number, required: true }, // Total amount for the order
    discount: { type: Number, default: 0 }, // Discount applied to the entire order
    finalAmount: { type: Number, required: true }, // Total amount after applying discounts
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'], // Order status options
      default: 'Pending',
    },
    paymentMethod: {
      type: String,
      enum: ['COD', 'Card', 'PayPal', 'UPI'],
      required: true,
    },
    shippingOption: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true, // Delivery address
    },
    coupon: { type: String}, // Reference to applied coupon (optional)
    orderedAt: { type: Date, default: Date.now }, // Date when the order was placed
    updatedAt: { type: Date, default: Date.now }, // Last updated timestamp
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default mongoose.model('Order', OrderSchema);
