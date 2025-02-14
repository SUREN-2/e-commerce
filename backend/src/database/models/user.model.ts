import mongoose, { Document, Schema } from "mongoose";
import { compareValue, hashValue } from "../../utils/bcrypt";


interface Address {
  firstName: string;
  lastName: string;
  address?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface UserPreferences {
  enable2FA: boolean;
  emailNotification: boolean;
  twoFactorSecret?: string;
}

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  isEmailVerified: boolean;
  role: "Customer" | "Admin" | "Vendor";
  orders: mongoose.Schema.Types.ObjectId[];
  profileImage?: string;
  addresses: Address[];
  wishlist: mongoose.Schema.Types.ObjectId[];
  cart: { product: mongoose.Schema.Types.ObjectId; quantity: number }[];
  createdAt: Date;
  updatedAt: Date;
  userPreferences: UserPreferences;
  comparePassword(value: string): Promise<boolean>;
}

const addressSchema = new Schema<Address>({
  firstName: { type: String, required: true },
  lastName: {type: String},
  address: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
});

const userPreferencesSchema = new Schema<UserPreferences>({
  enable2FA: { type: Boolean, default: false },
  emailNotification: { type: Boolean, default: true },
  twoFactorSecret: { type: String, required: false },
});

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isEmailVerified: { type: Boolean, default: false },
    role: { type: String, enum: ["Customer", "Admin", "Vendor"], default: "Customer" },
    orders: { type: [mongoose.Schema.Types.ObjectId], ref: "Order", default: [] },
    profileImage: { type: String },
    addresses: { type: [addressSchema], default: [] },
    wishlist: { type: [mongoose.Schema.Types.ObjectId], ref: "Product", default: [] },
    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
      },
    ],
    userPreferences: { type: userPreferencesSchema, default: {} },
  },
  {
    timestamps: true,
    toJSON: {},
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashValue(this.password);
  }
  next();
});

userSchema.methods.comparePassword = async function (value: string) {
  return compareValue(value, this.password);
};

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.userPreferences.twoFactorSecret;
    return ret;
  },
});

const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel;
