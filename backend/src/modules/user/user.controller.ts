import { Request, Response } from "express";
import { aysncHandler } from "../../middlewares/aysncHandler";
import { HTTPSTATUS } from "../../config/http.config";
import { getCurrentUserService } from "./user.service";
import { UserDocument } from "../../database/models/user.model";




export const getCurrentUserController = aysncHandler(
  async (req: Request, res: Response) => {
    const userId = (req.user as { _id: string })?._id;


    const { user } = await getCurrentUserService(userId);

    return res.status(HTTPSTATUS.OK).json({
      message: "User fetch successfully",
      user,
    });
  }
);