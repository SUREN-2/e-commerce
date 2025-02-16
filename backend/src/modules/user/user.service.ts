import {UserModel} from "../../database/models/user.model";
import { BadRequestException } from "../../utils/catch-error";

export const getCurrentUserService = async (userId: string) => {

  console.log('uheihe',userId)
  const user = await UserModel.findById(userId)
  .select("-password");

  if (!user) {
    throw new BadRequestException("User not found");
  }

  return {
    user,
  };
};