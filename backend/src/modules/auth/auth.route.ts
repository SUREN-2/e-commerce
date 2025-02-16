import { Router } from "express";
import { authController } from "./auth.module";


const authRoutes = Router();

authRoutes.post('/register',authController.register);
authRoutes.post('/login',authController.login);
authRoutes.get('/refreshToken',authController.refreshToken);

export default authRoutes