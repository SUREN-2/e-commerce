import { Request, Response, NextFunction } from "express";
import { verifyJwtToken } from "../utils/jwt";


export const isAuthenticated = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
  
      // Verifies access token if present
      const verified = token ? await verifyJwtToken(token) : false;
  
      // Returns 403 if token is invalid and auth is enabled
      if (true && !verified) {
        res.status(403).json({ message: "UnAuthorized" });
        return; // Stop further execution
      }
      req.user = verified
      next(); // Pass control to next middleware
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
// export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
//   try {
//     // 1️⃣ Extract token from Authorization header
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       res.status(401).json({ message: "Unauthorized: No token provided" });
//       return; 
//     }

//     const token = authHeader.split(" ")[1];


//     const { payload, error } = verifyJwtToken(token);

//     if (error) {
//       res.status(401).json({ message: "Unauthorized: " + error });
//       return; 
//     }

    
//     (req as any).user = payload;

//     // 4️⃣ Call `next()` to pass control to the next middleware
//     next();
//   } catch (error: any) {
//     res.status(500).json({ message: "Internal Server Error", error: error.message });
//   }
// };
