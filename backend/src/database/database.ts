import mongoose from "mongoose";
import { config } from "../config/app.config";


const connectDatabase = async() =>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected to MongoDB Database")
    } catch (error) {
        console.log(`Error to Connecting MongoDB Database`)
        process.exit(1)
    }
}

export default connectDatabase;
