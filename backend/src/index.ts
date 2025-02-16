import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import { config } from "./config/app.config";
import connectDatabase from "./database/database";
import { errorHandler } from "./middlewares/errorHander";
import { HTTPSTATUS } from "./config/http.config";
import { aysncHandler } from "./middlewares/aysncHandler";
import authRoutes from "./modules/auth/auth.route";
import userRoutes from "./modules/user/user.routes";
// import { setupJwtStrategy } from "./strategies/jwt.strategy";
// import { authenticateJWT } from "./strategies/jwt.strategy";
// import passport from "./middlewares/passport"
import passport from "passport";
import { configurePassport } from "./config/passport";
import  authenticateJWT  from "./middlewares/auth";
import productRoutes from "./modules/products/product.routes";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { isAdmin } from "./middlewares/isAdmin";
import { signJwtToken, verifyJwtToken } from "./utils/jwt";
import orderRoutes from "./modules/orders/order.routes";

const app = express();
const BASE_PATH = config.BASE_PATH;

// setupJwtStrategy(passport) // ✅ Register JWT strategy before using it
// app.use(passport.initialize());
// ✅ Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
      allowedHeaders: "Content-Type,Authorization",
    })
  );
app.options("*", cors());


app.get(
  "/",
  aysncHandler(async (req, res) => {
    res.status(HTTPSTATUS.OK).json({ message: "Hello Kata bazar" });
  })
);
app.use(`${BASE_PATH}/protected`, isAuthenticated, (req, res) => {
  res.json({ message: "You have access to this protected route!", user: (req as any).user });
});

// ✅ Authentication Routes
app.use(`${BASE_PATH}/auth`, authRoutes);

app.use(`${BASE_PATH}/user`,isAuthenticated, isAdmin, userRoutes);

app.use(`${BASE_PATH}/order`,isAuthenticated, orderRoutes);

app.use(`${BASE_PATH}/product`, productRoutes)


app.use(errorHandler);

// ✅ Start Server & Connect DB
app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
  await connectDatabase();
});
