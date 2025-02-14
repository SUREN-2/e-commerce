import mongoose from "mongoose"

const productSchema = new mongoose.Schema({ 
    // id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    price:
    {
        type: Number,
        required: true
    },
    discount: { type: Number, default: 0 },
    tag: { type: [String], required: true },
    flashSale: { type: Boolean, default: false },
    status: { type: String, enum: ['Show', 'Hide'], required: true },
    children: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String },
    image: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    parent: {type: String, required: true},
    quantity: { type: Number, required: true },
    slug: { type: String, required: true, unique: true },
    
    type: { type: String, required: true },
    unit: { type: String },
    updatedAt: { type: Date, default: Date.now },
    sku: { type: String, default: '' },
    __v: { type: Number, default: 0 },

},
{
    timestamps: true
})

export default mongoose.model("product",productSchema)