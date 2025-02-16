import { NextFunction, Request, Response } from "express";
import {UserModel} from "../database/models/user.model";

export const isAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = (req as any).user; // Ensure `req.user` exists

    // if (!users || !users.payload || !users.payload.userId) {
    //   res.status(401).json({ message: "Unauthorized: No user found" }); 
    //   return// ✅ Added 'return'
    // }

    const userId = users.payload.userId;
    console.log("sss", userId);

    const user = await UserModel.findOne({ _id: userId }).select("role");

    if (!user) {
      res.status(404).json({ message: "User not found" }); 
      return// ✅ Added 'return'
    }

    console.log("User role:", user.role);

    if (user.role !== "Admin") {
      res.status(403).json({ message: "Forbidden: Admins only" }); // ✅ Added 'return'
      return
    }

    next(); // ✅ Only call `next()` when there are no errors
  } catch (error) {
    console.error("Error checking admin:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return // ✅ Added 'return'
  }
};
