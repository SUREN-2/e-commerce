import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { UnauthorizedExecption } from '../utils/catch-error';
import { ErrorCode } from '../enums/error-code.enum';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  console.log("🛡️ authenticateJwt Middleware Hit!");
  
  passport.authenticate('jwt', { session: false }, (err: any, user: Express.User | undefined, info: { message: any; }) => {
    if (err) {
      console.error("🔥 JWT Authentication Error:", err);
      return next(err);
    }
    
    if (!user) {
      console.log("❌ User not authenticated!");
      return next(new UnauthorizedExecption(
        info?.message || 'Unauthorized access',
        ErrorCode.AUTH_USER_NOT_FOUND
      ));
    }

    console.log("✅ User authenticated successfully!");
    req.user = user;
    next();
  })(req, res, next);
};

// Export a default object to ensure the file is treated as a module
export default {
  authenticateJWT
};