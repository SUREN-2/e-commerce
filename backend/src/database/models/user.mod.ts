import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, // Name of the recipient
  addressLine1: { type: String, required: true }, // First line of the address
  addressLine2: { type: String }, // Second line of the address (optional)
  city: { type: String, required: true }, // City
  state: { type: String, required: true }, // State
  postalCode: { type: String, required: true }, // Postal or ZIP code
  country: { type: String, required: true }, // Country
  phone: { type: String, required: true }, // Phone number
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User's name
    email: { type: String, required: true, unique: true }, // User's email (must be unique)
    password: { type: String, required: true }, // Encrypted password
    phone: { type: String, unique: true }, // User's phone number (optional, but unique if provided)
    addresses: { type: [AddressSchema], default: [] }, // Array of address objects
    role: {
      type: String,
      enum: ['Customer', 'Admin', 'Vendor'], // Define roles for user types
      default: 'Customer',
    },
    wishlist: { type: [mongoose.Schema.Types.ObjectId], ref: 'Product', default: [] }, // Products in the wishlist
    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Product in the cart
        quantity: { type: Number, required: true }, // Quantity of the product
      },
    ],
    orders: { type: [mongoose.Schema.Types.ObjectId], ref: 'Order', default: [] }, // Reference to user's orders
    profileImage: { type: String }, // URL of the user's profile image
    createdAt: { type: Date, default: Date.now }, // Account creation date
    updatedAt: { type: Date, default: Date.now }, // Last update date
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);
