import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { aysncHandler } from "../../middlewares/aysncHandler";
import { HTTPSTATUS } from "../../config/http.config";
import { loginSchema, registerSchema } from "../../validators/validator";
import { getRefreshTokenCookieOptions, setAuthenticationCookies } from "../../utils/cookie";
import { UnauthorizedExecption } from "../../utils/catch-error";

export class AuthController {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public register = aysncHandler(
    async (req: Request, res: Response): Promise<any> => {
        const body = registerSchema.parse({ ...req.body });
        const user = await this.authService.register(body);
      return res.status(HTTPSTATUS.CREATED).json({
        message: "User Registered Successfully",
        data: user,
      });
    }
  );

  public login = aysncHandler(
    async (req: Request, res: Response): Promise<any> => {

      console.log("login called")
      const userAgent = req.headers["user-agent"];
      const body = loginSchema.parse({ ...req.body, userAgent });
      const { user, accessToken, refreshToken } = await this.authService.login(
        body
      );

      // console.log(`kk`,refreshToken)

      

      const response = setAuthenticationCookies({ res, refreshToken });

      // console.log("Response Headers after setting cookie:", response.getHeaders());
  
      return response.status(HTTPSTATUS.OK).json({
        message: "User login Successful",
        user: user,
        cookies: req.cookies, // This will only log request cookies, not newly set ones
        accessToken: accessToken,
      });
      
    }
  );

  public refreshToken = aysncHandler(
    async (req: Request , res: Response) : Promise<any> => {
      console.log('refresh cookie',req.cookies)

      const refreshToken = req.cookies.refreshToken as string |undefined;

      if(!refreshToken){
        throw new UnauthorizedExecption("Missing Refresh Token")
      }


      const {accessToken,newRefreshToken} = await this.authService.refreshToken(refreshToken)


      if(newRefreshToken){
        res.cookie("refreshToken", newRefreshToken, getRefreshTokenCookieOptions())
      }

      res.status(HTTPSTATUS.OK).json({
        message: "Refresh access Token successfull",
        accessToken: accessToken
      })
    }
  )



}
